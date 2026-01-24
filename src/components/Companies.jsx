
import { Box, Typography, Grid } from '@mui/material';

import {brands} from "../data/brands"

import { motion } from "motion/react";

import styles from "../styledModule/Companies.module.css"


const Companies = () => {

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