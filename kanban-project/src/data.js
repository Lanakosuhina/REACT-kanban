export const AppRoutes = {
  MAIN: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  CARD: "/card/:id",
  EXIT: "/exit",
  NOT_FOUND: "*",
};

export const cardList = [
  {
    id: 0,
    theme: "Web Design",
    title: "Название задачи 1",
    date: "30.10.23",
    status: 'Без статуса',
  },
  {
    id: 1,
    theme: "Research",
    title: "Название задачи 2",
    date: "31.10.23",
    status: 'Нужно сделать',
  },
  {
    id: 2,
    theme: "Copywriting",
    title: "Название задачи 3",
    date: "31.10.23",
    status: "В работе",
  }
];

export const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];
