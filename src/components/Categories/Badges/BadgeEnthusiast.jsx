import React from "react";
// import { Link } from "react-router-dom";

const BadgeEnthusiast = props => {
  const { heroData } = props;
  const BadgeEnthusiast = heroData.badge_enthusiast;

  return BadgeEnthusiast ? (
    <div>
      <img
        src="https://res.cloudinary.com/flifree/image/upload/v1606565218/Deep%20Tech%20Heroes/deep-tech-heroes-badge-E2-orange_xohrys.png"
        alt="Deep Tech Heroes Enthusiast Badge Awarded"
      />
    </div>
  ) : (
    <div>
      <img
        src="https://res.cloudinary.com/flifree/image/upload/v1606565216/Deep%20Tech%20Heroes/B_W-deep-tech-heroes-badge-E2-orange_gle6wa.png"
        alt="Badge not yet awarded"
      />
    </div>
  );
};

export default BadgeEnthusiast;
