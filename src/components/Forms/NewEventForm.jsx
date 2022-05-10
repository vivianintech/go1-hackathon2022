import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Forms.css";

const NewEventForm = () => {
  const initialEventData = {
    event_name: "",
    event_description: "",
    event_location: "",
    event_date: "",
    event_time: "",
    event_ticket: "",
    skills_keynote: false,
    skills_facilitator: false,
    skills_mentor: false,
    skills_expert: false,
    skills_enthusiast: false,
    event_size: "",
    is_paid: "",
    image: "",
  };

  const [event, setNewEvent] = useState({ initialEventData });

  const handleChange = e => {
    const { id, value } = e.target;
    setNewEvent(prevEvent => ({
      ...prevEvent,
      [id]: value,
    }));
  };

  const history = useHistory();
  // var statuscode = 0;

  const postData = async () => {
    const token = window.localStorage.getItem("token");

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}events/new/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(event),
      },
    );
    return response.json();
  };

  const handleSubmit = e => {
    e.preventDefault();
    postData().then(response => {
      window.localStorage.setItem("event", response.event);
      history.push("/events");
    });
  };

  const handleCancel = e => {
    e.preventDefault();
    history.push("/");
    window.location.reload(true);
  };

  return (
    <form className="form-wrapper">
      <div className="form-header">
        <h2>Create New Event</h2>
        <p>
          Include instructions for how to prepare new event submission here.
        </p>
        <p>
          You will need to be signed in as a Host to be able to create an Event.
        </p>
        <p>
          Already a Host? <Link to="/signin">Sign In</Link>
        </p>
        <p>
          Not a Host yet? <Link to="/becomehost">Sign Up</Link>
        </p>
      </div>

      <div className="form-inputs">
        <div className="form-input">
          <label htmlFor="event_name">Event Name</label>
          <input type="text" id="event_name" required onChange={handleChange} />
        </div>

        <div className="form-input">
          <label htmlFor="event_description">Event Details</label>
          <input
            type="textarea"
            id="event_description"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="event_location">Event Location</label>
          <input type="text" id="event_location" onChange={handleChange} />
        </div>

        <div className="form-input">
          <label htmlFor="event_date">Event Date</label>
          <input type="date" id="event_date" onChange={handleChange} />
        </div>

        <div className="form-input">
          <label htmlFor="event_time">Event Start Time</label>
          <input type="time" id="event_time" onChange={handleChange} />
        </div>

        <div className="form-input">
          <label>Event Ticket Link</label>
          <input type="url" id="event_ticket" onChange={handleChange} />
        </div>

        <div className="form-input">
          <label>Event Image or Logo</label>
          <input
            type="url"
            id="image"
            placeholder="Please enter a URL"
            onChange={handleChange}
          />
        </div>

        <div className="form-input-dropdown">
          <label htmlFor="event_size">Event Size</label>
          <select id="event_size" onChange={handleChange}>
            <option value="1">Intimate - less than 50 attendees</option>
            <option value="2">Small - 50 to 100 attendees</option>
            <option value="3">Medium - 100 to 500 attendees</option>
            <option value="4">Large - 500 to 1000 attendees</option>
            <option value="5">Very Large - 1000 to 5000 attendees</option>
            <option value="6">Huge - greater than 5000 attendees</option>
          </select>
        </div>

        <div id="new-event">
          <p>
            Is there a budget allocation to pay Heroes for their involvement?
          </p>
          <label id="input-radio-1" htmlFor="is_paid">
            Payment Negotiable
          </label>

          <input
            type="radio"
            id="is_paid"
            value="true"
            onChange={handleChange}
          />

          <label id="input-radio-1" htmlFor="is_paid">
            ProBono Opportunity
          </label>

          <input
            type="radio"
            id="is_paid"
            value="false"
            onChange={handleChange}
          />
        </div>

        <div className="form-input-checkbox">
          <p>What type of Heroes do you need for your event?</p>
          <div className="1">
            <input
              name="skills"
              type="checkbox"
              id="skills_keynote"
              value="true"
              onChange={handleChange}
            />
            <label className="input-checkbox" htmlFor="skills_keynote">
              Keynote Speaker
            </label>
          </div>

          <div className="1">
            <input
              name="skills"
              type="checkbox"
              id="skills_facilitator"
              value="true"
              onChange={handleChange}
            />
            <label className="input-checkbox" htmlFor="skills_facilitator">
              Workshop Facilitator
            </label>
          </div>

          <div className="1">
            <input
              name="skills"
              type="checkbox"
              id="skills_mentor"
              value="true"
              onChange={handleChange}
            />
            <label className="input-checkbox" htmlFor="skills_mentor">
              Supportive Mentor
            </label>
          </div>

          <div className="1">
            <input
              name="skills"
              type="checkbox"
              id="skills_expert"
              value="true"
              onChange={handleChange}
            />
            <label className="input-checkbox" htmlFor="skills_expert">
              Topic Expert
            </label>
          </div>

          <div className="1">
            <input
              name="skills"
              type="checkbox"
              id="skills_enthusiast"
              value="true"
              onChange={handleChange}
            />
            <label className="input-checkbox" htmlFor="skills_enthusiast">
              Deep Tech Enthusiast
            </label>
          </div>
        </div>
      </div>

      <div className="form-confirm">
        <h2>Please confirm the below details and click "Publish New Event"</h2>
        <div className="form-confirm-details">
          <p>
            <b>Event: </b>
            {event.event_name}
          </p>
          <p>
            <b>Details: </b>
            {event.event_description}
          </p>
          <p>
            <b>Location: </b>
            {event.event_location}
          </p>
          <p>
            <b>Keynote Speaker: </b>
            {event.skills_keynote}
          </p>
          <p>
            <b>Workshop Facilitator: </b>
            {event.skills_facilitator}
          </p>
          <p>
            <b>Supportive Mentor: </b>
            {event.skills_mentor}
          </p>
          <p>
            <b>Topic Expert: </b>
            {event.skills_expert}
          </p>
          <p>
            <b>Tech Enthusiast: </b>
            {event.skills_enthusiast}
          </p>
          <p>
            <b>Event Size: </b>
            {event.event_size}
          </p>
          <p>
            <b>Payment available: </b>
            {event.is_paid}
          </p>
          <p>
            <b>Event Image: </b>
            {event.image}
          </p>
        </div>

        <div className="button-area">
          <button type="cancel" onClick={handleCancel}>
            CANCEL
          </button>
          <button type="submit" onClick={handleSubmit}>
            PUBLISH NEW EVENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewEventForm;
