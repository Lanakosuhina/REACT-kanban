import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import OneCardPage from "./pages/OneCardPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/notFoundResource/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import { AppRoutes } from "./data";
import { useState } from "react";

function App() {
  let navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));

  function exitAuth() {
    localStorage.removeItem('token');    
    setIsAuth(false);
    navigate(AppRoutes.LOGIN);
  }

  function getInAuth() {
    localStorage.setItem('token', '12345')
    setIsAuth(localStorage.getItem('token'));
    navigate(AppRoutes.MAIN)
  }

  return (
    <Routes>
      <Route
        path={AppRoutes.MAIN}
        element={
          <PrivateRoute isAuth={isAuth}>
            <MainPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={AppRoutes.LOGIN} element={<LoginPage getInAuth={getInAuth} />} />
      <Route
        path={AppRoutes.CARD}
        element={
          <PrivateRoute isAuth={isAuth}>
            <OneCardPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoutes.EXIT}
        element={
          <PrivateRoute isAuth={isAuth}>
            <ExitPage exitAuth={exitAuth}/>
          </PrivateRoute>
        }
      />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
