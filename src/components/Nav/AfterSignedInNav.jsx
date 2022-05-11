import React from "react";
import { Link } from "react-router-dom";

const AfterSignedInNav = () => {
  return (
      <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{fontSize: '16px', paddingRight: '8px'}}><i class="fa-brands fa-bitcoin"></i>     10 GoCoins</div>
          <Link to="/heroes" style={{fontSize: '20px'}}><i class="fa-solid fa-gear"></i></Link>
          <Link to="/heroes" style={{fontSize: '20px'}}><i class="fa-solid fa-bell"></i></Link>
          <Link to="/heroes" style={{fontSize: '20px'}}><i class="fa-solid fa-circle-question"></i></Link>
          <Link to="/heroes" style={{fontSize: '20px'}}><i class="fa-solid fa-user"></i></Link>
      </div>

  );
};

export default AfterSignedInNav;
