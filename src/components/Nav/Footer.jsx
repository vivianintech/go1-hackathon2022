import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-comp">
          <p>&copy; Go1 Hackathon May 2022</p>
        </div>
        <div className="footer-comp">
          <p>
            <Link to="/twitter">Twitter</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className="footer-comp">
          <Link to="/about">Site created by Awesome Team</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
