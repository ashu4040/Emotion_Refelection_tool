# 🎭 Emotion Reflection Tool

A clean, responsive full-stack web app that helps users reflect on their feelings by entering a short text and receiving a mock emotion analysis with a confidence score.  

Built as part of an internship assignment, focusing on **code quality**, **API integration**, and a clear **UI/UX**.  

---

## 📸 Preview
 
> ![Preview](./FrontEnd/src/assets/screenshot.png)

---

## 🚀 Features

✅ Mobile-first responsive design  
✅ Beautiful background image with glassmorphism effect  
✅ Loading, error, and result states handled gracefully  
✅ FastAPI-based backend API with mock analysis response  
✅ Clean code, TypeScript types, reusable components  

---

## 🧾 Tech Stack

- ✨ **Frontend**
  - React (with Vite)
  - TypeScript
  - TailwindCSS
- ⚙️ **Backend**
  - Python
  - FastAPI
  - Uvicorn

---

## 🗂 Project Structure

Emotion-Reflection-Tool/
├── BackEnd/
│ ├── main.py
│ ├── venv/
│ └── requirements.txt
├── FrontEnd/
│ ├── src/
│ │ ├── App.tsx
│ │ ├── components/
│ │ │ ├── EmotionForm.tsx
│ │ │ └── ResultCard.tsx
│ │ ├── assets/
│ │ │ └── 2634805.jpg
│ │ └── index.css
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── vite.config.ts
│ └── .env
└── README.md


---

🖥️ Frontend + Backend Setup
## For the Frontend, navigate to the FrontEnd/ folder and run:

cd FrontEnd
npm install
Then create a .env file in FrontEnd/ with the following content:
VITE_API_URL=http://127.0.0.1:8000
Start the development server with:
npm run dev
Frontend runs at: http://localhost:5173. Optional: you can also build for production with npm run build and preview with npm run preview.

## For the Backend, navigate to the BackEnd/ folder and create a virtual environment with:

cd BackEnd
python3 -m venv venv
Activate it:
source venv/bin/activate       # on Linux/Mac
venv\Scripts\activate          # on Windows
Then install dependencies:
pip install fastapi uvicorn
(or pip install -r requirements.txt if a requirements.txt exists).
Start the backend server with:
uvicorn main:app --reload
Backend runs at: http://127.0.0.1:8000. You can test it by sending a POST request to /analyze with body { "text": "I feel happy today" } and it will return { "emotion": "Anxious", "confidence": 0.85 }.
