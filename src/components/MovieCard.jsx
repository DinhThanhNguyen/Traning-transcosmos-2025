import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <img
        className="w-full h-[320px] object-cover"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={movie.title}
      />
      <p className="text-sm font-semibold text-gray-800 mt-2 px-2 line-clamp-2 pb-4">{movie.title}</p>
    </Link>
  );
}
