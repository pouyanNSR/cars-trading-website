
import {
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CardSample from './innerComponents/CardSample';
import MainContext from "../context"

import {carsData} from "../data/carsData"

import styles from "../styledModule/SpecialPost.module.css"
import { useContext } from "react";


const SpecialPost = () => {

  const {mode} = useContext(MainContext)
  // const data = [
  //   { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", location: "تهران", view: "2000" },
  //   { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
  //   { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
  //   { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
  //   { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
  //   { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
  //   { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" }
  // ];

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "-20px",
        zIndex: 10,
        transform: "translateY(-50%)",
        backgroundColor: "background.main",
        boxShadow: 2,
        "&:hover": { backgroundColor: "#eee" },
      }}
    >
      <ArrowBackIos sx={{marginRight:"4px"}} />
    </IconButton>
  );

  const NextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "-20px",
        transform: "translateY(-50%)",
        backgroundColor: "background.main",
        boxShadow: 2,
        zIndex: 10,
        "&:hover": { backgroundColor: "#eee" },
      }}
    >
      <ArrowForwardIos sx={{color:"text.main"}}/>

    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease",
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  return (
    <Box
      className={styles["special-post__container"]}
      sx={{filter: mode === "light" ? "saturate(140%)" : "saturate(75%)"
       }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold" }}
        dir="rtl"
        id={styles["special-post__titr"]}
      >
        آگهی‌های ویژه
      </Typography>
{/* 
      <Box className={styles["special-post__slider-container"]}>
        <Slider {...settings} sx={{ zIndex: 8 }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ px: 1, mb: 3,width:"80% !important" }} className={styles["special-post__card-container"]}>
              <CardSample item={item} isIcon={true}/>
            </Box>
          ))}
        </Slider>
      </Box> */}
      
      <Box className={styles["special-post__slider-container"]}>
        <Slider {...settings} sx={{ zIndex: 8 }}>
          {carsData.map((carData, index) => (
            <Box key={index} sx={{ px: 1, mb: 3,width:"80% !important" }} className={styles["special-post__card-container"]}>
              <CardSample item={carData} isIcon={true} variant="gradient"/>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default SpecialPost