import React from "react";

const ApplyEnthusiast = props => {
  const { applicationData } = props;
  const ApplyEnthusiast = applicationData.apply_enthusiast;

  return ApplyEnthusiast ? <div>Tech Enthusiast</div> : <div></div>;
};

export default ApplyEnthusiast;
