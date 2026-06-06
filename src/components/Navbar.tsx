export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">
          College Discovery
        </h1>

        <div className="space-x-4">
          <a href="/">Home</a>
          <a href="/colleges">Colleges</a>
          <a href="/compare">Compare</a>
          <a href="/predictor">Predictor</a>
          <a href="/discussions">Q&A</a>
        </div>
      </div>
    </nav>
  );
}