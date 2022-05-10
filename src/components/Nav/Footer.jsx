import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-medias">
        <Link to="/twitter">Twitter</Link>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <Link to="/contact">Contact</Link>
      </div>
      <div className="copyright">
        <p>&copy; Go1 Hackathon May 2022</p>
      </div>
      <div className="trade-mark">
        <Link to="/about">Site created by Awesome Team</Link>
      </div>
    </footer>
  );
};

export default Footer;
