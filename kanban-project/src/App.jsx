import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import OneCardPage from "./pages/OneCardPage";
import ExitPage from "./pages/ExitPage";
import { AppRoutes } from "../src/lib/approutes.js";
import NotFoundPage from "./pages/NotFoundResource/NotFoundPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AddCardPage from "./pages/AddCardPage.jsx";
import EditCardPage from "./pages/EditCardPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path={AppRoutes.MAIN}
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route
          path={AppRoutes.CARD}
          element={
            <PrivateRoute>
              <OneCardPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.EXIT}
          element={
            <PrivateRoute>
              <ExitPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.ADD_CARD}
          element={
            <PrivateRoute>
              <AddCardPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.EDIT_CARD}
          element={
            <PrivateRoute>
              <EditCardPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
