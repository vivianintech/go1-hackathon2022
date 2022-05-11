import React, { useState, useEffect } from "react";
import HeroCard from "../components/UserCard/HeroCard";
import "./HomePage.css";
import { EXPERTS, SERVICES } from "../Data/Constants";
import "./EventsPage.css";
import ServiceCard from "../components/UserCard/ServiceCard";

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
    <>
      <div className="home-page">
        <div className="cover">
          <img
            src="https://res.cloudinary.com/gohkt/image/upload/v1652184996/go1-hackathon/go1banner_qx7ong.jpg"
            alt="go1-banner"
          ></img>
          <div class="cover-text">
            <div class="form-selections">
              Expertise
              <input
                type="text"
                name="name"
                placeholder="What skill are you after?"
              />
            </div>
            <div class="form-selections" style={{ paddingRight: "64px" }}>
              Services <br />
              <select>
                <option value="" disabled selected>
                  What service do you need?
                </option>
                <option value="Mentoring">Mentoring</option>
                <option value="Coaching">Coaching</option>
                <option value="Networking">Networking</option>
                <option value="Speaking">Speaking</option>
                <option value="Teaching">Teaching</option>
              </select>
            </div>
            <div class="form-selections" style={{ paddingRight: "64px" }}>
              Community <br />
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
      </div>
      <div className="page-wrapper">
        <div>Featured Experts</div>
        <div className="page-main">
          {EXPERTS.map((data, key) => {
            return <HeroCard key={key} heroData={data} />;
          })}
        </div>

        <div>Services</div>
        <div className="page-main">
          {SERVICES.map((data, key) => {
            return <ServiceCard key={key} services={data} />;
          })}
        </div>

        <div>Recently Viewed</div>
        <div className="page-main">
          {EXPERTS.map((data, key) => {
            return <HeroCard key={key} heroData={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default HeroesPage;
