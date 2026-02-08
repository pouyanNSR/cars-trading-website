import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

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
import CarsListPageContainer from "./components/pages/CarsList/CarsListPageContainer";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  const [mode, setMode] = useState();

  //*For Mode Button Effect
  // const [screenEffect, setScreenEffect] = useState(false)

  const [open, setOpen] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState({
    landingpageModal: "",
    carsListModal: "",
  });
  const [selectedBrand, setSelectedBrand] = useState("");

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
  console.log(selectedProvince);

  return (
    <MainContext.Provider
      value={{
        handleThemeChange,
        mode,
        open,
        setOpen,
        selectedProvince,
        setSelectedProvince,
        selectedBrand,
        setSelectedBrand,
      }}
    >
      <MainLayout
        mode={mode}
        // screenEffect={screenEffect}
      >
        <ToolTip />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeLayout />} />
          <Route path="cars" element={<CarsListPageContainer/>} />
        </Routes>
      </MainLayout>
    </MainContext.Provider>
  );
}
export default App;
