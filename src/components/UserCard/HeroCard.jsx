import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";

const HeroCard = props => {
  const { heroData } = props;

  return (
    <div className="cards-wrapper">
      <Link className="ext-link" to={`/hero/${heroData.id}`}>
        <img src={heroData.hero_image} alt="hero headshot" />
        <h3>
          {heroData.first_name} {heroData.last_name}
        </h3>
      </Link>
    </div>
  );
};

export default HeroCard;
