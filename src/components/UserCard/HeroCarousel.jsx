import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import ExpertCard from "./ExpertCard";
import "./Style/HeroCarousel.css";

const HeroCarousel = () => {
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
        data.sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1));
        setHeroList(data);
      });
  }, []);

  return (
    <div className="styling-heroCarousel">
      <Carousel itemsToShow={2}>
        {heroList.map(heroData => (
          <div key={heroData.id}>
            <ExpertCard heroData={heroData} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
