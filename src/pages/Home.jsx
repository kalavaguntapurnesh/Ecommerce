import Benefits from "../components/Benefits";
import Cycle from "../components/Cycle";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroDown from "../components/HeroDown";
import Navbar from "../components/Navbar";
import TeamWear from "../components/TeamWear";
import ScrollToTop from "../components/ScrollToTop";
import Steps from "../components/Steps";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollToTop />
      <HeroDown />
      <Cycle />
      <Benefits />
      <Steps />
      <TeamWear />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
