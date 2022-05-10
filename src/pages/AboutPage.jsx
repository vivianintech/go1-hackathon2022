import React from "react";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About J-cubed</h1>
      <p>
        We are a diverse group, working together to develop our coding skills
        via the She Codes Plus program.
      </p>
      <h2>Who is in J-cubed</h2>
      <div>
        <h3>Our Team</h3>
        <ul className="team-list">
          <li>Ati</li>
          <li>Joy</li>
          <li>Rebecca</li>
          <li>Teagan</li>
          <li>Vivian</li>
        </ul>
      </div>
      <div>
        <h3>Our Mentors</h3>
        <ul className="team-list">
          <li>Carlie</li>
          <li>Hayley</li>
          <li>Michelle</li>
          <li>Ollie</li>
        </ul>
      </div>
      <p>
        She Codes Plus has been created by Kate Kirwin and her team, based in
        Perth.
      </p>
      <p>
        Want to learn to code? Visit{" "}
        <a href="https://shecodes.com.au/">She Codes</a>.
      </p>
    </div>
  );
};

export default About;
