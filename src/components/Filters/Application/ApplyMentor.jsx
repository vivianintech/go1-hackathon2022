import React from "react";

function ApplyMentor (props) {
    const { applicationData } = props;
    const ApplyMentor = applicationData.apply_mentor 

    return (
        ApplyMentor ?
        <div>Supportive Mentor</div> :
        <div></div>
    )
}

export default ApplyMentor;