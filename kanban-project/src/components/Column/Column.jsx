import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";


export default function Column({ title, cardList }) {
  return (
    <MainColumn className="column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
      {cardList.map((card) => (
        <div key={card._id}>
            <Card
              topic={card.topic}
              title={card.title}
              date={card.date}
              status={card.status}
              id={card._id}
            />
        </div>
        ))}
      </Cards>
    </MainColumn>
  );
}
