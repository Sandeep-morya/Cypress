import { genre,getGenre } from ".";

export default function MovieCard({ data }) {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        alt="movie"
      />
      <div className="info">
        <h4>{data.original_title}</h4>
        <h6>{getGenre(genre,data.genre_ids)}</h6>
      </div>
    </div>
  );
}
