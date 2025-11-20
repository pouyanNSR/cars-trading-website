import SearchBox from "./SearchBox"
import { Typography, Button, Box, Grid } from "@mui/material"
import city from "../assets/chicago.jpg"
import { useState } from 'react'


const LandingPage = () => {

    return (
        <>
            <div style={{ display:"flex",justifyContent:"center",
            alignItems:"center",width: "100%", height: "100vh",
            position:"relative",/*background:`linear-gradient(rgba(190, 22, 200, 0.2),rgba(0, 0, 0, 0.4)) ,url(${city}) center/cover`*/}}>
                <img src={city} alt="aks" width="100%" height="100%" style={{ objectFit: "cover",filter:"saturate(1.7)"}} />
                <SearchBox/>
            </div>
        </>
    )
}

export default LandingPage