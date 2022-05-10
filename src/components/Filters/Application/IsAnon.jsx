import React from "react";
import { Link } from "react-router-dom";

function IsAnon (props) {
    const { applicationData } = props;
    const IsAnon = applicationData.is_anon 

    return (
        IsAnon ?
        <div>Applicant: Anonymous</div> :
        <div>Applicant: <Link to={`/hero/${applicationData.owner}`}>{ applicationData.applicant_name }</Link></div>
    )
}

export default IsAnon;