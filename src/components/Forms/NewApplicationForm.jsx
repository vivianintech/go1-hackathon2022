import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Forms.css';

function NewApplicationForm() {

    const history = useHistory();
    const eventid = window.localStorage.getItem("event")
    const eventName = window.localStorage.getItem("eventName");


    const [application, setNewApplication] = useState({
        event_id: eventid,
        reason_apply: "",
        apply_keynote: false,
        apply_facilitator: false,
        apply_mentor: false,
        apply_expert: false,
        apply_enthusiast: false,
        is_anon: false,
        event: eventid,
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewApplication((prevApplication) => ({
            ...prevApplication,
            [id]: value,
        }));
    }

    
    const postData = async () => {
        const token = window.localStorage.getItem("token")

        const response = await fetch (
            `${process.env.REACT_APP_API_URL}events/apply/`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(application),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
            window.localStorage.setItem("application", response.application);
            history.push("/confirmapplication");
        });
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push("/");
        window.location.reload(true);
    };

    return (
            <form className="form-wrapper">
                <div className="form-header">
                    <h2>Apply for an Event</h2>
                    <p>You will need to be signed in as a Hero to be able to apply for an Event.</p>
                    <p>Already a Hero? <Link to="/signin">Sign In</Link></p>
                    <p>Not a Hero yet? <Link to="/becomehero">Become a Hero</Link></p>
                </div>
                <div className="form-inputs">
                    <div className="form-input-checkbox">
                        <p>Which Hero role/s are you applying for?</p>
                        <div>
                            <input
                                
                                type='checkbox'
                                id='apply_keynote'
                                value='true'
                                onChange={handleChange}
                            />
                            <label htmlFor='apply_keynote'>Keynote Speaker</label>
                        </div>
                        
                        <div>
                        <input
                            
                            type='checkbox'
                            id='apply_facilitator'
                            value='true'
                            onChange={handleChange}
                        />
                        <label htmlFor='apply_facilitator'>Workshop Facilitator</label>
                        </div> 

                        <div>
                            <input
                                
                                type='checkbox'
                                id='apply_mentor'
                                value='true'
                                onChange={handleChange}
                            />
                            <label htmlFor='apply_mentor'>Supportive Mentor</label>
                        </div>

                        <div>
                            <input
                                
                                type='checkbox'
                                id='apply_expert'
                                value='true'
                                onChange={handleChange}
                            />
                            <label htmlFor='apply_expert'>Topic Expert</label>
                        </div>

                        <div>
                            <input
                                
                                type='checkbox'
                                id='apply_enthusiast'
                                value='true'
                                onChange={handleChange}
                            />
                            <label htmlFor='apply_enthusiast'>Deep Tech Enthusiast</label>
                        </div>

                    </div>
                    <div className="form-input">
                            <label htmlFor='reason_apply'>Tell us why you would like to be a Hero for this Event:</label>
                            <input
                                type='text'
                                id='reason_apply'
                                required
                                onChange={handleChange}
                            />
                    </div> 

                    <div className="form-input-checkbox">
                        <div>
                            <input
                                
                                type='checkbox'
                                id='is_anon'
                                value='true'
                                onChange={handleChange}
                            />
                            <label htmlFor='is_anon'>Would you prefer to remain anonymous to the public?</label>
                        </div>
                    </div>
                </div>

                <div className="form-confirm">
                    <h2>Check the details below are correct, then click Submit.</h2>
                    <div className="form-confirm-details">
                        <p><b>Event name: </b>{ eventName }</p>
                        <p><b>Your reason for applying to be a Hero at this Event: </b>{ application.reason_apply }</p>
                    </div>
                    <div className="button-area">
                        <button type="cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" onClick={handleSubmit}>Apply</button>
                    </div>
                </div>

            </form>
    );
}
    export default NewApplicationForm;