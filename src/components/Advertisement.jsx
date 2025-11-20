
import { useEffect, useRef, useState } from "react";
import styles from "../styledModule/Advertisement.module.css"
import {
    Modal,
    Grid,
    Box,
    Typography,
    Button,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import Typed from "typed.js";

/* import { motion } from "motion/react" */;



const Advertisement = () => {

    const typedRef = useRef(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {

        if (!visible) return;

        const typed = new Typed(typedRef.current, {
            strings:
                [`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
            علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد`
                ],
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 1500,
            loop: false,
            showCursor: false
        });

        return () => typed.destroy();
    }, [visible]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 } // trigger when 30% visible
        );
        const el = typedRef.current.parentElement;
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    py: 5,
                    height: "100vh",
                    width: "100%"
                }}
                className={styles["advertisement__container"]}
            >
                <Box position="absolute" className={styles["advertisement__inner-container"]}>
                    <Typography variant="h3" fontFamily="tanha" fontWeight="bold" className={styles["advertisement__titr"]}>
                        بگرد و یه خوبش رو پیدا کن!
                    </Typography>
                    <Grid className={styles["wrapper"]} sx={{ marginTop: "5px" }}>
                        <svg>
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                KhodroBaz
                            </text>
                        </svg>
                    </Grid>
                    <Box
                        // component={motion.div}
                        // initial={{ opacity: 0 }}
                        // whileInView={{ opacity: 1}}
                        // transition={{ duration: 0.6 }}
                        className={styles["advertisement__caption-container"]}>
                        <Typography ref={typedRef} variant="subtitle1" fontSize="17.7px" fontWeight="550" paddingBottom="20px">
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles["advertisement__wave-svg-container"]}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320" style={{zIndex:"2"}}>
                        <path fill="#0099ff" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,144C672,160,768,224,864,218.7C960,213,1056,139,1152,106.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg> */}
                    <svg className={styles["advertisement__wave-svg"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className={styles["path"]} /*fill="#f0bfff51"*/ fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,218.7C384,235,480,277
                            ,576,261.3C672,245,768,171,864,165.3C960,160,1056,224,1152,240C1248,256,1344,224,1392,208L1440
                            ,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320
                            ,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg>
                </Box>
            </Box>

        </>
    )
}

export default Advertisement