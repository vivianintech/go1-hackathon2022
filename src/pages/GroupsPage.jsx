import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HostCard from "../components/UserCard/deprecated/HostCard";

const GroupPage = () => {
  const [hostList, setHostList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/hosts`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setHostList(data);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="cover_events">
        <img
          src="https://res.cloudinary.com/gohkt/image/upload/v1652184996/go1-hackathon/go1banner_qx7ong.jpg"
          alt="go1-banner"
        ></img>
        <div class="cover-text"></div>
        <Link className="ext-link-1" to="/newevent">
          <button className="page-button" type="button">
            CREATE AN EVENT
          </button>
        </Link>
      </div>

      <div className="page-main">
        {hostList.map((hostData, key) => {
          return <HostCard key={key} hostData={hostData} />;
        })}
      </div>
    </div>
  );
};

export default GroupPage;
