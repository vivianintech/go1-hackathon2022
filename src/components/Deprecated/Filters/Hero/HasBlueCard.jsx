import React from "react";

const HasBlueCard = props => {
  const { heroData } = props;
  const HasBlueCard = heroData.has_bluecard;

  return HasBlueCard ? <div>Approved to work with youth</div> : <div></div>;
};

export default HasBlueCard;
