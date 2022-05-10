import React from "react";

function PaidProbono (props) {
    const { eventData } = props;
    const PaidProbono = eventData.is_paid 

    return (
        PaidProbono ?
        <div>Payment for this opportunity is negotiable.</div> :
        <div>This is a probono opportunity, we have no budget to pay Heroes.</div>
    )
}

export default PaidProbono;