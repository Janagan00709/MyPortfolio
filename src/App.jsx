import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Projects from "./components/Projects/Photography";
import Certificate from "./components/Certificate/Certificate";
import Particles from "./components/Particles/Particles";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get saved theme or use dark as default
    const savedTheme = localStorage.getItem("selectedTheme");
    const currentTheme = savedTheme || "dark";

    // Always apply the theme to <html>
    document.documentElement.setAttribute("data-theme", currentTheme);
    setIsDarkMode(currentTheme === "dark");

    // Observe for theme changes in case of toggle
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(newTheme === "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {isDarkMode && (
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      )}

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Certificate />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
