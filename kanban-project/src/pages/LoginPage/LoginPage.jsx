import { Link } from "react-router-dom";
import "../../signin.css";
import { AppRoutes } from "../../lib/approutes";
import { useState } from "react";
import { loginKanban } from "../../API";
import useUser from "../../hooks/useUser";
import Layout from "../../components/Layout";
import {
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTitle,
  Wrapper,
} from "../RegisterPage/Entrance.styled";
import { GlobalStyle } from "../../Global.styled";

export default function LoginPage() {
  const { login } = useUser();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  function setAuth(loginData) {
    try {
      loginKanban(loginData).then((data) => {
        login(data.user);
      });
    } catch (error) {
      alert(error.message);
    }
  }

  function handleInputChange(source, value) {
    setLoginData({
      ...loginData,
      [source]: value,
    });
  }

  function onLoginChange(event) {
    handleInputChange("login", event.target.value);
  }
  function onPasswordChange(event) {
    handleInputChange("password", event.target.value);
  }

  return (
    <>
     <GlobalStyle />
      <Layout>
        <Wrapper>
          <ContainerSignin>
            <Modal>
              <ModalBlock>
                <ModalTitle>
                  Вход
                </ModalTitle>
                <ModalFormLogin id="formLogIn" action="#">
                  <ModalInput
                    type="text"
                    name="login"
                    id="formlogin"
                    placeholder="Логин"
                    value={loginData.login}
                    onChange={onLoginChange}
                  />
                  <ModalInput
                    type="password"
                    name="password"
                    id="formpassword"
                    placeholder="Пароль"
                    value={loginData.password}
                    onChange={onPasswordChange}
                  />
                  <ModalBtnEnter
                    id="btnEnter"
                    onClick={(event) => {
                      event.preventDefault();
                      setAuth(loginData);
                    }}
                  >
                    Войти
                  </ModalBtnEnter>
                  <ModalFormGroup>
                    <p>Нужно зарегистрироваться?</p>
                    <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                  </ModalFormGroup>
                </ModalFormLogin>
              </ModalBlock>
            </Modal>
          </ContainerSignin>
        </Wrapper>
      </Layout>
    </>
  );
}
