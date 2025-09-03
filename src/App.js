import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// ✅ Removed Footer import to avoid error
import Footer from "./components/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✅ Fix for checkVersion bug
import "./App.css";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }
    };

    const addActive = () => cursor?.classList.add("active");
    const removeActive = () => cursor?.classList.remove("active");

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // ✅ tsparticles init
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async () => { };

  return (
    <>
      {/* custom cursor */}
      <div className="cursor"></div>

      {/* animated particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: ["#00ffff", "#ff00ff"] },
            links: {
              color: "#00ffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      {/* sections */}
      <Navbar />
      <AnimatePresence>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />  🚀 Uncomment later if you want a footer
      </AnimatePresence>
    </>
  );
}
// changes
export default App;
