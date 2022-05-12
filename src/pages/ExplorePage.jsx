import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard/EventCard";
import EventsFilter from "../components/Nav/EventsFilter";
import "./Style/ExplorePage.css";

const ExplorePage = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}events/`, {
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
    <a href="/experts/1">
    <img src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652349151/Results_page_hevxvk.png" alt="results page" style={{width: '100vw'}}/>
    </a>
  );
};

export default ExplorePage;
