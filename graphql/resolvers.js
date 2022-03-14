import { owner, friends, getFriendById } from "./database.js";

const resolvers = {
  Query: {
    owner: () => owner,
    friends: () => friends,
    friend: (_, { id }) => {
      console.log(id);

      return getFriendById({ id });
    },
  },
};

export default resolvers;
