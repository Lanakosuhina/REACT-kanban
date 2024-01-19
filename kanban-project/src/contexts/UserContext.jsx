import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/approutes";

export const UserContext = createContext(null);

export function UserProvider({children}) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  function login(user) { // получаем пользователя, потом будем получать его в компоненте
    localStorage.setItem("user", JSON.stringify(user)); // устанавливаем в хранилище
    setUser(JSON.parse(localStorage.getItem("user"))); // получаем юзера из хранилища
    navigate(AppRoutes.MAIN);
  }

  function logout() {
    localStorage.removeItem("user"); // удаляем юзера из хранилища
    setUser(null); // удаляем состояние, которое было установлено в предыдущей функции
    navigate(AppRoutes.LOGIN);
  }

  return <UserContext.Provider value={{user, login, logout}}>{children}</UserContext.Provider>;
  // передаем в качестве пропсов, потом сможем использовать в других компонентах
  // избегаем props drilling

  // const user = useContext(UserContext);

  // if (!user) {
  //   throw new Error("Данные пользователя не были найдены");
  // }

  // return user;
}
