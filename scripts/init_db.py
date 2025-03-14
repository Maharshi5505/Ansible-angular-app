from config.database import Base, engine
from models.game import Game

def init_db():
    Base.metadata.create_all(bind=engine)
    print("✅ Database initialized!")

if __name__ == "__main__":
    init_db()
