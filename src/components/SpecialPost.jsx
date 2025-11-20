// import {Grid,Box,Typography} from '@mui/material'
import { Badge, DiamondRounded, HistoryRounded, MyLocationRounded, Opacity, SellRounded, StraightenRounded, TollRounded, VisibilityRounded } from '@mui/icons-material';

import Slider from "react-slick";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import car from "../assets/26747685067_370dfcdf35_h-min.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styledModule/SpecialPost.module.css"
import CardSample from './innerComponents/CardSample';


const SpecialPost = () => {

  const data = [
    { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", location: "تهران", view: "2000" },
    { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
    { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
    { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
    { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
    { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
    { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" }
  ];

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "-20px",
        zIndex: 10,
        transform: "translateY(-50%)",
        backgroundColor: "white",
        boxShadow: 2,
        "&:hover": { backgroundColor: "#eee" },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );

  const PrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "-20px",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        boxShadow: 2,
        zIndex: 10,
        "&:hover": { backgroundColor: "#eee" },
      }}
    >
      <ArrowForwardIos />

    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
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
      sx={{
        textAlign: "center",
        py: 5,
        height: "90vh"
      }}
      className={styles["special-post__container"]}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold" }}
        dir="rtl"
        id={styles["special-post__titr"]}
      >
        آگهی‌های ویژه
      </Typography>

      <Box sx={{ /* position: "relative",*/px: 6 }} className={styles["special-post__slider-container"]}>
        <Slider {...settings} sx={{ zIndex: 8 }} className="sssss">
          {data.map((item, index) => (
            <Box key={index} sx={{ px: 1, mb: 3 }} className={styles["special-post__card-container"]}>
              <CardSample item={item}/>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default SpecialPost