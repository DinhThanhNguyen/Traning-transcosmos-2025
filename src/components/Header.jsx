import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");
  const nav = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) nav(`/search?q=${query}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-sky-500">
          🎬 MovieApp
        </Link>

        <form onSubmit={handleSearch}>
          <input
            className="px-3 py-1 rounded-md border text-sm focus:outline-none focus:ring"
            placeholder="Search movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}
