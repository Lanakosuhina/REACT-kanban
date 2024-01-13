import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import OneCardPage from "./pages/OneCardPage";
import ExitPage from "./pages/ExitPage";

import { AppRoutes } from "./data";
import NotFoundPage from "./pages/NotFoundResource/NotFoundPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { useState } from "react";
import { loginKanban, registerKanban } from "./API.js";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  async function setAuth(loginData) {
    await loginKanban(loginData).then((data) => {
      localStorage.setItem('user', JSON.stringify(data.user)) //сохранятем данные, которые пришли с сервера
      setUser(JSON.parse(localStorage.getItem("user"))) // получаем данные из хранилища
      navigate(AppRoutes.MAIN) 
    })
  }

  async function setRegister(registerData) {
    await registerKanban(registerData).then((data) => {
      localStorage.setItem('user', JSON.stringify(data.user)) 
      setUser(JSON.parse(localStorage.getItem("user")))
      navigate(AppRoutes.LOGIN) 
    })
  }

  function exit() {
    localStorage.removeItem('user');
    setUser(null);
    navigate(AppRoutes.LOGIN);
  }

  return (
    <Routes>
    <Route
      path={AppRoutes.MAIN}
      element={
        <PrivateRoute isAuth={user}>
          <MainPage />
        </PrivateRoute>
      }
    />
    <Route path={AppRoutes.REGISTER} element={<RegisterPage setRegister={setRegister} />} />
    <Route path={AppRoutes.LOGIN} element={<LoginPage setAuth={setAuth} />} />
    <Route
      path={AppRoutes.CARD}
      element={
        <PrivateRoute isAuth={user}>
          <OneCardPage />
        </PrivateRoute>
      }
    />
    <Route
      path={AppRoutes.EXIT}
      element={
        <PrivateRoute isAuth={user}>
          <ExitPage exit={exit}/>
        </PrivateRoute>
      }
    />
    <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
  );
}

export default App;
