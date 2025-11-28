import { Typography, Button, Box, Grid, Tooltip, Fab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { createTheme } from "@mui/material/styles";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SpecialPost from "./components/SpecialPost";
import { useEffect, useRef, useState } from "react";
import Advertisement from "./components/Advertisement";
import { ArrowUpwardRounded, Chat, Phone, Settings } from "@mui/icons-material";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import LastPost from "./components/LastPost";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
  typography: {
    fontFamily: "vazir,tanha"
  },
});

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
  // const actions = [
  //   { icon: <FileCopyIcon />, name: "Copy" },
  //   { icon: <SaveIcon />, name: "Save" },
  //   { icon: <PrintIcon />, name: "Print" },
  //   { icon: <ShareIcon />, name: "Share" },
  // ];

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>KhodroBaz</title>
          </Helmet>
          {/* <Box
            sx={{
              position: "fixed",
              bottom: 16,
              left: 16,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              zIndex: 1300, // ensures it stays above other elements
            }}
          >
            <Tooltip title="Contact Us" placement="left">
              <Fab size="small" color="primary" aria-label="contact">
                <Phone/>
              </Fab>
            </Tooltip>

            <Tooltip title="Live Chat" placement="left">
              <Fab size="small" color="secondary" aria-label="chat">
                <Chat />
              </Fab>
            </Tooltip>

            <Tooltip title="Scroll to Top" placement="left">
              <Fab  size="small"
                color="default"
                aria-label="scroll-top"
                onClick={scrollToTop}
              >
                <ArrowUpwardRounded />
              </Fab>
            </Tooltip>
          </Box> */}
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
              sx={{"& .muirtl-18xeboq-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab":{
                backgroundColor:"rgba(255,255,255,0.3)"
              },
              "& .muirtl-18xeboq-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab:hover":{
                backgroundColor:"rgba(255,255,255)",
              }
              }}
              ariaLabel="Quick actions"
              icon={<SpeedDialIcon />}
              direction="up"
            >
              <SpeedDialAction
                sx={{backgroundColor:"green",color:"whitesmoke"}} 
                icon={<Phone/>}
                tooltipTitle="Contact"
                // onClick={}
              />
              <SpeedDialAction
                sx={{backgroundColor:"blue",color:"whitesmoke"}} 
                icon={<Chat />}
                tooltipTitle="Chat"
                // onClick={}
              />
              <SpeedDialAction
                sx={{backgroundColor:"grey",color:"whitesmoke"}} 
                icon={<Settings />}
                tooltipTitle="Settings"
                // onClick={}
              />
            </SpeedDial>

            {/* Scroll-to-top FAB below */}
            <Tooltip title="Go to Top" placement="left">
              <Fab
                sx={{backgroundColor:"#ff9706",color:"aliceblue","&.MuiFab-root:hover":{
                  color:"#212323"
                }}}
                aria-label="scroll-top"
                onClick={scrollToTop}
              >
                <ArrowUpwardRounded />
              </Fab>
            </Tooltip>
          </Box>
          <Navbar />
          <LandingPage />
          <SpecialPost />
          <Advertisement />
          <LastPost/>
          <Companies/>
          <Footer/>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App;


// import React, { useEffect, useRef } from "react";
// import Typed from "typed.js";
// import { motion } from "motion/react"; // or "motion/react"

// export default function TypedHeroText() {
//   const typedRef = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedRef.current, {
//       strings: ["Frontend Developer", "React Specialist", "UI Architect"],
//       typeSpeed: 50,
//       backSpeed: 30,
//       backDelay: 1500,
//       loop: true,
//       showCursor: true,
//       cursorChar: "|",
//     });

//     return () => typed.destroy();
//   }, []);

//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       sx={{
//         fontSize: "2rem",
//         fontWeight: "bold",
//         textAlign: "center",
//         mt: 4,
//         color: "primary.main",
//       }}
//     >
//       <span ref={typedRef} />
//     </Box>
//   );
// }