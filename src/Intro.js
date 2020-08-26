import React from 'react';
import logo from './logo.svg';
import './Intro.css'

function Intro() {
  const actualInnerWidth = document.body.clientWidth;
  return (
    <div className="intro_body">
      <div className="name_div">
        <p className="name"> Connor Owens</p>
      </div>
      <div className="profile_div">
        <img className="profile_pic" src="profile_pic.jpg" alt="Picture of Connor Owens"/>
      </div>
      <img src="cal_poly_background.jpg" alt="Cal Poly Campus" width="100%" margin="0"/>
      <div className="connor_info">
        <p className="heading_2">Computer Engineering Student</p>

        <img className="cal_poly_logo" src="cal_poly_logo.png" alt="Cal Poly"/>
      </div>
    </div>
  )
}

export default Intro;
