import React from "react";

const BadgeExpert = props => {
  const { heroData } = props;
  const BadgeExpert = heroData.badge_expert;

  return BadgeExpert ? (
    <div>
      <img
        src="https://res.cloudinary.com/flifree/image/upload/v1606565698/Deep%20Tech%20Heroes/deep-tech-heroes-badge-X2-orange_hzmpmt.png"
        alt="Deep Tech Heroes Expert Badge Awarded"
      />
    </div>
  ) : (
    <div>
      <img
        src="https://res.cloudinary.com/flifree/image/upload/v1606565164/Deep%20Tech%20Heroes/B_W-deep-tech-heroes-badge-X2-orange_di0kga.png"
        alt="Badge not yet awarded"
      />
    </div>
  );
};

export default BadgeExpert;
