
import { Box, Typography, Grid } from '@mui/material';
import peugeot from "../assets/brands/Peugeot.png";
import renault from "../assets/brands/258486.png";
import nissan from "../assets/brands/nissan.png";
import mazda from "../assets/brands/258519.png";
import mvm from "../assets/brands/Mwm.png";
import suzuki from "../assets/brands/258076.png";
import jac from "../assets/brands/JAC Motors -chap.png";
import toyota from "../assets/brands/Toyota.png";
import bmw from "../assets/brands/258759.png";
import mitsubishi from "../assets/brands/258822.png";

import { motion } from "motion/react";

import styles from "../styledModule/Companies.module.css"


const Companies = () => {

    const brands = [
        { image: peugeot },
        { image: renault },
        { image: nissan },
        { image: mazda },
        { image: mvm },
        { image: suzuki },
        { image: jac },
        { image: toyota },
        { image: bmw },
        { image: mitsubishi },
    ]
    return (
        <Box className={styles["companies__container"]}>
            <Typography variant="h3" className={styles["companies__titr"]}>
                شرکت های محبوب
            </Typography>
            <Grid
                className={styles["companies__inner-container"]}
                component={motion.div}
                initial={{ filter:"blur(6px)" }}
                whileInView={{  filter:"blur(0px) contrast(140%)"}}
                transition={{ duration: 3 }}
            >
                <Grid container columns={15} spacing={3} className={styles["companies__inner-container--brands-container"]}>
                    {
                        brands.map((item, index) => (
                            <Grid item sx={{ marginBottom: "70px",height: "180px" }} key={index} xs={6} md={3}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                                    <Box width="70%" height="100%" component="img" src={item.image} alt="images" />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default Companies