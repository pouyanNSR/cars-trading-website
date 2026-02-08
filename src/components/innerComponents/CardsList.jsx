import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import {carsList} from "../../data/carsList"

const CardsList = () => {
  return (
    <>
      {carsList.map((car) => (
        <Card
          key={car.id}
          sx={{
            width: "100%",
            display: "flex",
            p: 2,
            alignItems: "center",
            direction: "rtl",
            borderRadius: 0,
            border: "0.2px solid rgba(0, 0, 0, 0.15)",
            background: "linear-gradient(rgba(255, 255, 255, 1)",
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
                {car.title}
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
                  {car.numberOfTime}
                </Typography>
                <Typography fontSize="12px" fontFamily="shabnam">
                  {car.periodOfTime}
                </Typography>
                <Typography fontSize="12px" fontFamily="shabnam">
                  پیش
                </Typography>
              </Box>
            </Box>

            <Typography
              fontFamily="shabnam"
              color="text.secondary"
              fontSize={14}
              mt={1}
            >
              {car.producingYear} • {car.ditance} کیلومتر
            </Typography>

            <Typography
              fontSize={14}
              fontWeight={800}
              fontFamily="shabnam"
              color="rgba(70, 164, 247, 0.7)"
              mt={0.5}
            >
              {car.view} بازدید
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              mt={0.5}
            >
              <Typography fontFamily="shabnam" color="text.secondary">
                {car.location}
              </Typography>
              <Typography fontFamily="shabnam" fontWeight="bold">
                {car.price} {car.price === "توافقی" ? null : "تومان"}
              </Typography>
            </Box>
          </CardContent>

          {car.img ? (
            <CardMedia
              component="img"
              image={car.img}
              alt={car.title}
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
