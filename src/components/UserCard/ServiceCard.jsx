import React from "react";
import { Link } from "react-router-dom";
import "./Style/ExpertCard.css";

const ServiceCard = props => {
  const { services } = props;
  const id = services.id;
  const name = services.name;
  const image = services.image;
  const color = services.color
  return (
    <div className="wrapper-nobackground">
      <Link className="service-wrapper" style={{backgroundColor: `${color}`}} to={`/service/${id}`}>
        <img src={image} alt="service" />
        <div style={{ textAlign: "center", color: "white", fontSize: "18px" }}>{name}</div>
      </Link>
    </div>
  );
};

export default ServiceCard;
