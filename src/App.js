import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SpecialPost from "./components/SpecialPost";
import Advertisement from "./components/Advertisement";

import LastPost from "./components/LastPost";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import ToolTip from "./components/innerComponents/ToolTip";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import MainContext from "./context";

function App() {
  const [mode, setMode] = useState();
  
  //*For Mode Button Effect
  // const [screenEffect, setScreenEffect] = useState(false)

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    //*For Mode Button Effect
    // setScreenEffect(true)
    // setTimeout(() => {
    //   setScreenEffect(false)
    // },90)
  };
  return (
    <MainContext.Provider
      value={{
        handleThemeChange,
        mode
      }}
    >
      <MainLayout mode={mode} 
      // screenEffect={screenEffect}
      >
        <ToolTip />
        <Navbar />
        <LandingPage />
        <SpecialPost />
        <Advertisement />
        <LastPost />
        <Companies />
        <Footer />
      </MainLayout>
    </MainContext.Provider>
  );
}
export default App;
