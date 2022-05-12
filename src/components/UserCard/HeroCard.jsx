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
    <div className="hero-container">
      <div className="price-container">
        <img
          src="https://res.cloudinary.com/gohkt/image/upload/v1652264024/go1-hackathon/Bitcoin_swhflc.svg"
          alt="go1coin"
        />
        <div id="price">{price} GoCoins</div>
      </div>

      <Link className="hero-link" to={`/experts/${id}`}>
        <div className="expert-container">
          <div className="expert-img">
            <img
              src={image}
              alt="hero headshot"
              style={{ objectFit: "cover" }}
            />
          </div>

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
