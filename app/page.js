import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/HeroSection";
import CaseStudy from "./components/CaseStudy";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <CaseStudy />
    <TechStack />
    <Footer/>
    </>
  );
}
