
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
import styles from "../styledModule/LastPost.module.css"

const LastPost = () => {
    const data = [
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" },
        { title: "رانا دنده ای", price: "77,000,000", ditance: "45000", producingYear: "1398", numberOfTime: 3, periodOfTime: "هفته", time: " هفته ", location: "تهران", view: "2000" }
      ];    
    return (
        <>
            <Box className={styles["LastPost__container"]} sx={{ height: "70vh" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((Item, index) => (
                        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                            dd
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default LastPost
