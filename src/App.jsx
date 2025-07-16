import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import { Routes, Route, Router } from "react-router-dom";
import ProjectSection from "./sections/ProjectSection";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
