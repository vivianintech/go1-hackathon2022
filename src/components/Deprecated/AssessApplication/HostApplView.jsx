import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApplicationCard from "../ApplicationCard/ApplicationCard";

const HostApplView = () => {
  const [eventData, setEventData] = useState({
    events: [],
    applications: [],
    review_event: [],
  });
  const { id } = useParams();

  window.localStorage.getItem("user");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}events/${id}/`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setEventData(data);
      });
  }, [id]);

  return (
    <div>
      <h3>Hero Applications</h3>
      <ul>
        {eventData.applications.map((applicationData, key) => {
          return (
            <ApplicationCard key={key} applicationData={applicationData} />
          );
        })}
      </ul>
    </div>
  );
};

export default HostApplView;
