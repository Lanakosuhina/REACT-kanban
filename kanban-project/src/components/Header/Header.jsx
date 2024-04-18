import DropDown from "../DropDown/DropDown";
import {
  HeaderBlock,
  HeaderWrapper,
  LogoLink,
} from "./Header.styled";
import useGlobal from "../../hooks/useGlobal";
import { useEffect, useState } from "react";
import { AppRoutes } from "../../lib/approutes";

function Header() {
  const { theme } = useGlobal();
  const [logo, setLogo] = useState("/images/logo.png");

  useEffect(() => {
    window.localStorage.setItem("theme", theme);

    if (theme === "light") {
      setLogo("/images/logo.png");
    } else {
      setLogo("/images/logo_dark.png");
    }
  }, [theme]);

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <LogoLink to={AppRoutes.MAIN}>
            <img src={logo} alt="logo" />
          </LogoLink>
          <DropDown />
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}
export default Header;
