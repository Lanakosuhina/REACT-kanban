import DropDown from "../DropDown/DropDown";

function Header({addCards}) {
   return <header className="header">
          <div className="container">
            <div className="header__block">
              <div className="header__logo _show _light">
                <a href="" target="_self">
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </div>
              <div className="header__logo _dark">
                <a href="" target="_self">
                  <img src="/images/logo_dark.png" alt="logo" />
                </a>
              </div>
              <DropDown addCards={addCards}/>
            </div>
          </div>
        </header>
}
export default Header;