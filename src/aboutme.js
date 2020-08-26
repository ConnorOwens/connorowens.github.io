import React from 'react';
import logo from './logo.svg';
import './aboutme.css';
import './font.css';


function AboutMe() {
  const actualInnerWidth = document.body.clientWidth;
  return (
    <div className="aboutme_body">
      <p className="heading_text">
        About Me
      </p>
      <p className="body_text">
        I am a third-year Computer Engineering student at California Polytechnic State University, San Luis Obispo planning to graduate in June of 2022.
        I currently have a GPA of 3.578 and am in the process of earning a Bachelor of Science in Computer Engineering.
      </p>
    </div>
  )
}

export default AboutMe;
