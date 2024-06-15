import AboutFive from "../components/AboutFive";
import AboutFour from "../components/AboutFour";
import AboutOne from "../components/AboutOne";
import AboutThree from "../components/AboutThree";
import AboutTwo from "../components/AboutTwo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "./../components/ScrollToTop";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutOne />
      <ScrollToTop />
      <AboutTwo />
      <AboutFour />
      <AboutThree />
      <AboutFive />
      <Footer />
    </div>
  );
};

export default About;
