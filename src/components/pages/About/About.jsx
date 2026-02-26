import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "motion/react";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const About = () => {
  const aboutContent = [
    {
      title: "ماموریت ما",
      text: "ایجاد بستری امن، سریع و مدرن برای خرید و فروش خودرو با بهترین تجربه کاربری.",
    },
    {
      title: "چشم‌انداز ما",
      text: "تبدیل شدن به هوشمندترین پلتفرم خودرویی با استفاده از تکنولوژی‌های روز.",
    },
    {
      title: "چرا ما؟",
      text: "طراحی مدرن، امنیت بالا، رابط کاربری جذاب و تجربه‌ای متفاوت.",
    },
  ];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        // background: "linear-gradient(135deg, #00c9a7, #a044ff)",
        background: "linear-gradient(135deg, #00dc96, #942dfb)",
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effect */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3), transparent)",
          filter: "blur(100px)",
        }}
      />

      <Container maxWidth="lg">
        {/* Title Section */}
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={5}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            // sx={{
            //   color: "#fff",
            //   textShadow: "0 0 20px rgba(255,255,255,0.6)",
            // }}
            sx={{
              color: " var(--titr-text-color)",
              textShadow: "var(--titr-text-shadow)",
              // boxShadow:"0 0 42px rgb(235, 207, 194),0 0 13px inset rgb(253, 243, 238)",
              boxShadow:"0 0 13px inset rgb(253, 243, 238)",

              // background: "rgb(255, 86, 48)",
              // background: "linear-gradient(-135deg, #ffffff, #000000)",
              background: "rgba(255, 48, 241, 0.53)",
              width: "max-content",
              margin: "15px auto",
              borderRadius: "var(--titr-border-radius)",
              textAlign: "center",
              padding:"10px 60px",
            }}
          >
            درباره KhodroBaz
          </Typography>

          <Typography
            variant="h6"
            sx={{ mt: 5,
              color: "rgba(255,255,255,0.8)",
              color: "rgb(171, 255, 224)",
              fontWeight:600,
              fontSize:26,
              textDecoration:"underline",
              textDecorationColor:"rgb(222, 179, 255)",
              textUnderlineOffset:"2px",
              textShadow:" 0 0 3px rgb(171, 255, 224)"
            }}
          >
            جایی برای خرید و فروش هوشمند خودرو
          </Typography>
        </MotionBox>

        {/* Mission Section */}
        <Grid container spacing={4}>
          {aboutContent.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                sx={{
                  backdropFilter: "blur(15px)",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" mb={2}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.text}</Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {/* Team Section */}
        <MotionBox
          mt={8}
          textAlign="center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#fff", mb: 4 }}
          >
            تیم ما
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            ما تیمی از توسعه‌دهندگان خلاق و علاقه‌مند به تکنولوژی هستیم که
            هدفمان ساخت تجربه‌ای متفاوت در بازار خودرو است.
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About;
