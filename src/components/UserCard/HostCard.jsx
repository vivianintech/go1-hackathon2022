import React from "react";
import { Link } from "react-router-dom";
import "./HostCard.css";

const HostCard = props => {
  const { hostData } = props;

  return (
    <div className="cards-wrapper">
      <Link className="ext-link" to={`/host/${hostData.id}`}>
        <img src={hostData.organisation_logo} alt="Company-Logo" />
        <h3>{hostData.organisation_name}</h3>
      </Link>
    </div>
  );
};

export default HostCard;
