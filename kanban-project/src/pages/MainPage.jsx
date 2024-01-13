import { GlobalStyle } from "../Global.styled.js";
import loadingGif from "../assets/christmas-hello.gif";
import PopNewCard from "../components/PopNewCard/PopNewCard.jsx";
import Header from "../components/Header/Header.jsx";
import MainBlock from "../components/MainBlock/MainBlock.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../data.js";
import { getKanban, postKanban } from "../API.js";

export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getKanban().then((data) => {
      console.log(data.tasks);
      setCards(data.tasks)
      setIsLoading(false)
    });
  }, []);

  async function addCards() { 
    const newCard = { 
      id: cards.length + 1, 
      topic: "Web Design", 
      title: "Название", 
      date: "30.10.23", 
      status: "Без статуса", 
    }; 
    await postKanban(newCard); // Отправляем новую карточку на сервер
    setCards([...cards, newCard]); // Обновляем список карточек с новой карточкой
  }

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        {/* <PopExit /> */}
        <PopNewCard />
        {/* <PopBrowse /> */}
        <Header addCards={addCards} />
        {isLoading ? (
          <div className="loader">
            <img src={loadingGif} alt="wait until the page loads" />
          </div>
        ) : (
          <MainBlock cards={cards} />
        )}
      </div>
    </>
  );
}
