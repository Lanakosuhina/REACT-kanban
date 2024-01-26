import { createGlobalStyle } from "styled-components";

export const GlobalPopBrowse = createGlobalStyle`

/* POP BROWSE */

.pop-browse {
  /* display: none; */
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
}

.pop-browse__container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.exitBack};
}

.pop-browse__block {
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backColor};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: ${(props) => props.theme.border};
  position: relative;
}

.pop-browse__content {
  display: block;
  text-align: left;
}

.pop-browse__content .categories__theme {
  opacity: 1;
}

.pop-browse__content .theme-down {
  display: none;
  margin-bottom: 20px;
}

.pop-browse__content .theme-top {
  display: block;
}

.pop-browse__top-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.pop-browse__ttl {
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}

.pop-browse__wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.pop-browse__form {
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
}

.pop-browse__btn-browse, .pop-browse__btn-edit {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.pop-browse__btn-browse button, .pop-browse__btn-edit button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}

.pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
  margin-right: 8px;
}

.form-browse__block {
  display: flex;
  flex-direction: column;
}

.form-browse__area {
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${(props) => props.theme.backgroundColor};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
}

.form-browse__area::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

.form-browse__area::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

/* STATUS FROM POP BROWSE*/

.status {
  margin-bottom: 11px;
}

.status__p {
  margin-bottom: 14px;
}

.status__themes {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.status__theme {
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
}

.status__theme p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}

._btn-bor {
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.btn};
}

._btn-bor a {
  color: ${(props) => props.theme.btn};
}

._btn-bg {
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;
}

._btn-bg a {
  color: #FFFFFF;
}
`;