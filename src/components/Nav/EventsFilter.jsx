import React from "react";
import { Link } from "react-router-dom";
import "./Filter.css";

const EventsFilter = () => {
  return (
    <nav>
      <div className="events-filter">
        <div className="events-filter1">
          <h3>Filter by Heroes Needed: </h3>
          <Link to="/keynote">Keynote Speakers</Link>
          &nbsp;|&nbsp;
          <Link to="/facilitator">Workshop Facilitators</Link>
          &nbsp;|&nbsp;
          <Link to="/mentor">Supportive Mentors</Link>
          &nbsp;|&nbsp;
          <Link to="/expert">Topic Experts</Link>
          &nbsp;|&nbsp;
          <Link to="/enthusiast">Tech Enthusiasts</Link>
          &nbsp;||&nbsp;
          <Link to="/events">ALL EVENTS</Link>
        </div>
        <div className="events-filter2">
          <h3>Filter by Event Size (estimated number of attendees): </h3>
          <Link to="/intimate">Less than 50</Link>
          &nbsp;|&nbsp;
          <Link to="/small">50 to 100</Link>
          &nbsp;|&nbsp;
          <Link to="/medium">100 to 500</Link>
          &nbsp;|&nbsp;
          <Link to="/large">500 to 1000</Link>
          &nbsp;|&nbsp;
          <Link to="/verylarge">1000 to 5000</Link>
          &nbsp;||&nbsp;
          <Link to="/huge">More than 5000</Link>
          &nbsp;||&nbsp;
          <Link to="/events">ALL EVENTS</Link>
        </div>
      </div>
    </nav>
  );
};

export default EventsFilter;
