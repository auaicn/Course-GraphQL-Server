import { owner, friends, getFriendById } from "../database/people.js";
import { getMovieById, getMovies } from "../database/movie.js";

const resolvers = {
  Query: {
    owner: () => owner,
    friends: () => friends,
    friend: (_, { id }) => getFriendById(id),
    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id),
  },
};

export default resolvers;
