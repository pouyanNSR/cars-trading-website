
import {
    Grid,
    Typography,
    Box,
} from "@mui/material";

import CardSample from './innerComponents/CardSample';

import styles from "../styledModule/LastPost.module.css"

import { carsData } from "../data/carsData";

const LastPost = () => {
    return (
        <>
            <Box className={styles["lastPost__container"]}>
                <Typography
                    variant="h3"
                    id={styles["last-post__titr"]}
                >
                    آخرین آگهی ها
                </Typography>
                <Grid container className={styles["last-post__inner-container"]} rowSpacing={13}>
                    {carsData.map((carData, index) => (
                        <Grid item sx={{ display:"flex",height: "100%",justifyContent:"center"}} xs={6} sm={6} md={3} key={index}>
                            <CardSample item={carData} isIcon={false} isMaxWidth={true} componentClass={"last-post"}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default LastPost
