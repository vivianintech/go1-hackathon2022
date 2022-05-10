import React from "react";

function SkillsEnthusiast (props) {
    const { eventData } = props;
    const SkillsEnthusiast = eventData.skills_enthusiast 

    return (
        SkillsEnthusiast ?
        <div>Tech Enthusiast</div> :
        <div></div>
    )
}

export default SkillsEnthusiast;