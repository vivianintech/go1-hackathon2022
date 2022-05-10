import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Forms.css";

const BecomeHostForm = (props) => {
    const [hostData, setHostData] = useState({
        username:"",
        email:"",
        first_name:"",
        last_name: "",
        password:"",
        rec_newsletter:"",
        organisation_name:"",
        organisation_logo:"",
        host_phone:""
    });

    const history = useHistory();

    const handleHostChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setHostData((prevHostData) => ({
            ...prevHostData,
            [id]: value
        }));
    };

    const postHostData = async() => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/becomehost/`, 
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(hostData),
        });
        return response.json();
    };

    const handleHostSubmit = (e) => {
        e.preventDefault();
        postHostData().then((response) => {
            console.log(response);
            window.localStorage.setItem("username", response.username);
            history.push("/signin");
        });
    };

    const handleHostCancel = (e) => {
        e.preventDefault();
        history.push("/");
        window.location.reload(true);
    };

    return (
        <form className="form-wrapper">
            <div className="form-header">
                <h2>Become a Host</h2>
                <p>Do you organise events related to Deep Tech? Become a Host to list your events and be found by diverse Heroes.</p>
                <p>Already a Host? <Link to="/signin">Sign In</Link></p>
            </div>

            <div className="form-inputs">
                <div className="form-input">
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" onChange={handleHostChange}/>
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={handleHostChange}/>
                </div>
                <div className="form-input">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id="first_name" onChange={handleHostChange}/>
                </div>
                <div className="form-input">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name" onChange={handleHostChange}/>
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleHostChange}/>
                </div>
                
                <div className="form-input">
                    <label htmlFor="organisation_name">Your Organisation Name</label>
                    <input type="text" id="organisation_name" onChange={handleHostChange}/>
                </div>
                <div className="form-input">
                    <label htmlFor="organisation_logo">Your Organisation Logo</label>
                    <input type="url" id="organisation_logo" onChange={handleHostChange}/>
                </div>
                <div className="form-input">
                    <label htmlFor="host_phone">Your Organisation Phone</label>
                    <input type="text" id="host_phone" onChange={handleHostChange}/>
                </div>
                <div className="form-input-radio">
                    <p>Do you want to receive our newsletter?</p>
                    <label id="input-radio-1" htmlFor="rec_newsletter">
                        <input type="radio" id="rec_newsletter" name="rec_newsletter" value="true" onChange={handleHostChange}/> Yes
                    </label>
                    <label id="input-radio-1" htmlFor="rec_newsletter">
                        <input type="radio" id="rec_newsletter" name="rec_newsletter" value="false" onChange={handleHostChange}/> No
                    </label>
                </div>

                <div className="button-area">
                    <button type="cancel" onClick={handleHostCancel}>CANCEL</button>
                    <button type="submit" onClick={handleHostSubmit}>SUBMIT</button>
                </div>
                
            </div>
            
        </form>
    );
}

export default BecomeHostForm;
