from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os


load_dotenv()


ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173")

app = FastAPI(
    title="Emotion Reflection Tool API",
    description="Mock API to analyze user input text and return fake emotion analysis.",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[ALLOWED_ORIGINS],
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextInput(BaseModel):
    text: str


class EmotionResponse(BaseModel):
    emotion: str
    confidence: float

@app.post("/analyze", response_model=EmotionResponse)
async def analyze(input: TextInput):
    """
    Analyze the given text and return a fake emotion result.
    """
    return EmotionResponse(
        emotion="Anxious",
        confidence=0.85
    )
