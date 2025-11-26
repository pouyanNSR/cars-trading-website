

import {
    Badge, DiamondRounded, HistoryRounded, MyLocationRounded,
    Opacity, SellRounded, StraightenRounded, TollRounded, VisibilityRounded
} from '@mui/icons-material';

import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    IconButton,
} from "@mui/material";
import car from "../../assets/26747685067_370dfcdf35_h-min.jpg"

import styles from "./innerComponentsStyles/CardSample.module.css"

const CardSample = ({ item, isIcon = true ,isMaxWidth,componentClass }) => {
    return (
        <Card
            id={componentClass === "last-post" && styles["card__card--last-post"]}
            className={styles["card__card"]}
            sx={{
                direction:"rtl",
                borderRadius: 3,
                boxShadow: 3,
                // overflow: "hidden",
                backgroundColor: "yellow",
                mt: 2,
                minHeight: "100%",
                textAlign: "center",
                maxWidth: isMaxWidth ? "80%" : null
            }}
        >
            <Box sx={{ position: "relative" }}>
                {isIcon && 
                    <Grid
                        badgeContent="New"
                        color="primary"
                        className={styles["card__img-container--badge-container"]}
                    >
                        <DiamondRounded/>
                        <Box>
                            <Typography>
                                ویژه
                            </Typography>
                        </Box>
                    </Grid>
                }
                <CardMedia
                    className={styles["card__card-media"]}
                    component="img"
                    // width="100 !important"
                    image={car}
                    alt={item.title}
                    sx={{ objectFit: "contain", height: "100%" }}
                />
            </Box>
            <CardContent 
                sx={{ minHeight: "100%" }}
                className={styles["card__card-content"]} 
                id={componentClass === "last-post" && styles["card__card-content--last-post"]}
            >
                <Typography variant="subtitle1" className={styles["card__card-content--lable-title"]}
                >
                    {item.title}
                </Typography>
                <Grid color="text.secondary" sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "3px", mx: 3 }}>
                    <Typography  variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
                        {item.location}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mr: 0.4 }} className={styles["card__card-content--lable"]}>
                        :موقعیت
                    </Typography>
                    <Typography color='red' variant="subtitle1" sx={{ mr: 0.4 }}>
                        <MyLocationRounded fontSize='small' />
                    </Typography>
                </Grid>
                <Grid color="text.secondary" sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "3px", mx: 3 }}>
                    <Typography variant="subtitle1">
                        نفر
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
                        {item.view}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mr: 0.4 }} className={styles["card__card-content--lable"]}>
                        :بازدید
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mr: 0.4 }}>
                        <VisibilityRounded fontSize='small' />
                    </Typography>
                </Grid>
                <Grid color="text.secondary" sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "3px", mx: 3 }}>
                    <Typography variant="subtitle1">
                        پیش
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
                        {item.periodOfTime}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
                        {item.numberOfTime}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mr: 0.4 }} className={styles["card__card-content--lable"]}>
                        :زمان
                    </Typography>
                    <Typography color='dodgerblue' variant="subtitle1" sx={{ mr: 0.4 }}>
                        <HistoryRounded fontSize='small' />
                    </Typography>
                </Grid>
                <Grid color="text.secondary" sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "3px", mx: 3 }}>
                    <Typography variant="subtitle1">
                        کیلومتر
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
                        {item.ditance}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mr: 0.4 }} className={styles["card__card-content--lable"]}>
                        :کارکرد
                    </Typography>
                    <Typography color='darkorange' variant="subtitle1" sx={{ mr: 0.4 }}>
                        <StraightenRounded fontSize='small' />
                    </Typography>
                </Grid>
                <Grid color="text.secondary" sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "3px", mx: 3 }}>
                    <Typography variant="subtitle1">
                        تومان
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontFamily: "shabnam" }}>
                        {item.price}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mr: 0.4 }} className={styles["card__card-content--lable"]}>
                        :قیمت
                    </Typography>
                    <Typography color='green' variant="subtitle1" sx={{ mr: 0.4 }}>
                        <TollRounded fontSize='small' />
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CardSample