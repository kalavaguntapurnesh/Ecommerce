import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EnquiryOne from "../components/EnquiryOne";
import ScrollToTop from "../components/ScrollToTop";

const BulkEnquiry = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <EnquiryOne />
      <Footer />
    </div>
  );
};

export default BulkEnquiry;
