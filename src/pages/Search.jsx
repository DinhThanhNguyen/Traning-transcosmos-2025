import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieGrid from "../components/MovieGrid";

export default function Search() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const params = new URLSearchParams(location.search);
  const q = params.get("q");

  useEffect(() => {
    if (q) {
      searchMovies(q).then((res) =>
        setMovies(res.data.results)
      );
    }
  }, [q]);

  return (
    <main>
      <h2>Kết quả tìm kiếm: "{q}"</h2>
      <MovieGrid movies={movies} />
    </main>
  );
}
