import DropDown from "../DropDown/DropDown";
import { HeaderBlock, HeaderWrapper, LogoDark, LogoLight } from "./Header.styled";

function Header({ addCards }) {
  return (
    <HeaderWrapper className="header">
      <div className="container">
        <HeaderBlock className="header__block">
        <LogoLight className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </LogoLight>
          <LogoDark className="header__logo _dark">
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </LogoDark>
          <DropDown addCards={addCards} />
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}
export default Header;