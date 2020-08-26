import React, { useState } from 'react';
import logo from './logo.svg';
import './coursework.css';
import './font.css';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';

function Coursework() {
  return (
    <body className="coursework_body">
      <div>
        <p className="heading_text">Relevant Coursework</p>
        <p className="body_text"> Click a class to see its course description </p>
        <Accordion >
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              CPE 101 - Fundamentals of Computer Science
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              Basic principles of algorithmic problem solving and programming using methods of top-down design, stepwise refinement and procedural abstraction. Basic control structures, data types, and input/output. Introduction to the software development process: design, implementation, testing and documentation. The syntax and semantics of a modern programming language.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              CPE 123 - Introduction to Computing
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              Use of a supportive software development environment to design, develop, and test applications in robotics. An introduction to computing and robotics.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              CPE 133 - Digital Design
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
              Number systems, Boolean algebra, Boolean functions, and function minimization. Analysis and design of combinational and sequential digital logic circuits. Hardware Description Language (HDL) concepts and applications digital design and synthesis in FPGAs.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              CPE 202 - Data Structures
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
              Introduction to data structures and analysis of algorithms. Abstract datatypes. Specification and implementation of advanced data structures. Theoretical and empirical analysis of recursive and iterative algorithms. Software performance evaluation and testing techniques.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              CPE 203 - Project-Based Object-Oriented Programming and Design
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
              Object-oriented programming and design with applications to project construction. Introduction to class design, interfaces, inheritance, generics, exceptions, streams, and testing.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              CPE 233 - Computer Design and Assembly Language Programming
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
              Design and implementation of digital computer circuits via CAD tools for programmable logic devices (PLDs). Basic computer design with its datapath components and control unit. Introduction to assembly language programming of an off-the-shelf RISC-based microcontroller.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              CPE 357 - Systems Programming
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
              C programming language from a system programming perspective. Standard C language including operators, I/O functions, and data types in the context of system functions. Unix commands, shell scripting, file system, editors.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              CSC 348 - Discrete Structures
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
              Structures of computer science: logic, sets, relations, functions, graphs and trees. Propositional and predicate logic. Applications of predicate logic to preconditions, postconditions, and proof techniques. Complexity of algorithms.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              IME 156 - Basic Electronics Manufacturing
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
            Practical electronics manufacturing knowledge expanded through concepts such as CAD/CAM design, Design for Manufacture (DFM), documentation requirements, prototyping and production planning. Hands-on techniques learned for project planning, soldering, automation, hand tool usage and production methods.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
              EE 112 - Electric Circuit Analysis I
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
              Introduction to basic circuit analysis. Resistive circuits, voltage and current sources, network theorems.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="10">
              EE 211 - Electric Circuit Analysis II
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
              Continuation of basic circuit analysis. Op-amp circuits. Energy storage elements, RC and RL circuits, and AC steady state analysis.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="11">
              EE 212 - Electric Circuit Analysis III
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
              AC power, 3-phase circuits. Mutual inductance, series and parallel resonance and two-port networks. Frequency response, including Bode plots.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      </body>
  )
}

export default Coursework;
