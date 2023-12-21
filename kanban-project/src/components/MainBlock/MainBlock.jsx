import { statusList } from "../../data";
import Column from "../Column/Column";
import { Main, MainStyledBlock, MainContent } from "./MainBlock.styled.js";

export default function MainBlock({ cards }) {
  return (
    <Main>
      <div className="container">
        <MainStyledBlock>
          <MainContent>
            <MainContent>
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={cards.filter((card) => card.status === status)} // сверяем свойство карточки статус со статусом
                />
              ))}
            </MainContent>
          </MainContent>
        </MainStyledBlock>
      </div>
    </Main>
  );
}
