import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import Calendar from "../Calendar/Calendar";
import { GlobalStyle } from "../../Global.styled";
import useTasks from "../../hooks/useTasks";
import { deleteTask } from "../../API";
import {
  BrowseButtonGroup,
  ButtonBackground,
  ButtonBordered,
  CalendarP,
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
  StTheme,
  Status,
  StatusParagraph,
  StatusThemes,
} from "../PopBrowse/PopBrowse.styled";
import { CategoriesTheme } from "../PopNewCard/PopNewCard.styled";
import { format } from "date-fns";

export default function PopBrowse({ id }) {
  const { tasks, createTask } = useTasks();
  const taskData = tasks.find((task) => task._id === id);

  async function handleDelete() {
    try {
      await deleteTask(id);
      const updatedtasks = tasks.filter((task) => task._id !== id);
      createTask(updatedtasks);
    } catch (error) {
      alert(error.message);
    }
  }

  let color;
  switch (taskData.topic) {
    case "Web Design":
      color = "_orange";
      break;
    case "Research":
      color = "_green";
      break;
    case "Copywriting":
      color = "_purple";
      break;
    default:
      color = "_gray";
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
                <CategoriesTheme $themeColor={color} className="_active-category">
                  <p>{taskData.topic}</p>
                </CategoriesTheme>
              </PopBrowseTop>
              <Status className="pop-browse__status ">
                <StatusParagraph className="subttl">Статус</StatusParagraph>
                <StatusThemes>
                  <StTheme className="_gray">
                    <p className="_gray">{taskData.status}</p>
                  </StTheme>
                </StatusThemes>
              </Status>
              <PopBrowseWrap>
                <PopBrowseForm id="formBrowseCard" action="#">
                  <FormBrowseBlock>
                    <label htmlFor="textArea01" className="subttl" readOnly>
                      Описание задачи
                    </label>
                    <FormBrowseArea
                      name="text"
                      id="textArea01"
                      readOnly
                      value={taskData.description}
                    ></FormBrowseArea>
                  </FormBrowseBlock>
                </PopBrowseForm>
                <Calendar>
                  <CalendarP>
                    Срок исполнения:{" "}
                    <span className="date-control" readOnly>
                      {format(taskData.date, 'dd.MM.yy')}
                    </span>
                  </CalendarP>
                </Calendar>
              </PopBrowseWrap>

              <PopBrowseButtons>
                <BrowseButtonGroup className="btn-group">
                  <ButtonBordered className="btn-browse__edit _btn-bor _hover03">
                    <Link to={`/edit-card/${id}`}>Редактировать задачу</Link>
                  </ButtonBordered>
                  <ButtonBordered
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </ButtonBordered>
                </BrowseButtonGroup>
                <ButtonBackground className="btn-browse__close _btn-bg _hover01">
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
