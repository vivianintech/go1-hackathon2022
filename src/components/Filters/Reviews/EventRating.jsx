import React from "react";

function EventRating(props) {
    const { reviewData } = props
    const rating = reviewData.rating

    switch(rating) {
        case 1:
            return <img src="https://res.cloudinary.com/flifree/image/upload/v1606651074/Deep%20Tech%20Heroes/1-star_ihw3a8.png" alt="one star rating"/>
        case 2:
            return <img src="https://res.cloudinary.com/flifree/image/upload/v1606651075/Deep%20Tech%20Heroes/2-stars_k2h7wv.png" alt="two star rating"/>
        case 3:
            return <img src="https://res.cloudinary.com/flifree/image/upload/v1606651077/Deep%20Tech%20Heroes/3-stars_pd1og7.png" alt="three star rating"/>
        case 4:
            return <img src="https://res.cloudinary.com/flifree/image/upload/v1606651079/Deep%20Tech%20Heroes/4-stars_z6ovci.png" alt="four star rating"/>
        case 5:
            return <img src="https://res.cloudinary.com/flifree/image/upload/v1606651082/Deep%20Tech%20Heroes/5-stars_qxvbub.png" alt="five star rating"/>
    }
};

export default EventRating;