import { createGlobalStyle, css } from "styled-components";
import { breakpoints } from "../src/lib/breakpoints";
import normalize from "styled-normalize";

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const hover03 = css`
  &:hover {
    background-color: ${(props) => props.theme.h03back};
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
 ${normalize}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}


a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.color};
}

.loader {
  font-family: Helvetica, sans-serif;
  color: #000;
  text-align: center;
  margin-top: 100px;
}

.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color:
  ${(props) => props.theme.backgroundColor};
}

.container {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;
  }

}

._orange {
  background-color: ${(props) => props.theme.orangeBack};
  color: ${(props) => props.theme.orangeCol};
}

._green {
  background-color: ${(props) => props.theme.greenBack};
  color: ${(props) => props.theme.greenCol};
}

._purple {
  background-color: ${(props) => props.theme.purpleBack};
  color: ${(props) => props.theme.purpleCol};
}

._gray {
  background: #94A6BE;
  color: #FFFFFF;
}

.subttl {
  color: ${(props) => props.theme.subttl};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}

._hide {
  display: none;
}

._active-category {
  opacity: 1 !important;
}
`;
