import IconThumbsUpActive from "@go1d/go1d/build/components/Icons/ThumbUpFilled";
import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";

const HeroCard = props => {
  const { heroData } = props;
  const id = heroData.id;
  const name = heroData.name;
  const image = heroData.image;
  const price = heroData.price;
  const role = heroData.role;
  const company = heroData.company;
  const type = heroData.type;

  return (
    <div className="cards-wrapper">
      <Link className="ext-link" to={`/hero/${id}`}>
        <div className="price">
          <img
            src="https://res.cloudinary.com/gohkt/image/upload/v1652247827/go1-hackathon/bitcoin-png-bitcoin-logo-transparent-background-11562933997uxok6gcqjp_dxawsz.png"
            alt="go1coin"
          />
          <div id="price">{price} GoCoins</div>
        </div>

        <div className="expert-container">
          <img src={image} alt="hero headshot" />
          <div>
            <IconThumbsUpActive />
          </div>
          <div>{type}</div>
        </div>
        <h3>{name}</h3>
        <h5>{role}</h5>
        <h5>{company}</h5>
      </Link>
    </div>
  );
};

export default HeroCard;
