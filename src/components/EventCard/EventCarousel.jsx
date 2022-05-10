import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import EventCard from "./EventCard";
import "./EventCarousel.css";


function EventCarousel() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}events/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setEventList(data);
        });
    }, []);

    return (
        <div className="styling-eventCarousel">
        <Carousel itemsToShow={2}>
            {eventList.map(eventData => <div key={eventData.id}><EventCard eventData={eventData}/></div>)}
        </Carousel>
        </div>
    );
}

export default EventCarousel;