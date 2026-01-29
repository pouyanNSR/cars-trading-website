
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
} from "@mui/icons-material";
import { motion } from "motion/react";



import styles from "../styledModule/Footer.module.css"


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Box component="footer" className={styles["footer-root"]} dir="rtl" aria-label="پاورقی سایت">
            <Container maxWidth="lg">
                <Box className={styles["footer-glass"]}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" className={styles["footer-title"]}>
                                درباره ما
                            </Typography>
                            <Typography variant="body2" className={styles["footer-text"]}>
                                ما به دنبال ایجاد واسطه‌ای سالم و مستقیم بین خریدار و مشتری هستیم تا لذت انتخابی مطمئن را
                                برای شما به ارمغان آوریم.
                            </Typography>
                            <Box mt={2} sx={{display:"flex",gap:"5px"}}>
                                <IconButton aria-label="ایمیل" className={styles["footer-icon"]}>
                                    <Email />
                                </IconButton>
                                <IconButton aria-label="اینستاگرام" className={`${styles["footer-icon"]} ${styles["instagram"]}`}>
                                    <Instagram />
                                </IconButton>
                                <IconButton aria-label="توییتر" className={styles["footer-icon"]}>
                                    <Twitter />
                                </IconButton>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" className={styles["footer-title"]}>
                                لینک های مفید
                            </Typography>
                            <Box className={styles["footer-links"]}>
                                <Link href="#">صفحه اصلی</Link>
                                <Link href="#">همه‌ی آگهی ها</Link>
                                <Link href="#">ویژه ها</Link>
                                <Link href="#">تماس با ما</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" className={styles["footer-title"]}>
                                تماس سریع
                            </Typography>
                            <Typography variant="body2" className={styles["footer-text"]}>
                                تهران، ایران
                                <br />
                                ایمیل: <Link href="mailto:hello@example.com">hello@example.com</Link>
                                <br />
                                تلفن: <Link dir="ltr" href="tel:+982112345678">+98 21 1234 5678</Link>
                            </Typography>
                            <Box mt={2}  sx={{display:"flex",gap:"5px"}} className="footer-social">
                                <IconButton aria-label="فیسبوک" className={styles["footer-icon"]}>
                                    <Facebook />
                                </IconButton>
                                <IconButton aria-label="لینکدین" className={styles["footer-icon"]}>
                                    <LinkedIn />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider className={styles["footer-divider"]} />

                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography variant="caption" className={styles["footer-caption"]}>
                                © {year} حقوق برای سایت محفوظ است.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" className={styles["footer-caption"]}>
                                طراحی و توسعه با پویان نصیری
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer