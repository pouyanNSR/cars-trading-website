import SearchBox from "./innerComponents/SearchBox";
import { Typography, Box } from "@mui/material";
import city from "../assets/chicago.jpg";
import MainContext from "../context"
import { useContext } from "react";

const LandingPage = () => {
    const {mode} = useContext(MainContext)
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          position:
            "relative" /*background:`linear-gradient(rgba(190, 22, 200, 0.2),rgba(0, 0, 0, 0.4)) ,url(${city}) center/cover`*/,
        }}
      >
        <Box
          component="img"
          src={city}
          alt="city"
          width="100%"
          height="100%"
          sx={{
            objectFit: "cover",
            filter: mode === "dark" ? "brightness(30%) saturate(1.7)" : "saturate(1.7)",
          }}
        />
        <SearchBox />
      </Box>
    </>
  );
};

export default LandingPage;
