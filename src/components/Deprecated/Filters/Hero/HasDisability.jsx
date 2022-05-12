import React from "react";

const HasDisability = props => {
  const { heroData } = props;
  const HasDisability = heroData.hero_disability;

  return HasDisability ? (
    <div>Identifies as a person with a disability</div>
  ) : (
    <div></div>
  );
};

export default HasDisability;
