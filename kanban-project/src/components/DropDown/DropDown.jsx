import { useContext, useEffect, useState } from "react";
import "./DropDown.styled.js";
import {
  HeaderBtnMainNew,
  HeaderNav,
  HeaderPopUserSet,
  HeaderUser,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./DropDown.styled.js";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes.js";
import useUser from "../../hooks/useUser";
import { GlobalContext } from "../../contexts/GlobalContext.jsx";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const { theme, themeSwitchHandler } = useContext(GlobalContext);
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
  
      <HeaderNav>
        <HeaderBtnMainNew>
          <Link to={AppRoutes.ADD_CARD}>Создать новую задачу</Link>
        </HeaderBtnMainNew>
        <HeaderUser onClick={toggleDropdown}>{user.name}</HeaderUser>
        {isOpen && (
          <HeaderPopUserSet className="pop-user-set" id="user-set-target">
            <PopUserSetName>{user.name}</PopUserSetName>
            <PopUserSetMail>{user.login}</PopUserSetMail>
            <PopUserSetTheme>
              <p>Темная тема</p>
              <input
                type="checkbox"
                onChange={() =>
                  themeSwitchHandler(theme === "dark" ? "light" : "dark")
                }
              />
            </PopUserSetTheme>
            <button type="button">
              <Link to={AppRoutes.EXIT}>Выйти</Link>
            </button>
          </HeaderPopUserSet>
        )}
      </HeaderNav>
  );
}
