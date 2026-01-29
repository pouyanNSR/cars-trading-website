import {
  DiamondRounded,
  HistoryRounded,
  MyLocationRounded,
  StraightenRounded,
  TollRounded,
  VisibilityRounded,
} from "@mui/icons-material";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import galexy from "../../assets/Gradientgalaxy.jpg";

import MainContext from "../../context";

import styles from "./innerComponentsStyles/CardSample.module.css";
import { useContext } from "react";

const CardSample = ({
  item,
  isIcon = true,
  isMaxWidth,
  componentClass,
  variant = "default",
}) => {
  const { mode } = useContext(MainContext);

  const getBackgroundStyles = () => {
    if (mode === "dark") {
      return{
        background: "rgb(74,74,47)",
      }
    }

    // light mode
    switch (variant) {
      case "gradient":
        return {
          background: `
            linear-gradient(rgba(255, 255, 255, 0.66)),
            url(${galexy}) center/cover
        `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "130%",
          minHeight: "100%",
          transition: "background-size 0.4s ease",
          "&:hover": {
            backgroundSize: "180%",
          },
        };
      case "white":
        return "#fff";
      default:
        return "#fff";
    }
  };

  return (
    <Card
      id={componentClass === "last-post" && styles["card--last-post"]}
      sx={{
        direction: "rtl",
        borderRadius: 3,
        boxShadow: "var(--card-box-shadow)",
        // overflow: "hidden",

        // backgroundColor: "yellow",

        mt: 2,
        minHeight: "100%",
        textAlign: "center",

        maxWidth: isMaxWidth ? "80%" : null,
      }}
    >
      <Box sx={{ position: "relative" }}>
        {isIcon && (
          <Grid className={styles["card__img-container--badge-container"]}>
            <DiamondRounded />
            <Box>
              <Typography>ویژه</Typography>
            </Box>
          </Grid>
        )}
        <CardMedia
          component="img"
          image={item.picture}
          alt={item.title}
          sx={{ objectFit: "contain", height: "100%" }}
        />
      </Box>
      <CardContent
        // sx={{ background: mode === "dark" && "rgba(43, 43, 43, 0.85)" }}
        sx={{ ...getBackgroundStyles() }}
        className={styles["card__card-content"]}
        // id={
        //   componentClass === "last-post" &&
        //   styles["card__card-content--last-post"]
        // }
      >
        <Typography
          color="text.main"
          variant="subtitle1"
          className={styles["card__card-content--lable-title"]}
        >
          {item.title}
        </Typography>
        <Grid
          color="text.secondary"
          className={styles["card__card-content--row-container"]}
        >
          <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
            {item.location}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mr: 0.4 }}
            className={styles["card__card-content--lable"]}
          >
            :موقعیت
          </Typography>
          <Typography color="red" variant="subtitle1" sx={{ mr: 0.4 }}>
            <MyLocationRounded fontSize="small" />
          </Typography>
        </Grid>
        <Grid
          color="text.secondary"
          className={styles["card__card-content--row-container"]}
        >
          <Typography variant="subtitle1">نفر</Typography>
          <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
            {item.view}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mr: 0.4 }}
            className={styles["card__card-content--lable"]}
          >
            :بازدید
          </Typography>
          <Typography variant="subtitle1" sx={{ mr: 0.4 }}>
            <VisibilityRounded fontSize="small" />
          </Typography>
        </Grid>
        <Grid
          color="text.secondary"
          className={styles["card__card-content--row-container"]}
        >
          <Typography variant="subtitle1">پیش</Typography>
          <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
            {item.periodOfTime}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
            {item.numberOfTime}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mr: 0.4 }}
            className={styles["card__card-content--lable"]}
          >
            :زمان
          </Typography>
          <Typography color="dodgerblue" variant="subtitle1" sx={{ mr: 0.4 }}>
            <HistoryRounded fontSize="small" />
          </Typography>
        </Grid>
        <Grid
          color="text.secondary"
          className={styles["card__card-content--row-container"]}
        >
          <Typography variant="subtitle1">کیلومتر</Typography>
          <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
            {item.ditance}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mr: 0.4 }}
            className={styles["card__card-content--lable"]}
          >
            :کارکرد
          </Typography>
          <Typography color="darkorange" variant="subtitle1" sx={{ mr: 0.4 }}>
            <StraightenRounded fontSize="small" />
          </Typography>
        </Grid>
        <Grid
          color="text.secondary"
          className={styles["card__card-content--row-container"]}
        >
          <Typography variant="subtitle1">تومان</Typography>
          <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
            {item.price}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mr: 0.4 }}
            className={styles["card__card-content--lable"]}
          >
            :قیمت
          </Typography>
          <Typography color="green" variant="subtitle1" sx={{ mr: 0.4 }}>
            <TollRounded fontSize="small" />
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardSample;
