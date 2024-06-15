import React from "react";
import NavbarHomepage from "../components/NavbarHomepage";
import LandingPage from "../components/LandingPage";
import ListAplikasi from "../components/ListAplikasi";
import About from "../components/About";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <NavbarHomepage />
      <LandingPage />
      <ListAplikasi/>
      <About/>
      <Footer/>
    </>
  );
}

export default Homepage;

