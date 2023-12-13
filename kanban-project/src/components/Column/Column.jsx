import Card from "../Card/Card";
const tasks = [
  {
    id: 0,
    theme: "Web Design",
    title: "Название задачи 1",
    date: "30.10.23",
    color: "_orange",
  },
  {
    id: 1,
    theme: "Research",
    title: "Название задачи 2",
    date: "31.10.23",
    color: "_green",
  },
  {
    id: 2,
    theme: "Copywriting",
    title: "Название задачи 3",
    date: "31.10.23",
    color: "_purple",
  },
  {
    id: 3,
    theme: "Web Design",
    title: "Название задачи",
    date: "30.10.23",
    color: "_orange",
  },
];

export default function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <div>
          {tasks.map((task) => (
            <Card
              key={task.id}
              theme={task.theme}
              title={task.title}
              date={task.date}
              color={task.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
