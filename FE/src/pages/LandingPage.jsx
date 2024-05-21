import React, { useState } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Socials } from "../components/Socials.jsx";
import Tile from "../components/Tile.jsx";
import { useNavigate } from "react-router-dom";


import './responsive/LandingPage.css'

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const comp = useRef(null);
  const navigate = useNavigate();

  const handleAbout = () => {
    setIsMenuOpen(!isMenuOpen);
    navigate("/about", { state: { navMenu: isMenuOpen } });
  };

  const handleProjects = () => {
    setIsMenuOpen(!isMenuOpen);
    navigate("/projects", { state: { navMenu: isMenuOpen } });
  };

  const handleContact = () => {
    setIsMenuOpen(!isMenuOpen);
    navigate("/contact", { state: { navMenu: isMenuOpen } });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#swe-text, #entre-text, #creative-text", {
          delay: 0.33,
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to("#swe-text, #entre-text, #creative-text", {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.0,
        })
        .from("#greetings, #socials, #nav, #tile", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  });

  return (
    <div className="relative" ref={comp}>
      <section className="absolute inset-0 z-0 w-full grid grid-cols-20 overflow-y-clip ">
        {Array.from(Array(20 * 12), (i) => (
          <Tile key={i} />
        ))}
      </section>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 w-full gap-10 flex flex-col font-sans font-semibold text-pretty text-gray-950 select-none tracking-tight"
      >
        <h1 id="swe-text" className="text-9xl">
          {" "}
          <span className="text-orange-600">H</span>amza{" "}
        </h1>
        <h1 id="entre-text" className="text-9xl">
          {" "}
          <span className="text-orange-600">L</span>uay{" "}
        </h1>
        <h1 id="creative-text" className="text-9xl">
          <span className="text-blue-600">K</span>urdi.
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <Socials />
        <h1
          id="greetings"
          className="greetings text-9xl font-bold text-pretty text-gray-50 select-none welcome"
        >
          welcome
          <span className="text-7xl italic text-orange-400"> to</span>
          <br />
          <span className="my"> my </span>
          <span className="text-4xl font-sans font-light tracking-wider cool">
            {" "}
            (hlk's)
          </span>
          <span className="text-9xl jomhuria-regular"> portfolio. </span>
          <div className="desc-container">
            <span className="desc opacity-70 font-light text-pretty flex-1 flex">
              {" "}
              software engineer.{" "}
              <span className="entrepreneur"> entrepreneur. </span>
              <span className="creative"> multidisciplinary creative. </span>
            </span>
          </div>
          <div id="home-nav" className="absolute bottom-56 z-0 homeNav home-nav">
            <button onClick={handleAbout} className="text-xl sedan-regular">
              {" "}
              about{" "}
            </button>
            <button onClick={handleProjects} className="text-xl sedan-regular">
              {" "}
              projects{" "}
            </button>
            <button onClick={handleContact} className="text-xl sedan-regular">
              {" "}
              contact{" "}
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
