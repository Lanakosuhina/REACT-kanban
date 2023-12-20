import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";


export default function Column({ title, cardList }) {
  return (
    <MainColumn className="main__column column">
      <ColumnTitle className="column__title">
        <p>{title}</p>
      </ColumnTitle>
      <Cards className="cards">
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
