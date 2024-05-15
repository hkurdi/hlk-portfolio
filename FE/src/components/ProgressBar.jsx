import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ProgressBar = () => {
  const location = useLocation();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (docHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPercentage === 0) {
      document.getElementById("progressBar").classList.add("display-none");
    } else {
      document.getElementById("progressBar").classList.remove("display-none");
    }
  }, [scrollPercentage]);

  return (
    <div
      id="progressBar"
      className={`animate-pulsate opacity-100 transition-all duration-300 bg-gray-900 z-20 fixed top-0 right-0 left-0 ${
        !location.pathname === "/about" ? "hidden" : ""
      }`}
    >
      <div
        id="progressFill"
        className="h-1 bg-gradient-to-r from-gray-900 to-orange-500"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
