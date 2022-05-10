import React, { useState, useEffect } from "react";
import HeroCard from "../components/UserCard/HeroCard";
import "./EventsPage.css";

const HeroesPage = () => {
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/heros`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setHeroList(data);
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
      </div>

      <div className="page-main">
        {heroList.map((heroData, key) => {
          return <HeroCard key={key} heroData={heroData} />;
        })}
      </div>
    </div>
  );
};

export default HeroesPage;
