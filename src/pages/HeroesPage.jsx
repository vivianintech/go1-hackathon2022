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
          src="https://res.cloudinary.com/dikrdv4qy/image/upload/v1606439814/Background_bdvap8.png"
          alt=""
        ></img>
        <div class="cover-text">Deep Tech Heroes</div>
        {/* <Link className='ext-link-1' to='/apply'>
                    <button className='page-button' type="button">Apply for an Event</button>
                </Link> */}
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
