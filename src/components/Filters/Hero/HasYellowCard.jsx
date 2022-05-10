import React from "react";

function HasYellowCard (props) {
    const { heroData } = props;
    const HasYellowCard = heroData.has_yellowcard

    return (
        HasYellowCard ?
        <div>Approved to work with people with a disability</div> :
        <div></div>
    )
}

export default HasYellowCard;