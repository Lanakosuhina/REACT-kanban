import { useState } from "react";
import './DropDown.styled.js'
import { HeaderBtnMainNew, HeaderNav, HeaderPopUserSet, HeaderUser, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./DropDown.styled.js";

export default function DropDown({addCards}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <HeaderNav className="header__nav">
      <HeaderBtnMainNew onClick={addCards} className="header__btn-main-new _hover01" id="btnMainNew">
        <a onClick={addCards} >Создать новую задачу</a>  {/* href="#popNewCard" */}
      </HeaderBtnMainNew>
      <HeaderUser
        onClick={toggleDropdown}
        href="#user-set-target"
        className="header__user _hover02"
      >
        Ivan Ivanov
      </HeaderUser>
      {isOpen && (
        <HeaderPopUserSet className="header__pop-user-set pop-user-set" id="user-set-target">
          {/* <a href="">x</a> */}
          <PopUserSetName className="pop-user-set__name">Ivan Ivanov</PopUserSetName>
          <PopUserSetMail className="pop-user-set__mail">ivan.ivanov@gmail.com</PopUserSetMail>
          <PopUserSetTheme className="pop-user-set__theme">
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </PopUserSetTheme>
          <button type="button" className="_hover03">
            <a href="#popExit">Выйти</a>
          </button>
        </HeaderPopUserSet>
      )}
    </HeaderNav>
  );
}
