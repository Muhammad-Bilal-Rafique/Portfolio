import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/HeroSection";
import CaseStudy from "./components/CaseStudy";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import SpeedStat from "./components/SpeedStat";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <TechStack />
    <SpeedStat />
    <CaseStudy />
    <Footer/>
    </>
  );
}
