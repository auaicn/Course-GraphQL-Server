let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99,
  },
  {
    id: 3,
    name: "Logan",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getMovieById = (id) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);

  return filteredMovies[0];
};

export const addMovie = (name, score) => {
  const lastMovie = movies[movies.length - 1];
  const generatedId = lastMovie.id + 1;

  const newMovie = {
    id: generatedId,
    name,
    score,
  };

  movies.push(newMovie);
  return newMovie;
};

export const deleteMovieById = (id) => {
  const moviesToMaintain = movies.filter((movie) => id !== movie.id);

  if (moviesToMaintain.length < movies.length) {
    movies = moviesToMaintain;
    return true;
  } else {
    return false;
  }
};
