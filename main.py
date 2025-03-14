from fastapi import FastAPI
from config.database import SessionLocal
from models.game import Game

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to GameGenius API"}

@app.get("/games/")
def get_games():
    db = SessionLocal()
    games = db.query(Game).all()
    db.close()
    return games
