import React, { useState, useEffect } from "react";
import ApplicationCard from "../../components/ApplicationCard/ApplicationCard";

const ApplicationsPage = () => {
  const [applicationList, setApplicationList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}applications/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setApplicationList(data);
      });
  }, []);

  return (
    <div id="applications">
      <div>
        <h1>Applications</h1>
      </div>
      <div id="application-list">
        {applicationList.map((applicationData, key) => {
          return (
            <ApplicationCard key={key} applicationData={applicationData} />
          );
        })}
      </div>
    </div>
  );
};

export default ApplicationsPage;
