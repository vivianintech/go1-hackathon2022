import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignInForm = () => {
  const initialCredentials = {
    username: "",
    password: "",
    user_id: "",
  };
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push("/heroes");
  }, [history]);

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
