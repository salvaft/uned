import { getMovies } from "../utils/movies";
import Card from "./card";
import { Link } from "react-router-dom";
// 5 movies by default
function Pelis({ qty = 5 }) {
  const movies = getMovies();
  return (
    <>
      {movies?.length > 0 &&
        movies.slice(0, qty).map((movie) => (
          <Link className="w-fit" key={movie.id} to={`/${movie.id}`}>
            <Card movie={movie}></Card>
          </Link>
        ))}
    </>
  );
}

export default Pelis;
