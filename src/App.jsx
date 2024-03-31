// import {Navbar, Hero, TechStack,About } from "./components/exportComponents";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import TechStack from "./components/TechStack/TechStack";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="max-h-full">
      <Navbar />
      <Hero />
      <TechStack />
      <About id={"about"} />
      <Projects id={"projects"} />
      <Contact id={"contact"} />
      <Footer />
    </div>
  );
}
