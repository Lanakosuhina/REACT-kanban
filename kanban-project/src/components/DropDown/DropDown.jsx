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

export default function DropDown({ addCards }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <HeaderNav>
      <HeaderBtnMainNew onClick={addCards}>
        <a onClick={addCards}>Создать новую задачу</a>{" "}
        {/* href="#popNewCard" */}
      </HeaderBtnMainNew>
      <HeaderUser
        onClick={toggleDropdown}
        // href="#user-set-target"
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
          </button>
        </HeaderPopUserSet>
      )}
    </HeaderNav>
  );
}
