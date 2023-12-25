import { createGlobalStyle, css } from "styled-components";
import { breakpoints } from "../src/lib/breakpoints";

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
    background-color: #33399b;
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

/* ._hover01:hover {
  background-color: #33399b;
}

._hover02:hover {
  color: #33399b;
} */

/* ._hover02:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
} */

/* ._hover03:hover {
  background-color: #33399b;
  color: #FFFFFF;
}

._hover03:hover a {
  color: #FFFFFF;
} */

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
  color: #000000;
}

.loader {
  font-family: Helvetica, sans-serif;
  color: #000;
  text-align: center;
  margin-top: 200px;
}

.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
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
  background-color: #FFE4C2;
  color: #FF6D00;
}

._green {
  background-color: #B4FDD1;
  color: #06B16E;
}

._purple {
  background-color: #E9D4FF;
  color: #9A48F1;
}

._gray {
  background: #94A6BE;
  color: #FFFFFF;
}

.subttl {
  color: #000;
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
