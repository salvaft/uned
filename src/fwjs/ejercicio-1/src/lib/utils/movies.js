import movies from "../../assets/movies.json";

export const getMovie = (id) => {
  const movie =
    movies.find((movie) => {
      return movie.id == id;
    }) ?? null;
  return movie;
};

export const getMovies = () => movies;
