import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginControlNav from './LoginControlNav';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #05386b;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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
        <Ul open={open}>
          <div className="nav-middle">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/heroes">Heroes</Link></li>
            <li><Link to="/hosts">Hosts</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </div>
          
            <li><LoginControlNav /></li>
          
               
        </Ul>
    )

}

export default RightNav