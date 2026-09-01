import "server-only";

const MOCK_USERS = [
  { id: 1, name: "Максим Корхов", email: "maxim@gmail.com" },
  { id: 2, name: "Давид Тсофин", email: "david@gmail.com" },
  { id: 3, name: "Дима Карпик", email: "dima@gmail.com" },
  { id: 4, name: "Хардик Хардиков", email: "hardick@gmail.com" },
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
