import React, { useState, useEffect } from "react";

export const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = document.getElementById("circle");
      const rect = circle.getBoundingClientRect();
      const offsetX = rect.width / 2;
      const offsetY = rect.height / 2;
      const scrollX = document.documentElement.scrollLeft;
      const scrollY = document.documentElement.scrollTop;

      let adjustedY = e.clientY - offsetY + scrollY;


      // if (adjustedY >= 1200) {
      //   adjustedY = 1200;
      // }


      setPosition({
        x: e.clientX - offsetX + scrollX,
        y: adjustedY,
      });
    };

    const handleMouseLeave = () => {
      const circle = document.getElementById("circle");
      if (circle) {
        circle.style.display = "none";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="circle"
      className="circle-display z-0 opacity-10 blur-max absolute w-96 h-96 rounded-full"
      style={{
        left: position.x - 5,
        top: position.y - 5,
        background: "#0284c7",
      }}
    >
    </div>
  );
};
