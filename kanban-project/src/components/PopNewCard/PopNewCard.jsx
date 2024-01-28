import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import { GlobalStyle } from "../../Global.styled";
import { GlobalNewCard } from "./PopNewCard.styled";
import { addTask } from "../../API";

export default function PopNewCard() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState(null);
  const [newCard, setNewCard] = useState({
    title: "",
    topic: "",
    description: "",
  });

  function onBtnSubmit() {
    try {
      const cardData = {
        ...newCard,
        data: selected,
      };

      addTask(cardData).then((data) => {
        setNewCard(data);
        navigate(AppRoutes.MAIN);
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <GlobalStyle />
      <GlobalNewCard />
      <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
          <div className="pop-new-card__block">
            <div className="pop-new-card__content">
              <h3 className="pop-new-card__ttl">Создание задачи</h3>
              <Link to={AppRoutes.MAIN} className="pop-new-card__close">
                {" "}
                &#10006;
              </Link>
              <div className="pop-new-card__wrap">
                <form
                  className="pop-new-card__form form-new"
                  id="formNewCard"
                  action="#"
                >
                  <div className="form-new__block">
                    <label htmlFor="formTitle" className="subttl">
                      Название задачи
                    </label>
                    <input
                      className="form-new__input"
                      type="text"
                      name="name"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      autoFocus
                      value={newCard.title}
                      onChange={(e) =>
                        setNewCard({ ...newCard, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-new__block">
                    <label htmlFor="textArea" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-new__area"
                      name="text"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                      value={newCard.description}
                      onChange={(e) =>
                        setNewCard({ ...newCard, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                </form>
                <Calendar selected={selected} setSelected={setSelected} />
              </div>
              <div className="pop-new-card__categories categories prod_checbox">
                <p className="categories__p subttl">Категория</p>
                <div className="radio-toolbar categories__theme _orange">
                  <input
                    type="radio"
                    name="radios"
                    className="_orange"
                    value="Web Design"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="radio1">Web Design</label>
                </div>
                <div className="radio-toolbar categories__theme _green">
                  <input
                    type="radio"
                    id="radio2"
                    name="radios"
                    className="_green"
                    value="Research"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="radio2">Research</label>
                </div>
                <div className="radio-toolbar categories__theme _purple">
                  <input
                    type="radio"
                    id="radio3"
                    name="radios"
                    className="_purple"
                    value="Copywriting"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="radio3">Copywriting</label>
                </div>
              </div>
              <button
                className="form-new__create _hover01"
                id="btnCreate"
                onClick={onBtnSubmit}
              >
                Создать задачу
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
