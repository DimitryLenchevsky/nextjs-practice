import "server-only";

const MOCK_USERS = [
  { id: 1, name: "Артем", email: "artem@gmail.com" },
  { id: 2, name: "Арина", email: "aryna@gmail.com" },
  { id: 3, name: "Никита", email: "nikita@gmail.com" },
  { id: 4, name: "Дима", email: "dima@gmail.com" },
  { id: 5, name: "Света", email: "sveta@gmail.com" },
];

export const db = {
  query: {
    users: {
      findMany: async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return MOCK_USERS;
      },
    },
  },
};
