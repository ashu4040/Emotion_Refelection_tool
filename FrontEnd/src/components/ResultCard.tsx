export default function ResultCard({
  emotion,
  confidence,
}: {
  emotion: string;
  confidence: number;
}) {
  return (
    <div className="p-4 bg-black/50 backdrop-blur-sm shadow-md rounded-md max-w-sm text-center hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-white">Analysis Result</h2>
      <p className="text-white">
        <strong>Emotion:</strong> {emotion}
      </p>
      <p className="text-white">
        <strong>Confidence:</strong> {(confidence * 100).toFixed(2)}%
      </p>
    </div>
  );
}
