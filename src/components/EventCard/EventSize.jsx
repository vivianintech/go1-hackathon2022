import React from "react";

function EventSize(props) {
    const { eventData: {event_size: size} } = props
    // const size = event_size
    console.log(size)

    switch(size) {
        case 1:
            return <span>Intimite event of up to 50 people</span>
        case 2:
            return <span>Small event of between 50 and 100 people</span>
        case 3:
            return <span>Medium event of between 100 and 500 people</span>
        case 4:
            return <span>Large event of 500 to 1000 people</span>
        case 5:
            return <span>Very Large event of 1000 to 5000 people</span>
        case 6:
            return <span>Major event of over 5000 people</span>
        default: 
            return <span>Intimite event of up to 50 people</span>
    }
};

export default EventSize;