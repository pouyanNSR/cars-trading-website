import { Box } from "@mui/material"
import CarsListPage from "./CarsListPage"


const CarsListPageContainer = () => {

  return (
    <Box sx={{backgroundColor:"background.carsPage",
      minHeight:"100vh",paddingTop:"30px"}}>
      <CarsListPage/>
    </Box>
  )
}

export default CarsListPageContainer