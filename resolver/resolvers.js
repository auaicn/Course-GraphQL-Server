import { owner } from "../database/owner.js";
import { getFriends, getFriendById } from "../database/friends.js";
import { getMovies, getMovieById, addMovie, deleteMovieById } from "../database/movies.js";

const resolvers = {
  Query: {
    owner: () => owner,
    friends: () => getFriends(),
    friend: (_, { id }) => getFriendById(id),
    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovieById(id),
  },
};

export default resolvers;
