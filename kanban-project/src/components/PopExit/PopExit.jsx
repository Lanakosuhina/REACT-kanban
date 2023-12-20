import { PopExitBlock, PopExitContainer, PopExitDiv, PopExitFormGroup, PopExitNo, PopExitTtl, PopExitYes } from "./PopExit.styled.js";

export default function PopExit() {
    return  <PopExitDiv className="pop-exit" id="popExit">
          <PopExitContainer className="pop-exit__container">
            <PopExitBlock className="pop-exit__block">
              <PopExitTtl className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </PopExitTtl>
              <form className="pop-exit__form" id="formExit" action="#">
                <PopExitFormGroup className="pop-exit__form-group">
                  <PopExitYes className="pop-exit__exit-yes _hover01" id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>{" "}
                  </PopExitYes>
                  <PopExitNo className="pop-exit__exit-no _hover03" id="exitNo">
                    <a href="main.html">Нет, остаться</a>{" "}
                  </PopExitNo>
                </PopExitFormGroup>
              </form>
            </PopExitBlock>
          </PopExitContainer>
        </PopExitDiv>;
  }