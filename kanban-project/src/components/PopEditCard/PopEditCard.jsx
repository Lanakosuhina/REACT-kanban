import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import Calendar from "../Calendar/Calendar";
import { GlobalStyle } from "../../Global.styled";
import useTasks from "../../hooks/useTasks";
import { changeTask, deleteTask } from "../../API";
import { useState } from "react";
import {
  BrowseButtonGroup,
  ButtonBackground,
  ButtonBordered,
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseBlock,
  PopBrowseButtons,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseDiv,
  PopBrowseForm,
  PopBrowseTitle,
  PopBrowseTop,
  PopBrowseWrap,
  Status,
  StatusParagraph,
  StatusTheme,
  StatusThemes,
} from "../PopBrowse/PopBrowse.styled01";
import { CategoriesTheme } from "../PopNewCard/PopNewCard.styled";

export default function PopEditCard({ id }) {
  const { tasks, createTask } = useTasks();
  const taskData = tasks.find((task) => task._id === id);

  const [selected, setSelected] = useState(taskData.date);
  const [changeCard, setChangeCard] = useState({
    status: taskData.status,
    date: taskData.date,
    title: taskData.title,
    topic: taskData.topic,
    description: taskData.description,
  });

  let color;
  switch (taskData.topic) {
    case "Web Design":
      color = "_orange";
      break;
    case "Copywriting":
      color = "_purple";
      break;
    case "Research":
      color = "_green";
      break;
    default:
      color = "_gray";
  }

  async function handleChange() {
    try {
      await changeTask({
        id,
        title: changeCard.title,
        topic: changeCard.topic,
        status: changeCard.status,
        description: changeCard.description,
        date: changeCard.date,
      }).then((data) => {
        createTask({ data });
      });
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleDelete() {
    try {
      await deleteTask(id);
      const updatedtasks = tasks.filter((task) => task._id !== id);
      createTask(updatedtasks);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <GlobalStyle />

      <PopBrowseDiv id="popBrowse">
        <PopBrowseContainer>
          <PopBrowseBlock>
            <PopBrowseContent>
              <PopBrowseTop>
                <PopBrowseTitle>{taskData.title}</PopBrowseTitle>
                <CategoriesTheme
                  $themeColor={color}
                  className="_active-category"
                >
                  <p>{taskData.topic}</p>
                </CategoriesTheme>
              </PopBrowseTop>
              <Status>
                <StatusParagraph className="subttl">Статус</StatusParagraph>
                <StatusThemes>
                  <StatusTheme>
                    <input
                      type="radio"
                      name="radios"
                      id="no-status"
                      value="Без статуса"
                      checked={changeCard.status === "Без статуса"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="no-status">Без статуса</label>
                  </StatusTheme>
                  <StatusTheme >
                    <input
                      type="radio"
                      name="radios"
                      id="to-do"
                      value="Нужно сделать"
                      checked={changeCard.status === "Нужно сделать"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="to-do">Нужно сделать</label>
                  </StatusTheme>
                  <StatusTheme className="status__theme">
                    <input
                      type="radio"
                      name="radios"
                      id="in-work"
                      value="В работе"
                      checked={changeCard.status === "В работе"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="in-work">В работе</label>
                  </StatusTheme>
                  <StatusTheme className="status__theme">
                    <input
                      type="radio"
                      name="radios"
                      id="testing"
                      value="Тестирование"
                      checked={changeCard.status === "Тестирование"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="testing">Тестирование</label>
                  </StatusTheme>
                  <StatusTheme className="status__theme">
                    <input
                      type="radio"
                      name="radios"
                      id="ready"
                      value="Готово"
                      checked={changeCard.status === "Готово"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="ready">Готово</label>
                  </StatusTheme>
                </StatusThemes>
              </Status>
              <PopBrowseWrap>
                <PopBrowseForm id="formBrowseCard" action="#">
                  <FormBrowseBlock>
                    <label htmlFor="textArea01" className="subttl" readOnly>
                      Описание задачи
                    </label>
                    <FormBrowseArea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      value={changeCard.description}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          description: e.target.value,
                        })
                      }
                    ></FormBrowseArea>
                  </FormBrowseBlock>
                </PopBrowseForm>
                <Calendar selected={selected} setSelected={setSelected} />
              </PopBrowseWrap>

              <PopBrowseButtons className="pop-browse__btn-edit">
                <BrowseButtonGroup className="btn-group">
                  <ButtonBackground
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleChange}
                  >
                    Сохранить
                  </ButtonBackground>
                  <ButtonBordered className="btn-edit__edit _btn-bor _hover03">
                    <Link to={`/card/${id}`}>Отменить</Link>
                  </ButtonBordered>
                  <ButtonBordered
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </ButtonBordered>
                </BrowseButtonGroup>
                <ButtonBackground className="btn-edit__close _btn-bg _hover01">
                  <Link to={AppRoutes.MAIN}>Закрыть</Link>
                </ButtonBackground>
              </PopBrowseButtons>
            </PopBrowseContent>
          </PopBrowseBlock>
        </PopBrowseContainer>
      </PopBrowseDiv>
    </>
  );
}
