import React from "react";

function IsVirtual (props) {
    const { heroData } = props;
    const IsVirtual = heroData.is_virtual_accepted

    return (
        IsVirtual ?
        <div>Is willing to be a Hero online for virtual events if required</div> :
        <div>Is only available for in person events</div>
    )
}

export default IsVirtual;