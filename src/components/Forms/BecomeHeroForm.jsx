import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Forms.css";

const BecomeHeroForm = () => {
  const initialHeroData = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    rec_newsletter: "",
    year_of_birth: "",
    hero_phone: "",
    hero_location: "",
    hero_image: "",
    linkedin_url: "",
    hero_bio: "",
    gender: "",
    pref_pronoun: "",
    has_bluecard: "",
    has_yellowcard: "",
    is_virtual_accepted: "",
    is_paid_preferred: "",
    culture: "",
  };
  const [heroData, setHeroData] = useState(initialHeroData);

  const history = useHistory();

  const handleHeroChange = e => {
    e.preventDefault();
    const { id, value } = e.target;
    setHeroData(prevHeroData => ({
      ...prevHeroData,
      [id]: value,
    }));
  };

  const postHeroData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/becomehero/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(heroData),
      },
    );
    return response.json();
  };

  const handleHeroSubmit = e => {
    e.preventDefault();
    postHeroData().then(response => {
      console.log(response);
      window.localStorage.setItem("username", response.username);
      history.push("/signin");
    });
  };

  const handleHeroCancel = e => {
    e.preventDefault();
    history.push("/");
    window.location.reload(true);
  };

  return (
    <form className="form-wrapper">
      <div className="form-header">
        <h2>Sign Up To Be A Deep Tech Hero!</h2>
        <p>
          In Deep Tech we value and celebrate all cultures, genders and
          personalities. Your information will help us to build a tech community
          where diversity is respected
        </p>
      </div>

      <div className="form-inputs">
        <div className="form-input">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" onChange={handleHeroChange} />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={handleHeroChange} />
        </div>
        <div className="form-input">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" onChange={handleHeroChange} />
        </div>
        <div className="form-input">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" onChange={handleHeroChange} />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleHeroChange} />
        </div>
        <div className="form-input">
          <label htmlFor="year_of_birth">Year Of Birth</label>
          <input
            type="number"
            id="year_of_birth"
            min="1900"
            onChange={handleHeroChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="hero_phone">Phone Number</label>
          <input type="text" id="hero_phone" onChange={handleHeroChange} />
        </div>

        <div className="form-input">
          <label htmlFor="hero_location">Location</label>
          <input type="text" id="hero_location" onChange={handleHeroChange} />
        </div>
        <div className="form-input">
          <label htmlFor="hero_image">Profile Image</label>
          <input
            type="url"
            id="hero_image"
            placeholder="Please Enter URL"
            onChange={handleHeroChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="linkedin_url">LinkedIn Profile</label>
          <input type="url" id="linkedin_url" onChange={handleHeroChange} />
        </div>

        <div className="form-input">
          <label htmlFor="culture">What culture do you belong to?</label>
          <input type="text" id="culture" onChange={handleHeroChange} />
        </div>

        <div className="form-input">
          <label htmlFor="hero_bio">Bio</label>
          <input type="text" id="hero_bio" onChange={handleHeroChange} />
        </div>
        <div className="form-input-dropdown">
          <label htmlFor="gender">I Identify my gender as</label>
          <select type="text" id="gender" onChange={handleHeroChange}>
            <option value="" disabled selected></option>
            <option value="transgender">Transgender</option>
            <option value="cisgender">Cisgender</option>
            <option value="agender">Agender</option>
            <option value="genderqueer">Genderqueer</option>
            <option value="feminine">Feminine</option>
            <option value="masculine">Masculine</option>
            <option value="prefer not to say">Prefer Not To Say</option>
          </select>
        </div>
        <div className="form-input-dropdown">
          <label htmlFor="pref_pronoun">I would like to be called</label>
          <select type="text" id="pref_pronoun" onChange={handleHeroChange}>
            <option value="" disabled selected></option>
            <option value="they/them">They/Them</option>
            <option value="she/her">She/Her</option>
            <option value="he/him">He/Him</option>
            <option value="ze/zem">Ze/Zem</option>
            <option value="prefer not to say">Prefer Not To Say</option>
          </select>
        </div>

        <div className="form-input-radio">
          <p>Do You Hold A Blue Card?</p>
          <label id="input-radio-1" htmlFor="has_bluecard">
            <input
              type="radio"
              id="has_bluecard"
              name="has_bluecard"
              value="true"
              onChange={handleHeroChange}
            />{" "}
            Yes
          </label>
          <label id="input-radio-1" htmlFor="has_bluecard">
            <input
              type="radio"
              id="has_bluecard"
              name="has_bluecard"
              value="false"
              onChange={handleHeroChange}
            />{" "}
            No
          </label>
        </div>

        <div className="form-input-radio">
          <p>Do You Hold A Yellow Card?</p>
          <label id="input-radio-1" htmlFor="has_yellowcard">
            <input
              type="radio"
              id="has_yellowcard"
              name="has_yellowcard"
              value="true"
              onChange={handleHeroChange}
            />{" "}
            Yes
          </label>
          <label id="input-radio-1" htmlFor="has_yellowcard">
            <input
              type="radio"
              id="has_yellowcard"
              name="has_yellowcard"
              value="false"
              onChange={handleHeroChange}
            />{" "}
            No
          </label>
        </div>

        <div className="form-input-radio">
          <p>Do You Accept Virtual Event?</p>
          <label id="input-radio-1" htmlFor="is_virtual_accepted">
            <input
              type="radio"
              id="is_virtual_accepted"
              name="is_virtual_accepted"
              value="true"
              onChange={handleHeroChange}
            />{" "}
            Yes
          </label>
          <label id="input-radio-1" htmlFor="is_virtual_accepted">
            <input
              type="radio"
              id="is_virtual_accepted"
              name="is_virtual_accepted"
              value="false"
              onChange={handleHeroChange}
            />{" "}
            No
          </label>
        </div>
        <div className="form-input-radio">
          <p>Do You Prefer Paid Events?</p>
          <label id="input-radio-1" htmlFor="is_paid_preferred">
            <input
              type="radio"
              id="is_paid_preferred"
              name="is_paid_preferred"
              value="true"
              onChange={handleHeroChange}
            />{" "}
            Yes
          </label>
          <label id="input-radio-1" htmlFor="is_paid_preferred">
            <input
              type="radio"
              id="is_paid_preferred"
              name="is_paid_preferred"
              value="false"
              onChange={handleHeroChange}
            />{" "}
            No
          </label>
        </div>

        <div className="form-input-radio">
          <p>Do you want to receive our newsletter?</p>
          <label id="input-radio-1" htmlFor="rec_newsletter">
            <input
              type="radio"
              id="rec_newsletter"
              name="rec_newsletter"
              value="true"
              onChange={handleHeroChange}
            />{" "}
            Yes
          </label>
          <label id="input-radio-1" htmlFor="rec_newsletter">
            <input
              type="radio"
              id="rec_newsletter"
              name="rec_newsletter"
              value="false"
              onChange={handleHeroChange}
            />{" "}
            No
          </label>
        </div>

        <div className="button-area">
          <button type="cancel" onClick={handleHeroCancel}>
            CANCEL
          </button>
          <button type="submit" onClick={handleHeroSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default BecomeHeroForm;
