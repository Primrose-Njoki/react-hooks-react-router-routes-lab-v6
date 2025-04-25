function Movie() {
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