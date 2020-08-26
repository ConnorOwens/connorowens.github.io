import React from 'react';
import logo from './logo.svg';
import './links.css';
import './font.css';
import Button from 'react-bootstrap/Button';

function Links() {
  return(
    <div className="links_body">
      <p className="heading_text">
        Links
      </p>
      <Button className="link_button" href="https://github.com/ConnorOwens" variant="outline-success"><p>GitHub</p> <img className="link_picture" src="GitHub.png"/></Button>
      <Button className="link_button" href="https://www.linkedin.com/in/ConnorGOwens/" variant="outline-success"><p>LinkedIn</p> <img className="link_picture" src="linkedin.png"/></Button>
      <Button className="link_button" href="http://localhost:3000/resume.pdf" variant="outline-success"><p>Resume</p> <img className="link_picture" src="resume.png"/></Button>
      <Button className="link_button" href="mailto:owensconnor1@gmail.com" variant="outline-success"><p>Email</p> <img className="link_picture" src="email.png"/></Button>
    </div>
  )
}

export default Links;
