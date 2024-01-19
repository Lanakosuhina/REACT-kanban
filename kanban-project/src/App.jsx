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

function App() {
  // const navigate = useNavigate();
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  // function setAuth(loginData) {
  //   loginKanban(loginData).then((data) => {
  //     localStorage.setItem("user", JSON.stringify(data.user)); //сохранятем данные, которые пришли с сервера
  //     setUser(JSON.parse(localStorage.getItem("user"))); // получаем данные из хранилища
  //     navigate(AppRoutes.MAIN);
  //   });
  // }

  // function setRegister(registerData) {
  //   registerKanban(registerData).then((data) => {
  //     localStorage.setItem("user", JSON.stringify(data.user));
  //     setUser(JSON.parse(localStorage.getItem("user")));
  //     navigate(AppRoutes.LOGIN);
  //   });
  // }

  // function exit() {
  //   localStorage.removeItem("user");
  //   setUser(null);
  //   navigate(AppRoutes.LOGIN);
  // }

  return (
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
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
