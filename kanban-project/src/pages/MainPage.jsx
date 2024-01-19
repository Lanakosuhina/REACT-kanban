import { GlobalStyle } from "../Global.styled.js";
import loadingGif from "../assets/christmas-hello.gif";
import Header from "../components/Header/Header.jsx";
import MainBlock from "../components/MainBlock/MainBlock.jsx";
import { useState, useEffect } from "react";
import { getKanban } from "../API.js";
import useUser from "../hooks/useUser.jsx";

export default function MainPage() {
  const [cards, setCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser()

  useEffect(() => {
    getKanban({user}).then((data) => {
      console.log(data.tasks);
      setCards(data.tasks)
      setIsLoading(false)
    });
  }, [user]);

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        {/* <PopExit /> */}
        {/* <PopNewCard /> */}
        {/* <PopBrowse /> */}
        <Header />
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
