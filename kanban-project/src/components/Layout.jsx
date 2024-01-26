import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";

const Layout = ({ children }) => {
  const darkTheme = {
    color: "#FFFFFF",
    backgroundColor: "#151419",
    orangeBack: "#FF6D00",
    organgeCol: "#FFE4C2",
    greenBack: "#06B16E",
    greenCol: "#B4FDD1",
    purpleBack: " #9A48F1",
    purpleCol: " #E9D4FF",
    subttl: "#fff",
    h03back: " #565EEF",
    exitBack: "rgba(0, 0, 0, 0.8)",
    backColor: " #20202C",
    backColor2: " #202229",
    border: "0.7px solid #4E5566",
    input: "#565EEF",
    btn: "#FFFFFF",
    border2: " 1.9px solid #FFFFFF",

  };
  const lightTheme = {
    color: "#000000",
    backgroundColor: "#F1F1F1",
    orangeBack: "#FFE4C2",
    organgeCol: " #FF6D00",
    greenBack: "#B4FDD1",
    greenCol: " #06B16E",
    purpleBack: "#E9D4FF",
    purpleCol: "#9A48F1",
    subttl: "#000",
    h03back: "#33399b",
    exitBack: "rgba(0, 0, 0, 0.4)",
    backColor: "#ffffff",
    backColor2: "#ffffff",
    border: "0.7px solid #d4dbe5",
    input: "#94a6be",
    btn: "#565EEF",
    border2: " 1.9px solid #565eef",


  };
  // 3.
  const currentTheme = useContext(GlobalContext);
  // 4.
  let theme;
  switch (currentTheme.theme) {
    case "dark":
      theme = darkTheme;
      break;
    case "light":
      theme = lightTheme;
      break;
    default:
      theme = lightTheme;
  }
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  );
};
export default Layout;
