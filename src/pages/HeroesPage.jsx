import React, { useState, useEffect } from "react";
import HeroCard from "../components/UserCard/HeroCard";
import "./HomePage.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { fasearch } from '@fortawesome/free-solid-svg-icons'

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
    <div className="home-page">
      <div className="cover">
        <img
          src="https://res.cloudinary.com/gohkt/image/upload/v1652184996/go1-hackathon/go1banner_qx7ong.jpg"
          alt="go1-banner"
        ></img>
        <div class="cover-text">
          <div class="form-selections">
            Expertise
            <input type="text" name="name" placeholder="What skill are you after?"/>
          </div>
          <div class="form-selections" style={{paddingRight: "64px"}}>
            Services <br/>
            <select>
                <option value="" disabled selected>What service do you need?</option>
                <option value="Mentoring">Mentoring</option>
                <option value="Coaching">Coaching</option>
                <option value="Networking">Networking</option>
                <option value="Speaking">Speaking</option>
                <option value="Teaching">Teaching</option>
            </select>
          </div>
          <div class="form-selections" style={{paddingRight: "64px"}}>
            Community <br/>
            <select value="My organisation">
                <option value="My organisation">My organisation</option>
                <option value="Go1 Community">Go1 Community</option>
            </select>
          </div>
          <div class="magnifying-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
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
