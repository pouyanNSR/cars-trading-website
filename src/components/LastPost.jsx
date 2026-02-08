import { Grid, Typography, Box } from "@mui/material";
import { motion } from "motion/react";

import city from "../assets/chicago-downtown-3840x2160-21348.jpg";

import CardSample from "./innerComponents/CardSample";

import styles from "../styledModule/LastPost.module.css";
import MainContext from "../context";

import { carsData } from "../data/carsData";
import { useContext, useState } from "react";

const LastPost = () => {
  const { mode } = useContext(MainContext);

  // const MotionGrid = motion(Grid);
  const [active, setActive] = useState(false);

  const getBackgroundStyles = () => {
    if (mode === "dark") {
      return {
        background:
          "radial-gradient(circle farthest-corner at center center, #2b3033ff 60%, #006969 85%)",
        backgroundSize: "120px",
        backgroundRepeat: "repeat",
      };
    } else {
      return {
        background:
          "radial-gradient(circle farthest-corner at center center, #aad9f8 60%, #caffff 85%)",
        backgroundSize: "120px",
        backgroundRepeat: "repeat",
      };
    }
  };
  return (
    <>
      <Box
        className={styles["lastPost__container"]}
        sx={{ ...getBackgroundStyles() }}
      >
        <Typography variant="h3" id={styles["last-post__titr"]}>
          آخرین آگهی ها
        </Typography>
        <Grid
          container
          className={styles["last-post__inner-container"]}
          rowSpacing={15}        
          // component={motion.div}
          // whileHover={() => setActive(true)}
          // onViewportEnter={() =>setActive(true)}
          // onViewportLeave={() => setActive(false)}
          // container
          // className={styles["last-post__inner-container"]}
          // rowSpacing={13}
          // sx={{
          //   "&::after": {
          //     background: active
          //       ? `url(${city}) center/cover`
          //       : `linear-gradient(rgba(94, 6, 111, 0.997),rgba(23, 252, 206, 0.953))`,
          //     opacity: active ? 1 : 0,
          //     transition: "opacity 1.2s ease",
          //   },
          // }}
        >
          {carsData.map((carData, index) => (
            <Grid
              item
              sx={{ display: "flex", height: "100%", justifyContent: "center" }}
              xs={6}
              sm={6}
              md={3}
              key={index}
            >
              <CardSample
                item={carData}
                isIcon={false}
                isMaxWidth={true}
                componentClass={"last-post"}
                variant="white"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default LastPost;
