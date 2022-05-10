import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./HostPage.css";


function HostPage() {
    const [hostData, setHostData] = useState({
        id: window.localStorage.getItem("id"),
        first_name:"",
        last_name:"",
        organisation_name:"",
        organisation_logo:"",
        host_phone:""
    });

    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/host/${id}/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setHostData(data)
        });
    });

    return (
        <div className="page-wrapper">
            <div className='host-name'>
                <h2>Organisation Name: {hostData.organisation_name}</h2>
            </div>

            <div className="host-wrapper">
                <div className='host-image'>
                    <img src={ hostData.organisation_logo } alt="organisation_logo" />
                </div>
                <div className='host-details'>
                    <p>Contact Person: { hostData.first_name } { hostData.last_name }</p>
                    <p>Organisation Phone: { hostData.host_phone }</p>
                    <Link to="/becomehero"> <button type='button'>Become a Hero</button></Link>
                    <Link to="/becomehost"><button type='button'>Become a Host</button></Link>
                </div>
            </div>

        </div>
    );
}

export default HostPage;