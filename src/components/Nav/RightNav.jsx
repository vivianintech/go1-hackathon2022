import React from "react";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
      <div className="nav-middle">
          <Link to="/"><i class="fa-solid fa-house-chimney"></i>  Home</Link>
          <Link to="/events"><i class="fa-solid fa-compass"></i>  Explore</Link>
          <Link to="/hosts"><i class="fa-solid fa-user-group"></i>  Groups</Link>
          <Link to="/heroes"><i class="fa-solid fa-people-arrows-left-right"></i>  Experts</Link>
      </div>

  );
};

export default RightNav;
