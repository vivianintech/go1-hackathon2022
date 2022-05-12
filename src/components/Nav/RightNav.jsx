import React from "react";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
    <div className="nav-middle">
      <Link to="/experts">
        <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652342942/Home_koc5gd.png" alt="experts" style={{width: '24px', objectFit: 'cover'}}/>
        <div style={{marginLeft: '4px'}}>Home</div>
        </div>
      </Link>
      <Link to="/experts">
        <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652342942/Explore_layme8.png" alt="experts" style={{width: '24px', objectFit: 'cover'}}/>
        <div style={{marginLeft: '4px'}}>Explore</div>
        </div>
      </Link>
      <Link to="/groups">
        <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652342942/People_ypn41w.png" alt="experts" style={{width: '24px', objectFit: 'cover'}}/>
        <div  style={{marginLeft: '4px'}}>People</div>
        </div>
      </Link>
      <Link to="/experts">
        <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652342942/TrendingUp_gj0qre.png" alt="experts" style={{width: '24px', objectFit: 'cover'}}/>
        <div style={{marginLeft: '4px'}}>Insights</div>
        </div>
      </Link>
      <Link to="/experts">
        <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652342483/Owl_hfj9cm.png" alt="experts" style={{width: '24px', objectFit: 'cover'}}/>
        <div style={{marginLeft: '4px'}}>Experts</div>
        </div>
      </Link>
    </div>
  );
};

export default RightNav;
