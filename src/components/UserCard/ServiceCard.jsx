import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";

const ServiceCard = props => {
  const { services } = props;
  const id = services.id;
  const name = services.name;
  const image = services.image;
  return (
    <div className="cards-wrapper wrapper-nobackground">
      <Link className="service" to={`/service/${id}`}>
        <img src={image} alt="service" />
        <div style={{ paddingLeft: "10%" }}>{name}</div>
      </Link>
    </div>
  );
};

export default ServiceCard;
