import React from "react";
import { Link } from "react-router-dom";

function UnauthMessage () {
    return (
        <div>
            <h2>That didn't work...</h2>
            <p>The action you are trying to take, is only available for some users.</p>
            <p>If you believe you should be able to do that action, please <Link to="/signin">sign in</Link> and try again.</p>
        </div>
    )
}

export default UnauthMessage;