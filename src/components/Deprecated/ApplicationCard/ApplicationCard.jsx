import React from "react";
import { Link } from "react-router-dom";
import IsAnon from "../Filters/Application/IsAnon";
import IsAccepted from "../Filters/Application/IsAccepted";
import IsAssessed from "../Filters/Application/IsAssessed";

export const ApplicationCard = props => {
  const { applicationData } = props;
  return (
    <div className="application-card">
      <IsAnon applicationData={applicationData} />
      <p>Application details: {applicationData.reason_apply}</p>
      <p>Application for event: {applicationData.event}</p>
      <IsAssessed applicationData={applicationData} />
      <IsAccepted applicationData={applicationData} />
      <Link to={`/applications/${applicationData.id}`}>
        Assess this application
      </Link>
      <br />
      <br />
    </div>
  );
};

export default ApplicationCard;
