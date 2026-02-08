import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
    text: {
      main: "rgb(61, 61, 61)",
      light:"rgb(74, 71, 74)"
    },
    background: {
      main: "rgb(231, 233, 234)",
      carsPage:"rgb(255,240,240)"
    }
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
    text: {
      main: "aliceblue",
      light:"rgba(186, 183, 186, 1)"
    },
    background: {
      main: "rgb(80, 84, 89)",
      carsPage:"rgba(24, 20, 22, 0.99)"
    },
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});
