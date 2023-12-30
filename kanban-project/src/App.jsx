import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import OneCardPage from "./pages/OneCardPage";
import ExitPage from "./pages/ExitPage";

import { AppRoutes } from "./data";
import NotFoundPage from "./pages/NotFoundResource/NotFoundPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  let isAuth = true
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
    <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
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
          <ExitPage />
        </PrivateRoute>
      }
    />
    <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
  );
}

export default App;
