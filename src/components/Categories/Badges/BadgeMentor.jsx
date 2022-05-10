import React from "react";
// import { Link } from "react-router-dom";

function BadgeMentor (props) {
    const { heroData } = props;
    const BadgeMentor = heroData.badge_mentor

    return (
        BadgeMentor ?
        <div><img src="https://res.cloudinary.com/flifree/image/upload/v1606565219/Deep%20Tech%20Heroes/deep-tech-heroes-badge-M2-orange_bxeo9h.png" alt="Deep Tech Heroes Mentor Badge Awarded" /></div> :
        <div><img src="https://res.cloudinary.com/flifree/image/upload/v1606565167/Deep%20Tech%20Heroes/B_W-deep-tech-heroes-badge-M2-orange_oegybx.png" alt="Badge not yet awarded" /></div>
    )
}

export default BadgeMentor;