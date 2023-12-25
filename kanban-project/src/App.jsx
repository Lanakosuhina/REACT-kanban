import "./App.css";
import { GlobalStyle } from './Global.styled.js';
import loadingGif from "./assets/Gif.gif"
import PopExit from "./components/PopExit/PopExit.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import MainBlock from "./components/MainBlock/MainBlock.jsx";
import { useState, useEffect } from "react";
import { cardList } from "./data.js";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  function addCards() {
  const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []); // Пустой массив зависимостей для запуска только при монтировании компонента

  return (
    <>
    <GlobalStyle />
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCards={addCards} />
        {isLoading ? (
          <div className="loader"><img src={loadingGif} alt="wait until the page loads" /></div>
        ) : (
          <MainBlock cards={cards}/>
        )}
      </div>
    </>
  );
}

export default App;
