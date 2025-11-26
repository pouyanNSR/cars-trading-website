
import {
    Badge, DiamondRounded, HistoryRounded, MyLocationRounded, Opacity,
    SellRounded, StraightenRounded, TollRounded, VisibilityRounded
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
import CardSample from './innerComponents/CardSample';
import styles from "../styledModule/LastPost.module.css"

const LastPost = () => {
    const data = [
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
    ];
    return (
        <>
            <Box className={styles["lastPost__container"]}>
                <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold" }}
                    dir="rtl"
                    id={styles["last-post__titr"]}
                >
                    آخرین آگهی ها
                </Typography>
                <Grid container className={styles["last-post__inner-container"]} rowSpacing={13} sx={{ display: "flex", justifyContent: "center" }}>
                    {data.map((item, index) => (
                        <Grid item sx={{ display:"flex",height: "100%",justifyContent:"center"}} xs={6} sm={6} md={3} key={index}>
                            <CardSample item={item} isIcon={false} isMaxWidth={true} componentClass={"last-post"}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default LastPost
