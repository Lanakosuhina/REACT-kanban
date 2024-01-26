import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import Calendar from "../Calendar/Calendar";
import { GlobalStyle } from "../../Global.styled";
import useTasks from "../../hooks/useTasks";
import { changeTask, deleteTask } from "../../API";
import { useState } from "react";
import { GlobalPopBrowse } from "../PopBrowse/PopBrowse.styled";

export default function PopEditCard({ id }) {
  const { tasks, createTask } = useTasks();
  const taskData = tasks.filter((task) => task._id === id);

  const [selected, setSelected] = useState(taskData.date);
  const [changeCard, setChangeCard] = useState({
    status: taskData.status,
    date: taskData.date,
    title: taskData.title,
    topic: taskData.topic,
    description: taskData.description,
  });

  console.log(taskData.topic);
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
    <GlobalPopBrowse  />
      <GlobalStyle />
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">{taskData.title}</h3>
                <div className="categories__theme theme-top" color={color}>
                  <p className="_orange">{taskData.topic}</p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <div className="status__theme">
                    <input
                      type="radio"
                      name="radios"
                      className="_orange"
                      value="Без статуса"
                      checked={changeCard.status === "Без статуса"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <p>Без статуса</p>
                  </div>
                  <div className="status__theme _gray">
                    <input
                      type="radio"
                      name="radios"
                      className="_orange"
                      value="Нужно сделать"
                      checked={changeCard.status === "Нужно сделать"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <p className="_gray">Нужно сделать</p>
                  </div>
                  <div className="status__theme">
                    <input
                      type="radio"
                      name="radios"
                      className="_orange"
                      value="В работе"
                      checked={changeCard.status === "В работе"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <p>В работе</p>
                  </div>
                  <div className="status__theme">
                    <input
                      type="radio"
                      name="radios"
                      className="_orange"
                      value="Тестирование"
                      checked={changeCard.status === "Тестирование"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <p>Тестирование</p>
                  </div>
                  <div className="status__theme">
                    <input
                      type="radio"
                      name="radios"
                      className="_orange"
                      value="Готово"
                      checked={changeCard.status === "Готово"}
                      onChange={(e) =>
                        setChangeCard({
                          ...changeCard,
                          status: e.target.value,
                        })
                      }
                    />
                    <p>Готово</p>
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
                    <label htmlFor="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
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
                    ></textarea>
                  </div>
                </form>
                <Calendar selected={selected} setSelected={setSelected}>
                  <p className="calendar__p date-end">
                    Срок исполнения:{" "}
                    <span className="date-control">{taskData.date}</span>
                  </p>
                </Calendar>
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleChange}
                  >
                    Сохранить
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03">
                    <Link to={AppRoutes.MAIN}>Отменить</Link>
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <Link to={AppRoutes.MAIN}>Закрыть</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
