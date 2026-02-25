import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { postsInfo } from "../../../data/postsInfo";
import MainContext from "../../../context";
import { useContext } from "react";

const CardsList = () => {
  const { filteredPosts } = useContext(MainContext);

  const setFormattedPrice = (price) => {
    return new Intl.NumberFormat().format(price);
  };

  return (
    <>
      {filteredPosts.map((post) => (
        <Card
          key={post.id}
          sx={{
            width: "100%",
            display: "flex",
            p: 2,
            alignItems: "center",
            direction: "rtl",
            borderRadius: 0,
            border: "0.2px solid rgba(0, 0, 0, 0.15)",
            backgroundColor:"background.cards",
            // background: "linear-gradient(rgba(255, 255, 255, 1))",
            transition:"background 0.1s ease",
            "&:hover": {
              background: "linear-gradient(to right,rgb(190, 255, 200),rgb(254, 171, 228))",
              borderRight:"2px solid rgb(198, 6, 137)",
              perspective:1500,
              boxShadow:"0 0 12px 1px inset rgb(42, 25, 37)",
              color:"rgb(31, 28, 30)"
            },
            "&:hover .year-distance-info": {
              color:"rgb(46, 45, 46)"
            },
            "&:hover .location": {
              color:"rgb(32, 27, 30)"
            }
          }}
        >
          {/* Text section */}
          <CardContent
            fontFamily="shabnam"
            sx={{
              flex: "0 0 70%",
              display: "flex",
              flexDirection: "column",
              direction: "ltr",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontFamily="shabnam" variant="h6">
                {post.title}
              </Typography>
              <Box
                sx={{
                  color: "aliceblue",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  fontSize: "12px",
                  border: "1px solid rgba(65, 68, 56, 0.11)",
                  borderRadius: "15px",
                  padding: "5px 7px",
                  background: "rgba(237, 14, 55, 0.82)",
                }}
              >
                <Typography fontSize="12px" fontFamily="shabnam">
                  {post.numberOfTime}
                </Typography>
                <Typography fontSize="12px" fontFamily="shabnam">
                  {post.periodOfTime}
                </Typography>
                <Typography fontSize="12px" fontFamily="shabnam">
                  پیش
                </Typography>
              </Box>
            </Box>

            <Typography
              fontFamily="shabnam"
              color="text.secondary"
              className="year-distance-info"
              fontSize={14}
              mt={1}
            >
              {post.producingYear} • {post.ditance} کیلومتر
            </Typography>

            <Typography
              fontSize={14}
              fontWeight={800}
              fontFamily="shabnam"
              color="rgba(70, 164, 247, 0.7)"
              mt={0.5}
            >
              {post.view} بازدید
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              mt={0.5}
            >
              <Typography fontFamily="shabnam" color="text.secondary" className="location">
                {post.location}
              </Typography>
              <Typography fontFamily="shabnam" fontWeight="bold">
                {post.price === "توافقی"
                  ? post.price
                  : setFormattedPrice(post.price)}{" "}
                {post.price === "توافقی" ? null : "تومان"}
              </Typography>
            </Box>
          </CardContent>

          {post.img ? (
            <CardMedia
              component="img"
              image={post.img}
              alt={post.title}
              sx={{
                opacity: "0.9",
                width: 160,
                height: "130px",
                borderRadius: 1,
                objectFit: "cover",
                flex: "0 0 30%",
              }}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: 140,
                borderRadius: 1,
                bgcolor: "#f1f1f1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#bbb",
                fontSize: 14,
              }}
            >
              بدون تصویر
            </Box>
          )}
        </Card>
      ))}
    </>
  );
};

export default CardsList;
