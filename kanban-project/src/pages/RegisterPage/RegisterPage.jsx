import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import { useState } from "react";
import { registerKanban } from "../../API";
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

export default function RegisterPage() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    login: "",
    password: "",
  });

  function setReg(registerData) {
    try {
      if (
        registerData.login === "" ||
        registerData.password === "" ||
        registerData.name === ""
      ) {
        setHasError(true);
        throw new Error(
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
        );
      }
      registerKanban(registerData).then(() => {
        navigate(AppRoutes.LOGIN);
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
    setRegisterData({
      ...registerData,
      [source]: value,
    });
  }

  function onNameChange(event) {
    handleInputChange("name", event.target.value);
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
                <ModalTitle>Регистрация</ModalTitle>
                <ModalFormLogin id="formLogUp" action="#">
                  <ModalInput
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Имя"
                    value={registerData.name}
                    onChange={onNameChange}
                  />
                  <ModalInput
                    type="text"
                    name="login"
                    id="loginReg"
                    placeholder="Логин"
                    value={registerData.login}
                    onChange={onLoginChange}
                  />
                  <ModalInput
                    type="password"
                    name="password"
                    id="passwordFirst"
                    placeholder="Пароль"
                    value={registerData.password}
                    onChange={onPasswordChange}
                  />
                  {hasError ? (
                    <>
                      <ErrorText>{hasError}</ErrorText>
                      <ModalBtnErr
                        disabled
                        onClick={(event) => {
                          event.preventDefault();
                          setReg(registerData);
                        }}
                      >
                        Зарегистрироваться
                      </ModalBtnErr>
                    </>
                  ) : (
                    <ModalBtnEnter
                      id="SignUpEnter"
                      onClick={(event) => {
                        event.preventDefault();
                        setReg(registerData);
                      }}
                    >
                      Зарегистрироваться
                    </ModalBtnEnter>
                  )}

                  <ModalFormGroup>
                    <p>
                      Уже есть аккаунт?{" "}
                      <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
                    </p>
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
