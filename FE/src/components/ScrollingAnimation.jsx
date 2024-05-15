import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export const ScrollingAnimation = ({ children }) => {
  return (
<ReactLenis
  root
  options={{
    lerp: 0.1,          // This is the linear interpolation value, a higher value can make the scrolling smoother
    smooth: true,       // Ensures that the scrolling is smooth
    smoothTouch: true,  // Enables smooth scrolling for touch devices
    duration: 1.5,      // Duration of the scroll animation
    multiplier: 1.2,    // Adjusts the scroll speed; a lower value may result in smoother scrolling
    firefoxMultiplier: 50, // Adjusts the scroll sensitivity specifically for Firefox
    touchMultiplier: 2 // Adjusts how much the scroll wheel affects scrolling, higher for more "glide"
  }}
>
  {children}
</ReactLenis>

  );
};
