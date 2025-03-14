import requests
import json
from igdb.wrapper import IGDBWrapper
from config.settings import CLIENT_ID, CLIENT_SECRET
from models.game import Game
from config.database import SessionLocal
from scripts.init_db import init_db

# Authenticate with IGDB
def get_access_token():
    url = "https://id.twitch.tv/oauth2/token"
    params = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "grant_type": "client_credentials"
    }
    response = requests.post(url, params)
    return response.json()["access_token"]

access_token = get_access_token()
wrapper = IGDBWrapper(CLIENT_ID, access_token)

# Fetch games
def fetch_games():
    query = "fields id, name, genres, platforms, first_release_date, aggregated_rating, summary, cover.image_id; limit 50;"
    byte_array = wrapper.api_request("games", query)
    return json.loads(byte_array)

# Parse data
def parse_games(raw_data):
    games = []
    for game in raw_data:
        games.append({
            "id": game["id"],
            "name": game.get("name", "Unknown"),
            "genres": game.get("genres", []),
            "platforms": game.get("platforms", []),
            "release_date": game.get("first_release_date", None),
            "rating": game.get("aggregated_rating", None),
            "summary": game.get("summary", ""),
            "cover_url": f"https://images.igdb.com/igdb/image/upload/t_cover_big/{game['cover']['image_id']}.jpg" if "cover" in game else None
        })
    return games

# Store in DB
def save_to_db(games):
    db = SessionLocal()
    for game in games:
        db_game = Game(**game)
        db.merge(db_game)  
    db.commit()
    db.close()

if __name__ == "__main__":
    init_db()
    raw_data = fetch_games()
    games = parse_games(raw_data)
    save_to_db(games)
    print("✅ IGDB Data Fetched and Stored Successfully!")
