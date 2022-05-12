import React from "react";
import { Link } from "react-router-dom";
import "./Style/ExpertCard.css";

const ServiceCard = props => {
  const { services } = props;
  const id = services.id;
  const name = services.name;
  const image = services.image;
  return (
    <div className="wrapper-nobackground">
      <Link className="service-wrapper" to={`/service/${id}`}>
        <img src={image} alt="service" />
        <div style={{ textAlign: "center" }}>{name}</div>
      </Link>
    </div>
  );
};

export default ServiceCard;
