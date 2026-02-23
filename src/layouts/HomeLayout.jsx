import { Grid } from "@mui/material";
import React from "react";
import LandingPage from "../components/LandingPage";
import SpecialPost from "../components/SpecialPost";
import Advertisement from "../components/Advertisement";
import LastPost from "../components/LastPost";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import ContentLayer from "./ContentLayer";

const HomeLayout = () => {
  return (
    <>
      <LandingPage />
      <ContentLayer/>
      <Footer />
    </>
  );
};

export default HomeLayout;
