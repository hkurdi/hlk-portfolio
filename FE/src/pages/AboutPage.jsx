import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { debounce } from "lodash";

import PageTransition from "../components/PageTransition";
import ProfilePicture from "../assets/about.jpg";

import { HLKButton } from "../components/HLKButton";
import { Circle } from "../components/Circle";
import { ProgressBar } from "../components/ProgressBar";
import { skills, experiences } from "../constants";

import "./responsive/AboutPage.css";
import "react-vertical-timeline-component/style.min.css";
import "aos/dist/aos.css";

const AboutPage = () => {
  const [snapSettings, setSnapSettings] = useState(true);
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const endRef = useRef(null);
  const lastScrollTopRef = useRef(0);
  const [hasSnappedToEndRef, setHasSnappedToEndRef] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 900, once: false, mirror: true });
    const about = document.getElementById("about");
    const circle = document.getElementById("circle");
    setTimeout(() => {
      about.classList.remove("opacity-0");
      about.classList.add("fade-up");
      circle.classList.remove("circle-display");
    }, 600);
  }, []);

  const handleResumeClick = () => {
    const resumeUrl = "/Hamza L. Kurdi 2024 Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Hamza L. Kurdi 2024 Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let animationFrameId = null;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      lastScrollTopRef.current = currentScrollPosition;

      const getDistanceFromTop = (ref) =>
        ref.current
          ? Math.abs(ref.current.offsetTop - window.scrollY)
          : Infinity;
      const topDistance = getDistanceFromTop(topRef);
      const middleDistance = getDistanceFromTop(middleRef);
      const endDistance = getDistanceFromTop(endRef);

      const closestRef = (() => {
        if (topDistance < middleDistance && topDistance < endDistance)
          return topRef;
        else if (middleDistance < topDistance && middleDistance < endDistance)
          return middleRef;
        else return endRef;
      })();

      const isInView =
        closestRef.current.offsetTop >= window.scrollY &&
        closestRef.current.offsetTop + closestRef.current.offsetHeight <=
          window.scrollY + window.innerHeight;
      const hasScrolledAwayFromEndRef =
        endRef.current &&
        window.scrollY < endRef.current.offsetTop - window.innerHeight;

      const isBelowEndRef =
        endRef.current && window.scrollY > endRef.current.offsetTop;

      if (hasScrolledAwayFromEndRef || isBelowEndRef)
        setHasSnappedToEndRef(false);

      if (
        !hasSnappedToEndRef &&
        closestRef.current === endRef.current &&
        !isInView
      ) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          closestRef.current.scrollIntoView({ behavior: "smooth" });
          setHasSnappedToEndRef(true);
        });
      } else if (!isInView && closestRef.current !== endRef.current) {
        closestRef.current.scrollIntoView({ behavior: "smooth" });
      }

      setSnapSettings(
        !(
          closestRef.current === endRef.current &&
          hasSnappedToEndRef &&
          window.scrollY >= closestRef.current.offsetTop
        )
      );
    };

    const debouncedHandleScroll = debounce(handleScroll, 90);
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [topRef, middleRef, endRef, hasSnappedToEndRef]);

  useEffect(() => {
    document.body.style.overflowY = "hidden"; // Disable vertical scrolling
    return () => {
      document.body.style.overflowY = "auto"; // Re-enable vertical scrolling when unmounting
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory relative bg-gray-950" id="aboutpage">
      <ProgressBar />
      <div
        ref={topRef}
        className={`bg-gray-950 h-screen flex justify-center items-center select-none scrollsection ${
          snapSettings ? "snap-enabled" : ""
        }`}
        id="top"
      >
        <Circle />
        <div
          id="about"
          className="z-1 max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 opacity-0"
        >
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              About.
            </h2>
          </div>
          <div className="z-1 grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10 select-none pb-11">
            <section id="hello">
              <h3 className="text-xl font-medium text-white text-pretty font-sans">
                Hello! I'm Hamza Kurdi.
              </h3>
              <p className="mt-4 text-lg font-sans text-gray-300 font-light text-pretty">
                My journey in the tech world started at a young age, fueled by a
                curiosity to understand how things work. Over the years, I have
                found immense joy in crafting elegant solutions to complex
                problems, all the while infusing elements of my personality
                wherever an opportunity arises, ensuring my distinct mark is
                left behind.
              </p>
              <p className="mt-4 text-lg font-sans text-gray-300 font-light text-pretty">
                Beyond coding, I'm a proud Jordanian-Palestinian with a global
                perspective. My cultural background shapes my worldview, and I'm
                always eager to learn from different cultures and experiences.
              </p>

              <h3 className="mt-8 text-xl font-medium font-sans text-white text-pretty">
                Who are you outside of work?{" "}
                <span className="italic text-gray-200 text-base font-light opacity-80">
                  You may ask.
                </span>
              </h3>
              <p className="mt-4 text-lg font-sans text-gray-300 font-light text-pretty">
                When I'm not immersed in technology, you'll find me expressing
                my creativity through music production, hitting the gym, or
                exploring the great outdoors. I'm excited to see where my
                journey takes me next, and I'm always open to new opportunities
                and adventures.
              </p>
              <h3 className="absolute mt-6 text-xl font-light text-gray-50 text-pretty whitespace-nowrap">
                Let's explore the endless sea of possibilities{" "}
                <span className="font-semibold animate-pulse text-white">
                  together.
                </span>
              </h3>
              <h3 className="secondPart absolute mt-6 text-xl font-light text-gray-50 text-pretty whitespace-nowrap">
                Let's explore the endless sea of possibilities
              </h3>
              <h3 className="opacity-10 absolute mt-6 text-xl font-light text-#6babff text-pretty whitespace-nowrap">
                Let's explore the endless sea of possibilities
              </h3>
            </section>
            <div className="flex flex-col items-center">
              <img
                id="profilepic"
                className="rounded-full w-full mx-auto sm:max-w-xs glow-white"
                src={ProfilePicture}
                alt=""
              />
              <p className="text-gray-300 font-sans text-pretty font-thin mt-7 relative flex text-xs">
                {" "}
                My resume is available for download below.{" "}
              </p>
              <HLKButton
                id="resumebutton"
                text={"Resume"}
                style={"mt-5 w-40 h-10 rounded-full"}
                onClick={handleResumeClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={middleRef}
        className={`w-full h-screen bg-gray-950 scrollsection ${
          snapSettings ? "snap-enabled" : ""
        }`}
        id="middle"
      >
        <section>
          <div className="py-20 flex flex-col">
            <h3
              className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight text-center items-center select-none"
              data-aos="zoom-in-up"
            >
              Skills.
            </h3>
            <div className="text-center items-center justify-center mt-9 select-none">
              <p
                data-aos="zoom-in-up"
                className="text-sm text-gray-400 text-pretty"
              >
                Below you will find the multiple industry-standard technical
                skills I possess, enabling me to take on multiple roles and
                excel in various projects.
              </p>
            </div>
            <div
              id="icons-container"
              className="mt-16 flex flex-wrap gap-12 justify-center text-center"
              data-aos="zoom-in-down"
            >
              {skills.map((skill) => (
                <div
                  id="icons"
                  className="block-container w-28 h-28 items-center"
                  key={skill.name}
                >
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain image"
                    />
                    <span className="text-center font-light text-white text-pretty w-1/2 h-1/2 object-contain items-center text">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div
        ref={endRef}
        className={`w-full min-h-screen bg-gray-950 flex justify-center items-center scrollsection ${
          snapSettings ? "snap-enabled" : ""
        }`}
        id="end"
      >
        <section
          className="flex flex-col items-center w-full py-20"
          id="experience"
        >
          <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight text-center mb-10">
            Experience.
          </h3>
          <VerticalTimeline layout="2-columns" className="select-none">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg, color: "#fff" }}
                contentStyle={{ background: "transparent", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  transparent" }}
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold text-white">
                  {experience.title}
                </h3>
                <p className="font-medium text-white">
                  {experience.company_name}
                </p>
                <ul className="list-disc space-y-2">
                  {experience.points.map((point, idx) => (
                    <li key={idx} className="text-white text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>
      </div>
    </div>
  );
};

export default PageTransition(AboutPage);
