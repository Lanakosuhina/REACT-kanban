import { useState } from "react";
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

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <HeaderNav>
      <HeaderBtnMainNew>
        <Link to={AppRoutes.ADD_CARD}>Создать новую задачу</Link>
      </HeaderBtnMainNew>
      <HeaderUser onClick={toggleDropdown}>Ivan Ivanov</HeaderUser>
      {isOpen && (
        <HeaderPopUserSet className="pop-user-set" id="user-set-target">
          <PopUserSetName>Ivan Ivanov</PopUserSetName>
          <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
          <PopUserSetTheme>
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </PopUserSetTheme>
          <button type="button">
            <Link to={AppRoutes.EXIT}>Выйти</Link>
          </button>
        </HeaderPopUserSet>
      )}
    </HeaderNav>
  );
}
