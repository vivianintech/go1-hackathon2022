import React from "react";

function ApplyFacilitator (props) {
    const { applicationData } = props;
    const ApplyFacilitator = applicationData.apply_facilitator 

    return (
        ApplyFacilitator ?
        <div>Workshop Facilitator</div> :
        <div></div>
    )
}

export default ApplyFacilitator;