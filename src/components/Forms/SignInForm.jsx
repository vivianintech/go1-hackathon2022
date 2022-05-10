import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignInForm = () => {
  const initialCredentials = {
    username: "",
    password: "",
    user_id: "",
  };
  const [credentials, setCredentials] = useState(initialCredentials);

  const history = useHistory();

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      },
    );
    return response.json();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then(response => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("user", credentials.username);
        history.push("/events");
        window.location.reload(true);
      });
    }
  };

  return (
    <form className="form-wrapper">
      <div className="form-header">
        <h2>It is great to see you again! </h2>
        <p>Please Sign in to continue</p>
      </div>

      <div className="form-inputs">
        <div className="form-input">
          <label htmlFor="username">Enter your username: </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Enter your password: </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <p id="password-reset">Forgot Your Password? Reset Password</p>
        <p>
          New to Mentor Marketplace? <Link to="/signup">SIGN UP</Link>
        </p>
        <div className="button-area">
          <button type="submit" onClick={handleSubmit}>
            SIGN IN
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
