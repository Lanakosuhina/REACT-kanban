export const AppRoutes = {
  MAIN: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  CARD: "/card/:_id",
  EXIT: "/exit",
  NOT_FOUND: "*",
};

export const cardList = [
  {
    _id: 0,
    topic: "Web Design",
    title: "Название задачи 1",
    date: "30.10.23",
    status: 'Без статуса',
  },
  {
    _id: 1,
    topic: "Research",
    title: "Название задачи 2",
    date: "31.10.23",
    status: 'Нужно сделать',
  },
  {
    _id: 2,
    topic: "Copywriting",
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
