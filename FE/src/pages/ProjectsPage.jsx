import React, { useEffect } from "react";

import PageTransition from "../components/PageTransition";
import { ProjectCards } from "../components/ProjectCards";
import { Circle } from "../components/Circle";
import "./responsive/ProjectsPage.css";

const ProjectsPage = () => {
  useEffect(() => {
    const projects = document.getElementById("projects");
    const text = document.getElementById("projectsText");
    const text2 = document.getElementById("projectsDesc");
    const circle = document.getElementById("circle");
    setTimeout(() => {
      projects.classList.remove("opacity-0");
      projects.classList.add("fade-up");
      text.classList.remove("opacity-0");
      text.classList.add("fade-down");
      text2.classList.remove("opacity-0");
      text2.classList.add("fade-down");
      circle.classList.remove("circle-display");
    }, 600);
  }, []);

  return (
    <div className="relative">
      <div className="bg-gray-950 h-screen flex justify-center items-center flex-col">
      <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center select-none">
  <h1 className="text-5xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight opacity-0" id="projectsText">
    Projects.
  </h1>
  <p className="whitespace-nowrap text-sm text-gray-400 text-pretty py-4 opacity-0" id="projectsDesc">
  Welcome to my projects page. Here, you'll discover a curated selection of my recent endeavors, each showcasing unique capabilities and technologies.  </p>
</div>

        <Circle />
        <ProjectCards />
      </div>
    </div>
  );
};
export default PageTransition(ProjectsPage);
