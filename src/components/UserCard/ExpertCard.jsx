import IconThumbsUpActive from "@go1d/go1d/build/components/Icons/ThumbUpFilled";
import React from "react";
import { Link } from "react-router-dom";
import "./Style/ExpertCard.css";

const ExpertCard = (props) => {
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
      {/* <div className="price-container">
        <img
          src="https://res.cloudinary.com/gohkt/image/upload/v1652264024/go1-hackathon/Bitcoin_swhflc.svg"
          alt="go1coin"
        />
        <div id="price">{price} GoCoins</div>
      </div> */}

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
              <i class="fa-brands fa-bitcoin"></i> {price} GoCoins
            </div>

          </div>
        </div>

        <div className="expert-text">
          <div id="expert-name">
            <p style={{margin: 0}}>{name}</p>
            {type &&
            <button className="btnExpert">{type}</button>}
          </div>
          <div id="expert-role">
            <p style={{margin: 0, paddingTop: 6}}>{role}</p>
          </div>
          <div id="expert-company">
            <p style={{margin: 0, paddingTop: 6}}>{company}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ExpertCard;
