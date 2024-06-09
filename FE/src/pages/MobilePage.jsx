import React, { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { getWindowDimensions } from "../App";
import { useNavigate } from "react-router-dom";
import { HLKButton } from "../components/HLKButton";

const MobilePage = () => {
  const dimensions = getWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    if (dimensions.width > 768) {
      navigate("/");
    }
  }, [dimensions, navigate]);

  const handleResumeClick = () => {
    const resumeUrl = "/Hamza L. Kurdi 2024 Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Hamza L. Kurdi 2024 Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col bg-gray-950 w-screen h-screen overflow-hidden select-none">
      <div className="flex flex-col items-center justify-center text-center w-full h-full p-4">
        <h1 className="font-sans text-white text-2xl md:text-3xl">
          Hamza Luay Kurdi
        </h1>
        <span className="font-thin text-gray-300 text-xs tracking-wide mb-4 md:text-sm">
          Software engineer, entrepreneur, & multidisciplinary creative.
        </span>
        <h1 className="font-bold font-sans text-pretty text-white mb-4 text-lg md:text-xl">
          Note:{" "}
          <span className="font-normal text-base md:text-lg">
            You are using a small screen / mobile, and my website requires a
            large screen to really enjoy it to the maximum, thus I limited
            mobile to either using it with 50% zoom on your respected browser,
            or just use a laptop, thanks.
            <br /> yours truly, <br />
          </span>
          HLK
        </h1>
        <HLKButton
          id="resumebutton-mobile"
          text={"Resume"}
          style={"mt-2 w-40 h-10 rounded-full"}
          onClick={handleResumeClick}
        />
      </div>
    </div>
  );
};

export default PageTransition(MobilePage);
