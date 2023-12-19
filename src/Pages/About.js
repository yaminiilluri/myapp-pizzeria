import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT ME</h1>
        <p>
          Innovative and results-driven React JS Developer with hands-on
          expertise crafting intuitive and visually striking user interfaces for
          professional web applications. A collaborative and team-oriented
          professional excelling in seamless interaction with cross-functional
          teams, expertise lies in contributing significantly to the cohesive
          and synergistic execution of projects. Consistently sought-after for
          proficiency in leveraging UI technologies and JavaScript libraries to
          create dynamic and engaging digital experiences. Adept at leveraging
          component-based architecture to deliver scalable and efficient
          applications, consistently exceeding project goals.
        </p>
      </div>
    </div>
  );
}

export default About;
