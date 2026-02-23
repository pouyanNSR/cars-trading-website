import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { createTheme } from "@mui/material/styles";

import Grid from "@mui/material/Unstable_Grid2";

import { lightTheme, darkTheme } from "./theme";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
  typography: {
    fontFamily: "vazir,tanha",
  },
});

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});



const MainLayout = ({ children, mode}) => {
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>KhodroBaz</title>
          </Helmet>
          <Grid 
             //*For Mode Button Effect
            // className={screenEffect ? styles["screen"] : null} 
          >{children}</Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
