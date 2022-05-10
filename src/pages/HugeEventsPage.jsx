import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard/EventCard";
import EventsFilter from "../components/Nav/EventsFilter";

const EventsPage = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}events/huge/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setEventList(data);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="cover">
        <img
          src="https://res.cloudinary.com/dikrdv4qy/image/upload/v1606439814/Background_bdvap8.png"
          alt=""
        ></img>
        <div class="cover-text">DEEP TECH EVENTS</div>
        <Link className="ext-link-1" to="/newevent">
          <button className="page-button" type="button">
            Create an Event
          </button>
        </Link>
      </div>

      <div className="page-header">
        <EventsFilter />
      </div>

      <div className="page-main">
        {eventList.map((eventData, key) => {
          return <EventCard key={key} eventData={eventData} />;
        })}
      </div>
    </div>
  );
};

export default EventsPage;
