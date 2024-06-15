import React from "react";
import Navbar from "../components/Navbar";
import Sports from "../components/Sports";
import Footer from "./../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Designer = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <Sports />
      <Footer />
    </div>
  );
};

export default Designer;
