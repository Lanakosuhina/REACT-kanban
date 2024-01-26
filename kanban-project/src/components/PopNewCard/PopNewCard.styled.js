import { createGlobalStyle } from "styled-components";

export const GlobalNewCard = createGlobalStyle`

.pop-new-card {
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
}

.pop-new-card__container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.exitBack};
}

.pop-new-card__block {
  display: block;
  margin: 0 auto;
  background-color: ${props => props.theme.backColor};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: ${props => props.theme.border};
  position: relative;
}

.pop-new-card__content {
  display: block;
  text-align: left;
}

.pop-new-card__ttl {
  color: ${props => props.theme.color};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
}

.pop-new-card__close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
}

.pop-new-card__close:hover {
  color: #000000;
}

.pop-new-card__wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.pop-new-card__form {
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
}

.form-new__block {
  display: flex;
  flex-direction: column;
}

.form-new__input, .form-new__area {
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}

.form-new__input::-moz-placeholder, .form-new__area::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

.form-new__input::placeholder, .form-new__area::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

.form-new__input {
  margin: 20px 0;
}

.form-new__area {
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
}

.form-new__create {
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;
}

/* FROM POP NEW CARD */

.categories {
  margin-bottom: 20px;
}

.categories__themes {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.categories__p {
  margin-bottom: 14px;
}

.categories__theme {
  display: inline-block;
  width: auto;
  height: auto;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
}

.categories__theme label {
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
}

.radio-toolbar input[type="radio"] {
    display: none;
}

.radio-toolbar label {
    display: inline-block;
    cursor: pointer;
}

.radio-toolbar:hover {
  opacity: 1 !important;
} 
`;
