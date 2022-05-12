import React from "react";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
    <div className="nav-middle">
      <Link to="/">
        <i class="fa-solid fa-house-chimney"></i> Home
      </Link>
      <Link to="/explore">
        <i class="fa-solid fa-compass"></i> Explore
      </Link>
      <Link to="/groups">
        <i class="fa-solid fa-user-group"></i> Groups
      </Link>
      <Link to="/experts">
        <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652342483/Owl_hfj9cm.png" alt="experts" style={{width: '24px', objectFit: 'cover'}}/>
        <div>Experts</div>
        </div>
      </Link>
    </div>
  );
};

export default RightNav;
