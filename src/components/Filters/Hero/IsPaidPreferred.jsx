import React from "react";

function IsPaidPreferred (props) {
    const { heroData } = props;
    const IsPaidPreferred = heroData.is_paid_preferred

    return (
        IsPaidPreferred ?
        <div>Would prefer to paid for Hero opportunities if possible</div> :
        <div>Is willing to be an unpaid Hero</div>
    )
}

export default IsPaidPreferred;