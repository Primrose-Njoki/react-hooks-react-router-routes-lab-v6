/*function Movie() {
  const { id } = useParams();
  // Convert id to number for comparison
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </>
  );
}
export default Movie */
import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));
  
  if (!movie) return <div>Movie not found</div>;
  
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
}