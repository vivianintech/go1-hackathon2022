import React, { useState, useEffect } from "react";
import {ButtonFilled} from "@go1d/go1d";
import ExpertCard from "../components/UserCard/ExpertCard";
import "./Style/HomePage.css";
import { EXPERTS, SERVICES } from "../Data/Constantsv2";
import "./Style/ExpertsPage.css";
import ServiceCard from "../components/UserCard/ServiceCard";
import IconUser from "@go1d/go1d/build/components/Icons/User";

const ExpertsPage = () => {
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/heros`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setHeroList(data);
      });
  }, []);

  return (
    <>
      <div className="home-page">
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '32px', marginBottom: '32px'}}>
          <div className="header-landing-page">Join our coaching circle</div>
          <ButtonFilled color="accent" width="auto" icon={IconUser}><div style={{fontFamily: 'Manrope'}}>Update profile to join</div></ButtonFilled>
        </div>
        <div className="cover">

          <img
            src="https://res.cloudinary.com/dyr0u2nqe/image/upload/v1652319506/Banner_ok5dvq.png"
            alt="go1-banner" style={{objectFit: 'contain'}}
          ></img>
          <div className="above-img">
             <div style={{color: '#114954', fontWeight: 'bold', fontSize: '24px', paddingBottom: '16px'}}>Find an expert</div>
             <div style={{paddingBottom: '32px'}}>Connect with a mentor or coach to achieve your potential</div>
            <div class="cover-form">
              <div class="form-selections" style={{paddingLeft: '8px'}}>
                Expertise
                <input
                  type="text"
                  name="name"
                  placeholder="What skill are you after?"
                />
              </div>
              <div class="form-selections" style={{ paddingRight: "24px" }}>
                Services <br />
                <select>
                  <option value="" disabled selected>
                    What service do you need?
                  </option>
                  <option value="Mentoring">Mentoring</option>
                  <option value="Coaching">Coaching</option>
                  <option value="Networking">Networking</option>
                  <option value="Speaking">Speaking</option>
                  <option value="Teaching">Teaching</option>
                </select>
              </div>
              <div class="form-selections" style={{ paddingRight: "24px" }}>
                Community <br />
                <select value="My organisation">
                  <option value="My organisation">My organisation</option>
                  <option value="Go1 Community">Go1 Community</option>
                </select>
              </div>
              <div class="magnifying-icon">
                <a href="/experts">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
        </div>


      <div className="expert-wrapper-container">
        <div className="expert-wrapper">
          <div className="expert-wrapper-feature">Featured Experts</div>
          <div className="expert-flex">
            {EXPERTS.slice(0,4).map((data, key) => {
              return <ExpertCard key={key} heroData={data} />;
            })}
          </div>
        </div>

        <div className="expert-wrapper">
          <div className="expert-wrapper-feature">Services</div>
          <div className="expert-service">
            {SERVICES.map((data, key) => {
              return <ServiceCard key={key} services={data} />;
            })}
          </div>
        </div>

        <div className="expert-wrapper" style={{marginBottom: '32px'}}>
          <div className="expert-wrapper-feature">Recently Viewed</div>
          <div className="expert-flex">
            {EXPERTS.slice(4).map((data, key) => {
              return <ExpertCard key={key} heroData={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ExpertsPage;
