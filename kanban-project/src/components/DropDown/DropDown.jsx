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
// import { Link } from "react-router-dom";
// import { AppRoutes } from "../../data.js";

export default function DropDown({ addCards }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <HeaderNav>
      <HeaderBtnMainNew onClick={addCards}>
        <a onClick={addCards}>Создать новую задачу</a>{" "}
      </HeaderBtnMainNew>
      <HeaderUser
        onClick={toggleDropdown}
      >
        Ivan Ivanov
      </HeaderUser>
      {isOpen && (
        <HeaderPopUserSet className="pop-user-set" id="user-set-target">
          {/* <a href="">x</a> */}
          <PopUserSetName>Ivan Ivanov</PopUserSetName>
          <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
          <PopUserSetTheme>
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </PopUserSetTheme>
          <button type="button">
            <a href="#popExit">Выйти</a>
{/* Меняю на это, все ломается <Link to={AppRoutes.EXIT}>Выйти</Link> */}
          
          </button>
        </HeaderPopUserSet>
      )}
    </HeaderNav>
  );
}
