
import DropDown from "../DropDown/DropDown";
import {
  HeaderBlock,
  HeaderWrapper,
  LogoDark,
  LogoLight,
} from "./Header.styled";

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <LogoLight className="_show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </LogoLight>
          <LogoDark className="_dark">
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </LogoDark>
            <DropDown />
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}
export default Header;
