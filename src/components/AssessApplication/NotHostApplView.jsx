import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IsAnon from "../Filters/Application/IsAnon";

function NotHostApplView(props) {
    const [eventData, setEventData] = useState({ events: [], applications: [], review_event: [] });
    const { id } = useParams();

    window.localStorage.getItem("user")

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}events/${id}/`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setEventData(data);
        });
    }, [id]);


    return (
        <div>
            <h3>Event Heroes</h3>
            <ul>
                {eventData.applications.map((applicationData, key) => {
                    const IsAccepted = applicationData.is_accepted

                    return (
                        IsAccepted ?
                        <li key={key}>
                            <IsAnon applicationData={ applicationData }/>
                            <p>Application: { applicationData.reason_apply }</p>
                            <br/>
                        </li> :
                        <div></div>
                    );
                })}
            </ul>

        </div>
    );
}

export default NotHostApplView;