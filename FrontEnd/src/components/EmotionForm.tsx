import { useState } from "react";

export default function EmotionForm({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 ">
      <textarea
        className=" w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
        placeholder="How are you feeling today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
