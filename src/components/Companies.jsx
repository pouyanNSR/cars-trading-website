
import { Box, Typography, Grid } from '@mui/material';
import a from "../assets/brands/258076.png";
import b from "../assets/brands/258233.png";
import c from "../assets/brands/258486.png";
import d from "../assets/brands/258519.png";
import e from "../assets/brands/258759.png";
import f from "../assets/brands/258822.png";
import g from "../assets/brands/258076.png";
import h from "../assets/brands/Toyota.png";
import i from "../assets/brands/258759.png";
import j from "../assets/brands/258233.png";

import { motion } from "motion/react";

import styles from "../styledModule/Companies.module.css"


const Companies = () => {

    const brands = [
        { image: a },
        { image: b },
        { image: c },
        { image: d },
        { image: e },
        { image: f },
        { image: g },
        { image: h },
        { image: i },
        { image: j },
    ]
    return (
        <Box className={styles["companies__container"]}>
            <Typography variant="h3" fontFamily="vazir" fontWeight="bold" className={styles["companies__titr"]}>
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
                            <Grid item sx={{ marginBottom: "70px" }} key={index} xs={6} md={3} className={styles["companies__inner-container--brand"]}>
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