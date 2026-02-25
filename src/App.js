import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import ToolTip from "./components/innerComponents/ToolTip";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import MainContext from "./context";
import CarsListPageContainer from "./components/pages/CarsList/CarsListPageContainer";
import HomeLayout from "./layouts/HomeLayout";

import {postsInfo} from "./data/postsInfo"
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState();

  //*For Mode Button Effect
  // const [screenEffect, setScreenEffect] = useState(false)

  const [open, setOpen] = useState(null);
  // const [selectedProvince, setSelectedProvince] = useState({
  //   landingpageModal: "",
  //   carsListModal: "",
  // });
  // const [selectedBrand, setSelectedBrand] = useState("");
  // const [min, setMin] = useState("");
  // const [max, setMax] = useState("");

  const [filtered, setFiltered] = useState({
    min:"",
    max:"",
    selectedProvince:{
      landingpageModal: "",
      carsListModal: ""      
    },
    selectedBrand:""
  })

//* why infinity? because it makes { Number - infinity(♾️) = negative } , { infinity(♾️) - positive = Number }
const getNumericPrice = (price) => {
  const parsedNumber = parseInt(price);
  return isNaN(parsedNumber) ? Infinity : parsedNumber;
};

const filteredPosts = postsInfo.filter((post) => {
    if (filtered.selectedProvince.carsListModal && post.location !== filtered.selectedProvince.carsListModal) return false;
    if (filtered.selectedBrand && post.brand !== filtered.selectedBrand) return false;

    if (filtered.min && getNumericPrice(post.price) <= parseInt(filtered.min)) return false;
    if (filtered.max && getNumericPrice(post.price) > parseInt(filtered.max)) return false;

    return true;
    
  }).sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));

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
        mode,
        open,
        setOpen,
        filtered,
        setFiltered,
        filteredPosts
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
          <Route path="cars" element={<CarsListPageContainer />} />
        </Routes>
        <Footer />
      </MainLayout>
    </MainContext.Provider>
  );
}
export default App;
