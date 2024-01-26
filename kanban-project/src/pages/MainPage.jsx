import { GlobalStyle } from "../Global.styled.js";
import loadingGif from "../assets/christmas-hello.gif";
import Header from "../components/Header/Header.jsx";
import MainBlock from "../components/MainBlock/MainBlock.jsx";
import { useState, useEffect, useContext } from "react";
import { getKanban } from "../API.js";
import useUser from "../hooks/useUser.jsx";
import useTasks from "../hooks/useTasks.jsx";
import Layout from "../components/Layout.jsx";
import { GlobalContext } from "../contexts/GlobalContext.jsx";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const { createTask } = useTasks();

  useEffect(() => {
    getKanban({ user }).then((data) => {
      createTask(data);
      console.log(data);
      setIsLoading(false);
    });
  }, [user]);

  const { theme } = useContext(GlobalContext);
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Layout>
        <GlobalStyle />
        <div className="wrapper">
          <Header />
          {isLoading ? (
            <div className="loader">
              <img src={loadingGif} alt="wait until the page loads" />
            </div>
          ) : (
            <MainBlock />
          )}
        </div>
      </Layout>
    </>
  );
}
