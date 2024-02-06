import { statusList } from "../../lib/data.js";
import useTasks from "../../hooks/useTasks.jsx";
import Column from "../Column/Column";
import { Main, MainStyledBlock, MainContent } from "./MainBlock.styled.js";

export default function MainBlock() {
  const { tasks } = useTasks();
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
                  cardList={tasks.filter((card) => card.status === status)} // сверяем свойство карточки статус со статусом
                />
              ))}
            </MainContent>
          </MainContent>
        </MainStyledBlock>
      </div>
    </Main>
  );
}
