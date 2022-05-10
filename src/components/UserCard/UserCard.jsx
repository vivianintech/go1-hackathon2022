import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = props => {
  const { userData } = props;
  return (
    <div className="user-card">
      <Link to={`/users/${userData.id}`}>
        <h4>{userData.username}</h4>
      </Link>
    </div>
  );
};

export default UserCard;
