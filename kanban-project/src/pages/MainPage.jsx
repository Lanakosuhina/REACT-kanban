import { GlobalStyle } from "../Global.styled.js";
import loadingGif from "../assets/christmas-hello.gif";
import Header from "../components/Header/Header.jsx";
import MainBlock from "../components/MainBlock/MainBlock.jsx";
import { useState, useEffect } from "react";
import { getKanban } from "../API.js";
import useUser from "../hooks/useUser.jsx";
import useTasks from "../hooks/useTasks.jsx";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser()
  const { createTask } = useTasks()


  useEffect(() => {
    getKanban({user}).then((data) => {
      createTask(data)
      console.log(data);
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
          <MainBlock />
        )}
      </div>
    </>
  );
}
