import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import { GlobalStyle } from "../../Global.styled";
import {
  CategoriesContainer,
  CategoriesP,
  CategoriesTheme,
  FormNewArea,
  FormNewBlock,
  FormNewCreateButton,
  FormNewInput,
  PopNewCardBlock,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
} from "./PopNewCard.styled";
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
      <PopNewCard id="popNewCard">
        <PopNewCardContainer>
          <PopNewCardBlock>
            <PopNewCardContent>
              <PopNewCardTtl>Создание задачи</PopNewCardTtl>
              <PopNewCardClose to={AppRoutes.MAIN}> &#10006;</PopNewCardClose>
              <PopNewCardWrap>
                <PopNewCardForm
                  className=" form-new"
                  id="formNewCard"
                  action="#"
                >
                  <FormNewBlock>
                    <label htmlFor="formTitle" className="subttl">
                      Название задачи
                    </label>
                    <FormNewInput
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
                  </FormNewBlock>
                  <FormNewBlock>
                    <label htmlFor="textArea" className="subttl">
                      Описание задачи
                    </label>
                    <FormNewArea
                      name="text"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                      value={newCard.description}
                      onChange={(e) =>
                        setNewCard({ ...newCard, description: e.target.value })
                      }
                    ></FormNewArea>
                  </FormNewBlock>
                </PopNewCardForm>
                <Calendar selected={selected} setSelected={setSelected} />
              </PopNewCardWrap>
              <CategoriesContainer className="pop-new-card__categories prod_checbox">
                <CategoriesP className="subttl">Категория</CategoriesP>
                <CategoriesTheme className="_orange">
                  <input
                    type="radio"
                    id="web-design"
                    name="radios"
                    className="_orange"
                    value="Web Design"
                    checked={newCard.topic === "Web Design"}
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="web-design">Web Design</label>
                </CategoriesTheme>
                <CategoriesTheme className="_green">
                  <input
                    type="radio"
                    id="research"
                    name="radios"
                    className="_green"
                    value="Research"
                    checked={newCard.topic === "Research"}
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="research">Research</label>
                </CategoriesTheme>
                <CategoriesTheme className="_purple">
                  <input
                    type="radio"
                    id="copywriting"
                    name="radios"
                    className="_purple"
                    value="Copywriting"
                    checked={newCard.topic === "Copywriting"}
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                  <label htmlFor="copywriting">Copywriting</label>
                </CategoriesTheme>
              </CategoriesContainer>
              <FormNewCreateButton id="btnCreate" onClick={onBtnSubmit}>
                Создать задачу
              </FormNewCreateButton>
            </PopNewCardContent>
          </PopNewCardBlock>
        </PopNewCardContainer>
      </PopNewCard>
    </>
  );
}
