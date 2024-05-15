import React, { useEffect } from "react";
import PageTransition from "../components/PageTransition.jsx";
import "./responsive/ContactPage.css";
import { Circle } from "../components/Circle.jsx";

import { ContactForm } from "../components/ContactForm.jsx";

const ContactPage = () => {


  useEffect(() => {
    const contact = document.getElementById("contact");
    const circle = document.getElementById("circle");
    setTimeout(() => {
      contact.classList.remove("opacity-0");
      contact.classList.add("fade-up-contact");
      circle.classList.remove("circle-display");
    }, 600);
  }, []);
  

  return (
    <div className="relative overflow-y-auto">
      <div className="bg-gray-950 h-screen">
        <Circle />
        <div id="contact" className="contact opacity-0 scale-90">
          <div className="textContainer  select-none">
            <h1 className="font-sans text-8xl font-extralight text-white text-pretty">
              Get in <br /> <h1 className="font-semibold">contact.</h1>
            </h1>
            <div className="item">
              <h2 className="text-2xl font-semibold text-gray-200 text-pretty">
                Inquiries
              </h2>
              <span className="span text-sm font-light text-gray-400 text-pretty">
                inquiries@whoishlk.dev
              </span>
            </div>
            <div className="item">
              <h2 className="text-2xl font-semibold text-gray-200 text-pretty">
                Phone
              </h2>
              <span className="span text-sm font-light text-gray-400 text-pretty">
                +1 (813) 408 0696
              </span>
            </div>
            <div className="item">
              <h2 className="text-2xl font-semibold text-gray-200 text-pretty">
                Location
              </h2>
              <span className="span text-sm font-light text-gray-400 text-pretty">
                Tampa FL, United States
              </span>
            </div>
          </div>
          <div id="contactForm" className="formContainer z-1 mt-16 relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition(ContactPage);
