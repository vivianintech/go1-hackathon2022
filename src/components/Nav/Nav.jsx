import React from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/gohkt/image/upload/v1652185178/go1-hackathon/go1logo_lgqrcr.png"
            alt="go1-logo"
          ></img>
        </Link>
      </div>
      <Burger />
    </nav>
  );
};

export default Nav;
