import { Link } from "react-router-dom";
import "../signin.css";
import { AppRoutes } from "../lib/approutes";
import { useState } from "react";
import { loginKanban } from "../API";
import useUser from "../hooks/useUser";

export default function LoginPage() {
  const { login } = useUser();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  function setAuth(loginData) {
    loginKanban(loginData).then((data) => {
      login(data.user)
    });
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
      <div className="wrapper">
        <div className="container-signin">
          <div className="modal">
            <div className="modal__block">
              <div className="modal__ttl">
                <h2>Вход</h2>
              </div>
              <form className="modal__form-login" id="formLogIn" action="#">
                <input
                  className="modal__input"
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Логин"
                  value={loginData.login}
                  onChange={onLoginChange}
                />
                <input
                  className="modal__input"
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  value={loginData.password}
                  onChange={onPasswordChange}
                />
                <button
                  className="modal__btn-enter _hover01"
                  id="btnEnter"
                  onClick={(event) => {
                    event.preventDefault();
                    setAuth(loginData);
                  }}
                >
                  Войти
                </button>
                <div className="modal__form-group">
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
