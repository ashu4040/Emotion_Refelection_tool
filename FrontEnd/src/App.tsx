import { useState } from "react";
import EmotionForm from "./components/EmotionForm";
import ResultCard from "./components/ResultCard";

const apiUrl = import.meta.env.VITE_API_URL;

export default function App() {
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (text: string) => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`${apiUrl}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("API Error");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Failed to analyze emotion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center">
   
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Emotion Reflection Tool
        </h1>
        <EmotionForm onSubmit={handleSubmit} />
        {loading && <p className="mt-4 text-blue-600 text-center">Analyzing...</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {result && <ResultCard emotion={result.emotion} confidence={result.confidence} />}
      </div>
    
  );
}
