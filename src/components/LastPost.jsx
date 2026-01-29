import { Grid, Typography, Box } from "@mui/material";

import CardSample from "./innerComponents/CardSample";

import styles from "../styledModule/LastPost.module.css";
import MainContext from "../context";

import { carsData } from "../data/carsData";
import { useContext } from "react";

const LastPost = () => {
  const { mode } = useContext(MainContext);

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
          rowSpacing={13}
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
