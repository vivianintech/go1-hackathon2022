import React from "react";

const BadgeKeynote = props => {
  const { heroData } = props;
  const BadgeKeynote = heroData.badge_keynote;

  return BadgeKeynote ? (
    <div>
      <img
        src="https://res.cloudinary.com/flifree/image/upload/v1606562882/Deep%20Tech%20Heroes/deep-tech-heroes-badge-K2-orange_swqd2a.png"
        alt="Deep Tech Heroes Keynote Badge Awarded"
      />
    </div>
  ) : (
    <div>
      <img
        src="https://res.cloudinary.com/flifree/image/upload/v1606565169/Deep%20Tech%20Heroes/B_W-deep-tech-heroes-badge-K2-orange_todbav.png"
        alt="Badge not yet awarded"
      />
    </div>
  );
};

export default BadgeKeynote;
