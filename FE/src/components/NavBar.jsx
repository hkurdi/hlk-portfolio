import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./NavBar.css";

const NavBar = () => {
  const container = useRef();
  const tl = useRef();
  const currentYear = new Date().getFullYear();
  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(location.state?.navMenu);
  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const containerRef = container.current;

    const showNav = gsap
      .fromTo(
        containerRef,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
        }
      )
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      },
    });
  }, []);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const profilePic = document.getElementById("profilepic");
    const circle = document.getElementById("circle");
    const resumeButton = document.getElementById("resumebutton");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");


    if (location.pathname === "/") {
      setIsMenuOpen(false);
      nav.classList.add("hidden");
      nav.style.pointerEvents = "none";
    } else {
      nav.classList.remove("hidden");
      nav.style.pointerEvents = "auto";
    }
    if (profilePic || resumeButton) {
      if (location.pathname === "/") {
        profilePic.classList.add("display-none");
        about.classList.add("display-none");
        circle.classList.add("display-none");
        resumeButton.classList.add("display-none");
      } else {
        profilePic.classList.remove("display-none");
        about.classList.remove("display-none");
        circle.classList.remove("display-none");
        resumeButton.classList.remove("display-none");
      }
      const contactForm = document.getElementById("contactForm");
      if (contactForm) {
        if(location.pathname === "/") {
         contactForm.classList.add("opacity-0");
        } else {
         contactForm.classList.remove("opacity-0");
        }
      }
      if (projects) {
        if(location.pathname === "/") {
         projects.classList.add("opacity-0");
        } else {
         projects.classList.remove("opacity-0");
        }
      }
    }
    console.log(location.pathname);
  }, [location]);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: -0.77,
          ease: "power4.inOut",
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const handleHomeClick = () => {
    const contactSection = document.getElementById("contactForm");
    contactSection.classList.add("display-none");
    if (isMenuOpen) {
      tl.current.reverse();
      setTimeout(() => {
        navigate("/");
      }, 1770);
    }
  };

  const toggleMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("progressBar").classList.add("display-none");
  };

  return (
    <div className="menu-container select-none" id="nav" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link to="/">
            {" "}
            hlk.{" "}
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p> Menu </p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link onClick={handleHomeClick}> hlk. </Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p className="text-gray-950"> Close </p>
          </div>
        </div>
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p> &#x2715; </p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link to={link.path} id="links" className="menu-link">
                    {link.path === "/" ? (
                      <>
                        {link.label}
                      </>
                    ) : (
                      link.label
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a
                className="text-gray-950"
                href="https://www.linkedin.com/in/hamza-al-kurdi"
              >
                {" "}
                LinkedIn &#8599;{" "}
              </a>
              <a className="text-gray-950" href="https://www.github.com/hkurdi">
                {" "}
                GitHub &#8599;{" "}
              </a>
              <a
                className="text-gray-950"
                href="https://www.instagram.com/producedbyhlk"
              >
                {" "}
                Instagram &#8599;{" "}
              </a>
            </div>
            <div className="menu-info-col">
              <p>&copy; </p>
              <p className=""> hamza luay kurdi {currentYear}.</p>
            </div>
            <div className="menu-preview text-black">
              <a href="/sorry.jpg">surprise.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
