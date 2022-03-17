import { owner } from "../database/owner.js";
import { getFriends, getFriendById } from "../database/friends.js";
import { getMovies, getMovie, getSuggestions } from "../database/movies.js";

const resolvers = {
  Query: {
    owner: () => owner,
    friends: () => getFriends(),
    friend: (_, { id }) => getFriendById(id),
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
