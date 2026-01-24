

import {
    DiamondRounded, HistoryRounded, MyLocationRounded
    ,StraightenRounded, TollRounded, VisibilityRounded
} from '@mui/icons-material';

import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box
} from "@mui/material";

import car from "../../assets/genesis-x-gran-4096x2160-13735.jpeg"

import styles from "./innerComponentsStyles/CardSample.module.css"

const CardSample = ({ item, isIcon = true ,isMaxWidth,componentClass }) => {
    console.log(item.title);
    
    return (
        <Card
            id={componentClass === "last-post" && styles["card--last-post"]}
            sx={{
                direction:"rtl",
                borderRadius: 3,
                boxShadow: "var(--card-box-shadow)",
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
                    <Grid className={styles["card__img-container--badge-container"]}>
                        <DiamondRounded/>
                        <Box>
                            <Typography>
                                ویژه
                            </Typography>
                        </Box>
                    </Grid>
                }
                <CardMedia
                    component="img"
                    image={item.picture}
                    alt={item.title}
                    sx={{ objectFit: "contain", height: "100%" }}
                />
            </Box>
            <CardContent 
                className={styles["card__card-content"]} 
                id={componentClass === "last-post" && styles["card__card-content--last-post"]}
            >
                <Typography variant="subtitle1" className={styles["card__card-content--lable-title"]}
                >
                    {item.title}
                </Typography>
                <Grid color="text.secondary" className={styles["card__card-content--row-container"]}>
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
                <Grid color="text.secondary" className={styles["card__card-content--row-container"]}>
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
                <Grid color="text.secondary" className={styles["card__card-content--row-container"]}>
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
                <Grid color="text.secondary" className={styles["card__card-content--row-container"]}>
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
                <Grid color="text.secondary" className={styles["card__card-content--row-container"]}>
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