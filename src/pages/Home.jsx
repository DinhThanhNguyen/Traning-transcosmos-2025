import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/api";
import MovieGrid from "../components/MovieGrid";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(res => setMovies(res.data.results));
  }, []);

  return (
    <main className="max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-4">Phim phổ biến</h2>
      <MovieGrid movies={movies} />
    </main>
  );
}
