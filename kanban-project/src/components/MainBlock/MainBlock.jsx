import { statusList } from "../../data";
import Column from "../Column/Column";

export default function MainBlock({ cards }) {

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <div className="main__content">
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={cards.filter((card) => card.status === status)} // сверяем свойство карточки статус со статусом
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
