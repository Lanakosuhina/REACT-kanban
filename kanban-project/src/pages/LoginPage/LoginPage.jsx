import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import { useState } from "react";
import { loginKanban } from "../../API";
import useUser from "../../hooks/useUser";
import Layout from "../../components/Layout";
import {
  ContainerSignin,
  ErrorText,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalBtnErr,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTitle,
  Wrapper,
} from "../RegisterPage/Entrance.styled";
import { GlobalStyle } from "../../Global.styled";

export default function LoginPage() {
  const { login } = useUser();
  const [hasError, setHasError] = useState(false);
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  function setAuth(loginData) {
    try {
      if (loginData.login === "" || loginData.password === "") {
        setHasError(true);
        throw new Error(
          "Введенные вами данные не распознаны. проверьте свой логин и пароль и повторите попытку входа."
        );
      }
      loginKanban(loginData).then((data) => {
        login(data.user);
      });
    } catch (error) {
      setHasError(error.message);
      console.error(error);
      setTimeout(() => {
        setHasError(false);
      }, 2000); 
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
                <ModalTitle>Вход</ModalTitle>
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
                  {hasError ? (
                    <>
                      <ErrorText>{hasError}</ErrorText>
                      <ModalBtnErr
                        disabled
                        onClick={(event) => {
                          event.preventDefault();
                          setAuth(loginData);
                        }}
                      >
                        Войти
                      </ModalBtnErr>
                    </>
                  ) : (
                    <ModalBtnEnter
                      id="btnEnter"
                      onClick={(event) => {
                        event.preventDefault();
                        setAuth(loginData);
                      }}
                    >
                      Войти
                    </ModalBtnEnter>
                  )}
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
