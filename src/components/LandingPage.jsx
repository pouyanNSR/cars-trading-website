import SearchBox from "./innerComponents/SearchBox";
import { Box } from "@mui/material";
import city from "../assets/chicago.jpg";
import MainContext from "../context";
import { useContext, useEffect, useRef } from "react";

const LandingPage = () => {
  const { mode } = useContext(MainContext);
  // useEffect(() => {
  // const handleScroll = () => {
  //   const scroll = window.scrollY;
  //   document.getElementById("hero").style.transform =`translateY(${1 - scroll / 2000})`;
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
 const heroRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const maxScroll = window.innerHeight * 0; // how much (....* 0)

    const update = () => {
      const scrollY = window.scrollY;
      const shrinkAmount = Math.min(scrollY, maxScroll);

      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(-${shrinkAmount}px)`;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        id="hero"
        component="div"
        ref={heroRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          // height: `${height}px`,
          transition: "transform 0.1s linear",
          position: "sticky",
          top: 0,
          zIndex:0,
          overflow:"hidden",
          willChange:"transform",
          transform:"translateZ(0)"
          /*background:`linear-gradient(rgba(190, 22, 200, 0.2),rgba(0, 0, 0, 0.4)) ,url(${city}) center/cover`*/
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
            filter:
              mode === "dark"
                ? "brightness(30%) saturate(1.7)"
                : "saturate(1.7)",
          }}
        />
        <SearchBox/>
      </Box>
    </>
  );
};

export default LandingPage;
