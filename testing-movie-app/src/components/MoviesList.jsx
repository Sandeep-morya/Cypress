import MovieCard from "./MovieCard"
const MoviesList = ({list}) => {
  return (
      <div className="movies">
          {list.map((e) => (
              <MovieCard key={e.id} data={e} />
          ))}
      </div>
  )
}

export default MoviesList