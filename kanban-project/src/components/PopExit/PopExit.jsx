import { AppRoutes } from "../../data.js";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitDiv,
  PopExitFormGroup,
  PopExitNo,
  PopExitTtl,
  PopExitYes,
} from "./PopExit.styled.js";
import { Link } from "react-router-dom";

export default function PopExit({ exit }) {
  return (
    <PopExitDiv id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes
                id="exitYes"
                onClick={(event) => {
                  event.preventDefault();
                  exit();
                }}
              >
                Да, выйти
              </PopExitYes>
              <PopExitNo id="exitNo">
                <Link to={AppRoutes.MAIN}>Нет, остаться</Link>
              </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitDiv>
  );
}
