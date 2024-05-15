import React from 'react'
import linkedinLogo from "../assets/linkedin-icon.png" 
import githubLogo from "../assets/github-icon.png" 


export const Socials = () => {
    return (
      <div id="socials" className="socials socialHover">
        <a id="linkedin" href="https://www.linkedin.com/in/hamza-al-kurdi" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="social-icon-linkedin hover:socialHover" />
        </a>
        <a id="github" href="https://github.com/hkurdi" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-icon-github hover:socialHover" />
        </a>
      </div>
    );
  }

