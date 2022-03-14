import { owner } from "../database/owner.js";
import { getFriends, getFriendById } from "../database/friends.js";
import { getMovies } from "../database/movies.js";

const resolvers = {
  Query: {
    owner: () => owner,
    friends: () => getFriends(),
    friend: (_, { id }) => getFriendById(id),
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers;
