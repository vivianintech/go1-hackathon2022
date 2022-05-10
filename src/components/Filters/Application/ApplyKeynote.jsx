import React from "react";

function ApplyKeynote (props) {
    const { applicationData } = props;
    const ApplyKeynote = applicationData.apply_keynote 

    return (
        ApplyKeynote ?
        <div>Keynote Speaker</div> :
        <div></div>
    )
}

export default ApplyKeynote;