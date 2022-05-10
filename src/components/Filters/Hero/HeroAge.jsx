import React from "react";

function HeroAge(props) {
    const { heroData: { year_of_birth: birthyear } } = props
    const today = new Date();
    const currentyear = today.getFullYear();
    const age = currentyear - birthyear;

    return age;
};

export default HeroAge;
