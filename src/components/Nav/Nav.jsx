import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import './Nav.css';

function Nav() {
    
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src="https://res.cloudinary.com/dikrdv4qy/image/upload/v1606439732/deep-tech-heroes-logo-blue-small_g3pny6.png" alt=""></img></Link>
            </div>
            <Burger />
        </nav>
    );
}

export default Nav;