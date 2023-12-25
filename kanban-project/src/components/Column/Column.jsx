import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";


export default function Column({ title, cardList }) {
  return (
    <MainColumn className="column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        <div>
          {cardList.map((card) => (
            <Card
              key={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          ))}
        </div>
      </Cards>
    </MainColumn>
  );
}
