import React from "react";
import { useHistory } from "react-router-dom";

const SignOutForm = () => {
  const history = useHistory();

  const handleSignout = e => {
    e.preventDefault();
    window.localStorage.clear("");
    history.push("/");
  };

  return (
    <div className="button-area">
      <button onClick={handleSignout}>SIGN OUT</button>
    </div>
  );
};

export default SignOutForm;
