import { Box } from "@mui/material";
import CardsList from "../../innerComponents/CardsList";


const CarsList = () => {
  return (
    <Box
      sx={{
        width: "95%",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        direction:"rtl",
      }}
    >
      <CardsList/>
    </Box>
  );
};

export default CarsList;

