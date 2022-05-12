import React from "react";
import { Link } from "react-router-dom";
import RightNav from "./RightNav";
import LoginControlNav from "./LoginControlNav";
import AfterSignedInNav from "./AfterSignedInNav";
import "./Style/Nav.css";

const Nav = props => {
  return (
    <div className="navbar">
      <div style={{ display: "flex" }}>
        <Link to="/experts">
          <img
            src="https://res.cloudinary.com/gohkt/image/upload/v1652185178/go1-hackathon/go1logo_lgqrcr.png"
            alt="go1-logo"
            style={{ width: "50px" }}
          ></img>
        </Link>
        <RightNav />
      </div>
      {props.afterSignedIn ? <AfterSignedInNav /> : <LoginControlNav />}
    </div>
  );
};

export default Nav;
