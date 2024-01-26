import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import Calendar from "../Calendar/Calendar";
import { GlobalStyle } from "../../Global.styled";
import useTasks from "../../hooks/useTasks";
import { deleteTask } from "../../API";
import { GlobalPopBrowse } from "./PopBrowse.styled";

export default function PopBrowse({ id }) {
  const { tasks, createTask } = useTasks();
  const taskData = tasks.filter((task) => task._id === id);

  // 2 страница 23 = 13
  // 33 номер 1 = 25

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
    <GlobalPopBrowse />
      <GlobalStyle />
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">{taskData.title}</h3>
                <div className="categories__theme theme-top _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <div className="status__theme _gray">
                    <p className="_gray">Нужно сделать</p>
                  </div>
                </div>
              </div>
              <div className="pop-browse__wrap">
                <form
                  className="pop-browse__form form-browse"
                  id="formBrowseCard"
                  action="#"
                >
                  <div className="form-browse__block">
                    <label htmlFor="textArea01" className="subttl" readOnly>
                      Описание задачи
                    </label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      readOnly
                      value={taskData.description}
                    ></textarea>
                  </div>
                </form>
                <Calendar>
                  <p className="calendar__p date-end">
                    Срок исполнения:{" "}
                    <span className="date-control" readOnly>{taskData.date}</span>
                  </p>
                </Calendar>
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web</p>
                </div>
              </div>
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button className="btn-browse__edit _btn-bor _hover03">
                    <Link to={`/edit-card/${id}`}>Редактировать задачу</Link>
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to={AppRoutes.MAIN}>Закрыть</Link>
                </button>
              </div>
              {/* <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  <button className="btn-edit__edit _btn-bg _hover01">
                    <a href="#">Сохранить</a>
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03">
                    <a href="#">Отменить</a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <Link to={AppRoutes.MAIN}>Закрыть</Link>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
