import React from "react";
import { Link } from "react-router-dom";
// import Burger from "./Burger";
import RightNav from './RightNav';
import LoginControlNav from "./LoginControlNav";
import "./Nav.css";

const Nav = () => {
  return (
      <div className="navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/gohkt/image/upload/v1652185178/go1-hackathon/go1logo_lgqrcr.png"
            alt="go1-logo"
          ></img>
        </Link>
      <RightNav />
      <LoginControlNav />
    </div>
  );
};

export default Nav;
