import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MobilePage from "./pages/MobilePage";


import NavBar from "./components/NavBar";
import ProjectsPage from "./pages/ProjectsPage";


export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const dimensions = getWindowDimensions();
    if(dimensions.width <= 768) {
      navigate('/mobile');      
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 0) {
        window.scrollTo(0, 0);
      }
    };

    if (
      location.pathname != "/" &&
      location.pathname != "/about" &&
      location.pathname != "/contact" &&
      location.pathname != "/projects" &&
      location.pathname != "/mobile"
    ) {
      navigate("/");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, navigate]);

  return (
      <>
        <NavBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mobile" element={<MobilePage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </AnimatePresence>
      </>
  );
};

export default App;
