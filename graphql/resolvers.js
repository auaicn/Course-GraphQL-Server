const auaicn = {
  age: "24",
  email: "crorowslowpp@gmail.com",
  university: "hanyang university",
};

const resolvers = {
  Query: {
    owner: () => auaicn,
  },
};

export default resolvers;
