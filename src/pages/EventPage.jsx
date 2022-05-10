import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EventRating from "../components/Filters/Reviews/EventRating";
import IsEventHost from "../components/Filters/Users/IsEventHost";
import SkillsKeynote from "../components/EventCard/SkillsKeynote";
import SkillsFacilitator from "../components/EventCard/SkillsFacilitator";
import SkillsMentor from "../components/EventCard/SkillsMentor";
import SkillsExpert from "../components/EventCard/SkillsExpert";
import SkillsEnthusiast from "../components/EventCard/SkillsEnthusiast";
import PaidProbono from "../components/EventCard/PaidProbono";
import EventSize from "../components/EventCard/EventSize";
import "./EventPage.css";

const EventPage = () => {
  const initialEventData = {
    events: [],
    applications: [],
    review_event: [],
  };
  const [eventData, setEventData] = useState(initialEventData);
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

  window.localStorage.setItem("event", eventData.id);
  window.localStorage.setItem("owner", eventData.owner);
  window.localStorage.setItem("host_username", eventData.host_username);
  window.localStorage.setItem("eventName", eventData.event_name);

  return (
    <div className="page-wrapper">
      <div className="event-title">
        <h1>{eventData.event_name}</h1>
      </div>

      <div className="event-wrapper1">
        <div className="event-image">
          <img src={eventData.image} alt="" />
        </div>
        <div className="event-description">
          <h5>Location: {eventData.event_location}</h5>
          <p>Date: {eventData.event_date} </p>
          <p>Time: {eventData.event_time} </p>
          <p>Details: {eventData.event_description}</p>
          We are expecting this to be a: <EventSize eventData={eventData} />
          <p>
            The Event Host is seeking Heroes for the following opportunities:{" "}
          </p>
          <SkillsKeynote eventData={eventData} />
          <SkillsFacilitator eventData={eventData} />
          <SkillsMentor eventData={eventData} />
          <SkillsExpert eventData={eventData} />
          <SkillsEnthusiast eventData={eventData} />
          <PaidProbono eventData={eventData} />
          <br />
          <p>Are you interested in being a Hero for this Event?</p>
          <Link to="/apply">
            <button type="button">Apply to be a Hero</button>
          </Link>
        </div>
      </div>
      <br />
      <div className="event-wrapper2">
        <div className="event-review1">
          <h3>Event Reviews</h3>
          <div className="event-rating">
            <ul>
              {eventData.review_event.map((reviewData, key) => {
                return (
                  <li key={key}>
                    <p>Comment: {reviewData.comment}</p>
                    <p>
                      Rating: <EventRating reviewData={reviewData} />
                    </p>
                    <p>Review by: {reviewData.reviewer}</p>
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
          <p>
            Have you been a Hero for this Event in the past? Would you like to
            write a review?
            <Link to="/newreviewevent">
              <button type="button">Review this event</button>
            </Link>
          </p>
        </div>
        <div className="event-review2">
          <IsEventHost eventData={eventData} />
          <br />
          <p>
            Would you like to attend this Event? Get a ticket{" "}
            {eventData.event_ticket}
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
