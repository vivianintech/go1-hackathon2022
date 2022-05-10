import React from "react";

function SkillsExpert (props) {
    const { eventData } = props;
    const SkillsExpert = eventData.skills_expert

    return (
        SkillsExpert ?
        <div>Topic Expert</div> :
        <div></div>
    )
}

export default SkillsExpert;