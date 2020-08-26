import React, { useState } from 'react';
import logo from './logo.svg';
import './projects.css';
import './font.css';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Projects() {
  const [value, setValue] = useState([1]);
  const handleChange = (val) => setValue(val);
  return(
    <div className="projects_body">
      <p className="heading_text">
        Projects
      </p>
      <div width="100%">
        <ToggleButtonGroup name="projects_radio" type="radio" value={value} onChange={handleChange} defaultValue={[1]}>
          <ToggleButton variant="outline-success" value={1}>LZW Compression</ToggleButton>
          <ToggleButton variant="outline-success" value={2}>C Shell</ToggleButton>
          <ToggleButton variant="outline-success" value={3}>Frogger</ToggleButton>
          <ToggleButton variant="outline-success" value={4}>A* Search Algorithm</ToggleButton>
          <ToggleButton variant="outline-success" value={5}>Bomb Samurai</ToggleButton>
          <ToggleButton variant="outline-success" value={6}>Slash and Summon</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="project_info">
        <ProjectManager value={value}/>
      </div>
    </div>
  );
}

export default Projects;

function ProjectManager(props) {
  if (props.value == 1) {
    return(
      <LZW />
    );
  } else if (props.value == 2) {
    return(
      <CShell />
    );
  } else if (props.value == 3) {
    return(
      <Frogger />
    );
  } else if (props.value == 4) {
    return(
      <AStar />
    );
  } else if (props.value == 5) {
    return(
      <BombSamurai />
    );
  }else if (props.value == 6) {
    return(
      <SlashAndSummon />
    );
  }else {
    return(<p>ERROR</p>);
  }
}

function LZW() {
  return (
    <body className="project_data">
      <p>Using C, I implemented the <a href="https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch">LZW compression algorithm</a> with a <a href="https://en.wikipedia.org/wiki/Trie#:~:text=In%20computer%20science%2C%20a%20trie,the%20keys%20are%20usually%20strings.">Trie</a> data structure, allowing for easy storage and retrieval of compression codes.
      </p>
      <p>The following demonstration shows the algorithm compressing one million words in one eighth of a second:</p>
      <video  className="lzw_video" width="100%" height="auto" controls>
      <source src="lzw_video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      <p>
      Please <a href="mailto:owensconnor1@gmail.com">contact me</a> if you have any questions about the project or would like to see my code.
      </p>
    </body>
  )
}

function CShell() {
  return (
    <body className="project_data">
      <p>Using C, I developed a <a href="https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch">C Shell</a> which can handle Unix commands from the user. It uses a <a href="https://en.wikipedia.org/wiki/Pipeline_(computing)#:~:text=In%20computing%2C%20a%20pipeline%2C%20also,or%20in%20time%2Dsliced%20fashion.">Pipline</a>, created using fork and exec, to allow commands to be piped together i.e. "ls | wc".
      </p>
      <p>The following video demonstrates some of the C Shell's supported commands:</p>
      <video  className="cshell_video" width="100%" height="auto" controls>
      <source src="cshell_video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      <p>
      Please <a href="mailto:owensconnor1@gmail.com">contact me</a> if you have any questions about the project or would like to see my code.
      </p>
    </body>
  )
}

function Frogger() {
  return (
    <body className="project_data">
      <p>Throughout CPE 233, I developed a <a href="https://en.wikipedia.org/wiki/RISC-V#:~:text=RISC%2DV%20(pronounced%20%22risk,not%20require%20fees%20to%20use.">RISC-V</a> archetecture CPU using Vivado, SystemVerilog and a Basys 3 board. I then developed a game based on <a href="https://en.wikipedia.org/wiki/Frogger">Frogger</a> for the CPU using assembly code.
      </p>
      <p>The following is a video of the game in action:</p>
      <video  className="frogger_video" width="100%" height="auto" controls>
      <source src="frogger_video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>

      <p>
      Please <a href="mailto:owensconnor1@gmail.com">contact me</a> if you have any questions about the project or would like to see my code.
      </p>
    </body>
  )
}

function AStar() {
  return (
    <body className="project_data">
      <p>In order to more efficiently move characters in a game, I implemented the <a href="https://en.wikipedia.org/wiki/A*_search_algorithm">A* Pathing Algorithm</a>. The algorithm allows characters to find the most efficient path from one point to another while avoiding obstacles.
      </p>
      <p>The following is a demonstration of the algorithm in action:</p>
      <video  className="astar_video" width="100%" height="auto" controls>
      <source src="astar_video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      <p>
      Please <a href="mailto:owensconnor1@gmail.com">contact me</a> if you have any questions about the project or would like to see my code.
      </p>
    </body>
  )
}

function BombSamurai() {
  return (
    <body className="project_data">
      <p> Using Android Studio, I developed a simple game for Android devices which I named Bomb Samurai. It requires quick reaction timing as players swipe across a bomb either horizantally or vertically before its fuse runs out.
      </p>
      <p>The following is a demonstration of the game in action:</p>
      <video  className="bombsamurai_video" width="100%" height="auto" controls>
      <source src="bombsamurai_video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      <p>
      Please <a href="mailto:owensconnor1@gmail.com">contact me</a> if you have any questions about the project or check my <a href="https://github.com/ConnorOwens">GitHub</a> to see my code.
      </p>
    </body>
  )
}

function SlashAndSummon() {
  return (
    <body className="project_data">
      <p> Using Java, I developed a game which I named Slash and Summon. It is a competitive game where a player using a keyboard attempts to survive spells cast by a player using a mouse for as long as possible.
      </p>
      <p>The following is a demonstration of the game in action:</p>
      <video  className="slashandsummon_video" width="100%" height="auto" controls>
      <source src="slashandsummon_video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      <p>
      Please <a href="mailto:owensconnor1@gmail.com">contact me</a> if you have any questions about the project or check my <a href="https://github.com/ConnorOwens">GitHub</a> to see my code.
      </p>
    </body>
  )
}
