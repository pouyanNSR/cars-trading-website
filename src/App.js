import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { createTheme } from "@mui/material/styles";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SpecialPost from "./components/SpecialPost";
import Advertisement from "./components/Advertisement";

import LastPost from "./components/LastPost";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import ToolTip from "./components/innerComponents/ToolTip";

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
    fontFamily: "vazir,tanha"
  },
});

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>KhodroBaz</title>
          </Helmet>
          <ToolTip/>
          <Navbar />
          <LandingPage />
          <SpecialPost />
          <Advertisement />
          <LastPost/>
          <Companies/>
          <Footer/>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App;