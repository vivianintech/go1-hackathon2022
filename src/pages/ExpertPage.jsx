import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BadgeEnthusiast from "../components/Categories/Badges/BadgeEnthusiast";
import BadgeExpert from "../components/Categories/Badges/BadgeExpert";
import BadgeMentor from "../components/Categories/Badges/BadgeMentor";
import BadgeFacilitator from "../components/Categories/Badges/BadgeFacilitator";
import BadgeKeynote from "../components/Categories/Badges/BadgeKeynote";
import "./ExpertPage.css";
import HeroAge from "../components/Filters/Hero/HeroAge";
import HasYellowCard from "../components/Filters/Hero/HasYellowCard";
import HasBlueCard from "../components/Filters/Hero/HasBlueCard";
import IsVirtual from "../components/Filters/Hero/IsVirtual";
import IsPaidPreferred from "../components/Filters/Hero/IsPaidPreferred";
import HasDisability from "../components/Filters/Hero/HasDisability";

const ExpertPage = () => {
  const initialHeroData = {
    id: window.localStorage.getItem("id"),
    first_name: "",
    last_name: "",
    hero_image: "",
    linkedin_url: "",
    hero_bio: "",
    pref_pronoun: "",
    year_of_birth: "",
    hero_phone: "",
    hero_location: "",
    gender: "",
    has_bluecard: "",
    has_yellowcard: "",
    is_virtual_accepted: "",
    is_paid_preferred: "",
    culture: "",
    hero_language: "",
    hero_disability: "",
    badge_keynote: "",
    badge_facilitator: "",
    badge_mentor: "",
    badge_expert: "",
    badge_enthusiast: "",
  };
  const [heroData, setHeroData] = useState(initialHeroData);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/expert/${id}/`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        setHeroData(data);
      });
  });

  return (
    <div className="page-wrapper">
      <h2>Meet our Heroes</h2>

      <div className="hero-wrapper1">
        <div className="hero-image">
          <img src={heroData.hero_image} alt="hero-logo" />
        </div>
        <div className="hero-details">
          <h2>
            {heroData.first_name} {heroData.last_name}
          </h2>

          <br />
          <h4>A note from {heroData.first_name}</h4>
          <p>{heroData.hero_bio}</p>
          <br />
          <p>
            Connect with{" "}
            <a href="heroData.linkedin_url"> {heroData.first_name} </a>on
            LinkedIn
          </p>
          <div className="hero-badges">
            <BadgeKeynote heroData={heroData} />
            <BadgeFacilitator heroData={heroData} />
            <BadgeMentor heroData={heroData} />
            <BadgeExpert heroData={heroData} />
            <BadgeEnthusiast heroData={heroData} />
          </div>
          <h4>A bit of data on {heroData.first_name}</h4>
          <p>
            Turns <HeroAge heroData={heroData} /> years old this year
          </p>
          <p>Lives in {heroData.hero_location}</p>
          <p>Identifies as {heroData.gender}</p>
          <p>Preferred pronouns are {heroData.pref_pronoun}</p>
          <p>Recognises culture as {heroData.culture}</p>
          <p>Speaks {heroData.hero_language}</p>
          <HasDisability heroData={heroData} />
          <HasBlueCard heroData={heroData} />
          <HasYellowCard heroData={heroData} />
          <IsVirtual heroData={heroData} />
          <IsPaidPreferred heroData={heroData} />
        </div>
      </div>
    </div>
  );
};

export default ExpertPage;
