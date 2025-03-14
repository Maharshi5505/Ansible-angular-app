from sqlalchemy import Column, Integer, String, Float, JSON
from config.database import Base

class Game(Base):
    __tablename__ = "games"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    genres = Column(JSON)  
    platforms = Column(JSON)  
    release_date = Column(Integer, nullable=True)
    rating = Column(Float, nullable=True)
    summary = Column(String, nullable=True)
    cover_url = Column(String, nullable=True)
