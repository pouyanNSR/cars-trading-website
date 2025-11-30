import {Box, Tooltip, Fab } from "@mui/material";

import { ArrowUpwardRounded, BedtimeRounded, Chat, Phone, Settings, WbSunnyRounded } from "@mui/icons-material";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import { useState } from "react";

const ToolTip = () => {
    const [light,setLight] = useState(true)

    const handleTheme = () =>{
        setLight( e => !e)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 16,
                left: 16,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                zIndex: 1300,
            }}
        >
            {/* SpeedDial above */}
            <SpeedDial
                sx={{
                    "& .muirtl-18xeboq-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab": {
                        backgroundColor: "rgba(255,255,255,0.3)"
                    },
                    "& .muirtl-18xeboq-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab:hover": {
                        backgroundColor: "rgba(255,255,255)",
                    }
                }}
                ariaLabel="Quick actions"
                icon={<SpeedDialIcon />}
                direction="up"
            >
                <SpeedDialAction
                    sx={{ backgroundColor: "green", color: "whitesmoke","&:hover":{backgroundColor:"rgba(0,0,0,0.9)"} }}
                    icon={<Phone />}
                    tooltipTitle="تماس با ما"
                // onClick={}
                />
                <SpeedDialAction
                    sx={{ backgroundColor: light ? "whitesmoke" : "black" ,"&:hover":{backgroundColor:"rgba(0,10,40,0.9)"}}}
                    icon={light ? <WbSunnyRounded sx={{color:"orange"}} /> : <BedtimeRounded  sx={{color:"whitesmoke"}}  /> }
                    tooltipTitle="تغییر تم"
                    onClick={handleTheme}
                />
                <SpeedDialAction
                    sx={{ backgroundColor: "grey", color: "whitesmoke","&:hover":{backgroundColor:"rgba(200,10,20,0.9)"} }}
                    icon={<Settings />}
                    tooltipTitle="تنظیمات"
                // onClick={}
                />
            </SpeedDial>

            {/* Scroll-to-top FAB below */}
            <Tooltip title="بالا رفتن" placement="left">
                <Fab
                    sx={{
                        backgroundColor: "#ff9706", color: "aliceblue", "&.MuiFab-root:hover": {
                            color: "#212323"
                        }
                    }}
                    aria-label="scroll-top"
                    onClick={scrollToTop}
                >
                    <ArrowUpwardRounded />
                </Fab>
            </Tooltip>
        </Box>
    )
}

export default ToolTip