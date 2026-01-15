import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../services/api";


export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetail(id).then((res) => setMovie(res.data));
  }, [id]);
  
  if (!movie) return <p>Loading...</p>;

  return (
    <>
    <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      <img
        className="w-full md:w-80 rounded-xl"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {movie.overview}
        </p>
        <p className="text-yellow-500 text-lg">⭐ {movie.vote_average}</p>
        <p className="text-lg text-500">Thời lượng: {movie.runtime}m</p>
        <p className="text-lg text-500">Công chiếu: {movie.release_date.split('-')[0]}</p>
      </div>
    </div>
    </>
  );
}
