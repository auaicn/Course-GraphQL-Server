import { owner } from "../database/owner.js";
import { getFriends, getFriendById } from "../database/friends.js";

const resolvers = {
  Query: {
    owner: () => owner,
    friends: () => getFriends(),
    friend: (_, { id }) => getFriendById(id),
  },
};

export default resolvers;
