import Card from "../Card/Card";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
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
      </div>
    </div>
  );
}
