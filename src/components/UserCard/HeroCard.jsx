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
      <div className="price">
        <img
          src="https://res.cloudinary.com/gohkt/image/upload/v1652247827/go1-hackathon/bitcoin-png-bitcoin-logo-transparent-background-11562933997uxok6gcqjp_dxawsz.png"
          alt="go1coin"
        />
        <div id="price">{price} GoCoins</div>
      </div>

      <Link className="ext-link" to={`/hero/${id}`}>
        <div className="expert-container">
          <img src={image} alt="hero headshot" />
          <div className="expertThumbType">
            <div id="expertThumbUp">
              <IconThumbsUpActive />
            </div>
            <button className="btnExpert">{type}</button>
          </div>
        </div>

        <div className="expert-text">
          <div id="expert-name">
            <p>{name}</p>
          </div>
          <div id="expert-role">
            <p>{role}</p>
          </div>
          <div id="expert-company">
            <p>{company}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeroCard;
