import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUpForm = () => {
  const initialUserData = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  };
  const [user, setNewUser] = useState(initialUserData);

  const handleChange = e => {
    e.preventDefault();
    const { id, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push("/about");
  }, [history]);

  return (
    <form className="form-wrapper">
      <div className="form-header">
        <h1>Welcome to Go1's Expert Marketplace</h1>
        <p>Sign up, then become a Mentor</p>
      </div>

      <div className="form-inputs">
        <div className="form-input">
          <label htmlFor="username">Create a Username</label>
          <input
            type="text"
            id="username"
            placeholder="Create a Username"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            id="password"
            placeholder="Minimum 8 characters"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="email">Add Your Email</label>
          <input
            type="text"
            id="email"
            placeholder=""
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-confirm">
        <h2>
          Please confirm your details and click "Sign Up" to create an account
        </h2>
        <div className="form-confirm-details">
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="button-area">
          <button onClick={handleSubmit}>SIGN UP</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
