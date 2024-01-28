import DropDown from "../DropDown/DropDown";
import {
  HeaderBlock,
  HeaderWrapper,
  LogoDark,
  LogoLight,
} from "./Header.styled";
import useGlobal from "../../hooks/useGlobal";
import { useEffect } from "react";

function Header() {
  const { theme } = useGlobal();
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
        {theme === "light" ? (
          <LogoLight className="_show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </LogoLight>
           ) : (
          <LogoDark className="_show _dark">
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </LogoDark>
           )}
            <DropDown />
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}
export default Header;
