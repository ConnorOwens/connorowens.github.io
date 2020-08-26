import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro.js'
import AboutMe from './aboutme.js'
import Links from './links.js'
import Skills from './skills.js'
import Projects from './projects.js'
import Coursework from './coursework.js'
import ContactMe from './contactme.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
      {/*
      <header className="App-header">
        <button className="drawer_button" type="button">
          <img src="drawer_icon.jpg" alt="Open Drawer" height="100%" width="100%"/>
        </button>
        <p className="header_text">
          Connor Owens - Computer Engineering Student at Cal Poly San Luis Obispo
        </p>
      </header>
      */}
        <Intro />
        <AboutMe />
        <Links />
        <Skills />
        <Projects />
        <Coursework />
      </div>
  );
}


function Home() {
  return (
    <body className="home_body">
      <ul className="home_content">
        <li>Contact me:</li>
          <ul>
            <li>owensconnor1@gmail.com</li>
            <li>cgowens@calpoly.edu</li>
            <li>425-281-0523</li>
          </ul>
        <li>
        <a href="http://localhost:3000/resume.pdf">My resume (PDF)</a></li>
        <li>About me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>
          <a href="https://github.com/ConnorOwens">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ConnorGOwens/">LinkedIn</a>
        </li>
      </ul>
    </body>
  )
}



function kills() {
  return (
    <body className="kills_body">
      <p>Skills</p>
      <p>Programming languages and tools:</p>
      <ul>
        <li>
        C
        <p>
        In CPE 357 I spent a whole quarter developing projects in C. These projects include a Mastermind-like game, a word counter, a Hash table, a program which finds the frequency of words, a fork and exec based pipeline, a C shell and an LZW compression algorithm. Through these projects, I gained an in depth knowledge on the C language including pointers, functions, and data types.
        </p>
        </li>
        <li>
        Java
        <p>
        Including IB SL and HL Computer Science as well as CPE 203, I have over 2 years of experience in Java. I have developed a multitude of projects including <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a>, a simulation of the heirarchy of how windows overlap in an operating system, a game called Slash and Summon and the <a href="https://en.wikipedia.org/wiki/A*_search_algorithm">A* pathing algorithm</a>. In addition, I used Java in Android studio to create a mobile game called Bomb Samurai. These projects have given me a deep understanding of object oriented programming including inheritance, interfacing and much more.
        </p>
        </li>
        <li>
        Python
        <p>
        Through CPE 101 and 202 I have almost a year of experience using python. I implemented a <a href="https://en.wikipedia.org/wiki/Huffman_coding">Huffman coding algorithm</a>, developed a Bejewled-like game and implemented many data structures myself.
        </p>
        </li>
        <li>
        HTML, CSS, JavaScript and React
        <p>
        I developed this website using my knowledge in these languages.
        </p>
        </li>
        <li>
        Vivado, SystemVerilog and Assembly
        <p>
        Through CPE 133 and 233 I have almost a year of experience programming with these tools. In CPE 133 I developed a simple calculator which used an analog to digital converter to add numbers inputted by a potentiometer. Throughout CPE 233 I developed a RISC-V archetecture CPU using Vivado and SystemVerilog and developed Frogger-based game for it using assembly code.
        </p>
        </li>
        <li>
        Arduino
        <p>
        Throughout CPE 123 I programmed a line following robot as well as a pet food dispenser using Arduino boards.
        </p>
        </li>
      </ul>
    </body>
  )
}


export default App;
