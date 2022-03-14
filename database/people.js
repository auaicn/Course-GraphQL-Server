export const owner = {
  age: 24,
  email: "crorowslowpp@gmail.com",
  university: "hanyang university",
};

export const friends = [
  {
    id: 1,
    name: "kyungho",
    age: 24,
    email: "crorowslowpp@gmail.com",
    company: "Vetching",
  },
  {
    id: 2,
    name: "seokmin",
    age: 23,
    email: "seokmin@gmail.com",
    company: "Hanjeon Art Center",
  },
  {
    id: 3,
    name: "cheolwon",
    age: 21,
    email: "chelowon@gmail.com",
    company: "POSCO",
  },
  {
    id: 4,
    name: "jaehoon",
    age: 26,
    email: "jaehoon@gmail.com",
    company: "POSCO",
  },
];

export const getFriendById = (id) => {
  const filteredFriend = friends.filter((friend) => id === friend.id);

  return filteredFriend[0];
};
