import { PopExitBlock, PopExitContainer, PopExitDiv, PopExitFormGroup, PopExitNo, PopExitTtl, PopExitYes } from "./PopExit.styled.js";

export default function PopExit() {
    return  <PopExitDiv id="popExit">
          <PopExitContainer>
            <PopExitBlock>
              <PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
              </PopExitTtl>
              <form className="pop-exit__form" id="formExit" action="#">
                <PopExitFormGroup>
                  <PopExitYes id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>{" "}
                  </PopExitYes>
                  <PopExitNo id="exitNo">
                    <a href="main.html">Нет, остаться</a>{" "}
                  </PopExitNo>
                </PopExitFormGroup>
              </form>
            </PopExitBlock>
          </PopExitContainer>
        </PopExitDiv>;
  }