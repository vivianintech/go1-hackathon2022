import React from "react";
// import { Link } from "react-router-dom";

function BadgeFacilitator (props) {
    const { heroData } = props;
    const BadgeFacilitator = heroData.badge_facilitator

    return (
        BadgeFacilitator ?
        <div><img src="https://res.cloudinary.com/flifree/image/upload/v1606565214/Deep%20Tech%20Heroes/deep-tech-heroes-badge-F2-orange_hn5qdx.png" alt="Deep Tech Heroes Facilitator Badge Awarded" /></div> :
        <div><img src="https://res.cloudinary.com/flifree/image/upload/v1606565215/Deep%20Tech%20Heroes/B_W-deep-tech-heroes-badge-F2-orange_npibcj.png" alt="Badge not yet awarded" /></div>
    )
}

export default BadgeFacilitator;