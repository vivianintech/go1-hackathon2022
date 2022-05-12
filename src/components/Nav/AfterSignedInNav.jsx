import React from "react";
import { Link } from "react-router-dom";

const AfterSignedInNav = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652346639/goCoin_cg8cxf.png" alt="go coin" style={{width: '30px'}}/>
      <div style={{ fontSize: "16px", fontWeight:'bold', paddingRight: "8px", color: "#114954" }}>
        100
      </div>
      <Link to="/experts" style={{ fontSize: "20px" }}>
        <i class="fa-solid fa-gear"></i>
      </Link>
      <Link to="/experts" style={{ fontSize: "20px" }}>
        <i class="fa-solid fa-bell"></i>
      </Link>
      <Link to="/experts" style={{ fontSize: "20px" }}>
        <i class="fa-solid fa-circle-question"></i>
      </Link>
      <Link to="/experts" style={{ fontSize: "20px" }}>
        <i class="fa-solid fa-user"></i>
      </Link>
    </div>
  );
};

export default AfterSignedInNav;
