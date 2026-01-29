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

    },
    background: {
      main: "rgb(231, 233, 234)",
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
    },
    background: {
      main: "rgb(80, 84, 89)",
    },
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});
