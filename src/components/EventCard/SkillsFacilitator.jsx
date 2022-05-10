import React from "react";

const SkillsFacilitator = props => {
  const { eventData } = props;
  const SkillsFacilitator = eventData.skills_facilitator;

  return SkillsFacilitator ? <div>Workshop Facilitator</div> : <div></div>;
};

export default SkillsFacilitator;
