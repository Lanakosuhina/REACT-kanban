import "../signup.css";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/approutes";
import { useState } from "react";
import { registerKanban } from "../API";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    login: "",
    password: "",
  });

  function setReg(registerData) {
      registerKanban(registerData).then(() => {
        navigate(AppRoutes.LOGIN);
      });
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
      <div className="wrapper">
        <div className="container-signup">
          <div className="modal">
            <div className="modal__block">
              <div className="modal__ttl">
                <h2>Регистрация</h2>
              </div>
              <form className="modal__form-login" id="formLogUp" action="#">
                <input
                  className="modal__input first-name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                  value={registerData.name}
                  onChange={onNameChange}
                />
                <input
                  className="modal__input login"
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Логин"
                  value={registerData.login}
                  onChange={onLoginChange}
                />
                <input
                  className="modal__input password-first"
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  value={registerData.password}
                  onChange={onPasswordChange}
                />
                <button
                  className="modal__btn-signup-ent _hover01"
                  id="SignUpEnter"
                  onClick={(event) => {
                  event.preventDefault();
                  setReg(registerData)
                }}
                >
                Зарегистрироваться
                </button>
                <div className="modal__form-group">
                  <p>
                    Уже есть аккаунт?
                    <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
