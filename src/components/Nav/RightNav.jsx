import React from "react";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
      <div className="nav-middle">
          <Link to="/">Home</Link>
          <Link to="/events">Explore</Link>
          <Link to="/hosts">Groups</Link>
          <Link to="/heroes">Mentors</Link>
      </div>

  );
};

export default RightNav;
