import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import IsAccepted from "../../components/Filters/Application/IsAccepted";
import IsAssessed from "../../components/Filters/Application/IsAssessed";
import ApplyKeynote from "../../components/Filters/Application/ApplyKeynote";
import ApplyFacilitator from "../../components/Filters/Application/ApplyFacilitator";
import ApplyMentor from "../../components/Filters/Application/ApplyMentor";
import ApplyExpert from "../../components/Filters/Application/ApplyExpert";
import ApplyEnthusiast from "../../components/Filters/Application/ApplyEnthusiast";

const ApplicationPage = () => {
  const eventName = window.localStorage.getItem("eventName");

  const [applicationData, setApplicationData] = useState({ applications: [] });
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}applications/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setApplicationData(data);
      });
  }, [id]);

  window.localStorage.setItem("appID", applicationData.id);
  window.localStorage.setItem("appName", applicationData.applicant_name);

  return (
    <div>
      <h1>Application from {applicationData.applicant_name}</h1>
      <br />
      <IsAssessed applicationData={applicationData} />
      <IsAccepted applicationData={applicationData} />
      <p>Application # {applicationData.id}: </p>
      <p>Applying to Event: {eventName}</p>
      <p>Application Details:{applicationData.reason_apply}</p>
      <p>Applying to be a</p>
      <ApplyKeynote applicationData={applicationData} />
      <ApplyFacilitator applicationData={applicationData} />
      <ApplyMentor applicationData={applicationData} />
      <ApplyExpert applicationData={applicationData} />
      <ApplyEnthusiast applicationData={applicationData} />
      <br />
      <p>
        If you need to contact the Applicant for more information, please send
        an email to {applicationData.applicant_email}
      </p>
      <br />
      <p>
        Are you ready to assess this application? <Link to="/assess">YES</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/events">NO</Link>
      </p>
      <br />
    </div>
  );
};
export default ApplicationPage;
