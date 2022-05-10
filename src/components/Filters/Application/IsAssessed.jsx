import React from "react";
// import { Link } from "react-router-dom";

function IsAssessed (props) {
    const { applicationData } = props;
    const IsAssessed = applicationData.is_assessed 

    return (
        IsAssessed ?
        <div>Status: Assessed</div> :
        <div>Status: Not yet assessed</div>
    )
}

export default IsAssessed;