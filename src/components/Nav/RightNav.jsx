import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Ul = styled.ul`
  list-style: none;F
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #05386b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: larger;
    }

    li {
      color: #ffff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
      <div className="nav-middle">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/heroes">Mentors</Link>
          <Link to="/hosts">Hosts</Link>
          <Link to="/contact">Contact Us</Link>
      </div>

  );
};

export default RightNav;
