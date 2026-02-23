import { Box, Grid } from "@mui/material";
import CarsList from "./CarsList";
import ToolsBar from "./ToolsBar";

const CarsListPage = () => {
  return (
    <Box sx={{ width: "76%", margin: "auto" }}>
      <Grid container columns={20} sx={{justifyContent:"space-between"}}>

        {/* ToolsBar - sticky */}
        <Grid
          item
          xs={20}
          md={6}
          lg={6}
          sx={{
            // paddingTop: "30px",
            position: "sticky",
            top: "100px", // cause we have a header
            alignSelf: "flex-start"
          }}
        >
          <ToolsBar />
        </Grid>

        <Grid
          item
          xs={20}
          md={13}
          lg={13}
          sx={{
            background: "rgba(189, 225, 197, 1)",
            direction: "rtl",
            border: "4px solid rgba(210, 255, 221, 1)",
            boxShadow: "0px 0px 17px 8px inset rgba(9, 47, 18, 0.69)",
            margin:"17px 0"
          }}
        >
          <CarsList />
        </Grid>

      </Grid>
    </Box>
  );
};

export default CarsListPage;
