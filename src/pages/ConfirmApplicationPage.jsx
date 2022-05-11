import React from "react";
import { Link } from "react-router-dom";

const ConfirmApplicationPage = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/flifree/image/upload/v1604218641/Thank_you_zunwxt.jpg"
        alt="Thank you in many languages on bright coloured paper."
      ></img>
      <h1>Thank you!</h1>
      <p>Your application has been received.</p>
      <p>Our team will be in touch soon to discuss the finer details.</p>
      <p>
        Encourage your friends and colleagues to become Go1's Expert Marketplace
        too.
      </p>
      <p>Share the event on Facebook, Twitter or LinkedIn.</p>
      <p>
        Learn about other <Link to="/events">Events</Link> who need heroes.
      </p>
      <p>
        If you have any questions, please <Link to="/contact">contact us</Link>!
      </p>
    </div>
  );
};

export default ConfirmApplicationPage;
