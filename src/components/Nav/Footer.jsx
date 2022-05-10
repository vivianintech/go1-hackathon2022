import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="social-medias">
                <Link to="/twitter">Twitter</Link>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <Link to="/contact">Contact</Link>
            </div>
            <div className="copyright">
                <p>&copy; Deep Tech Heroes 2020</p>
            </div>
            <div className="trade-mark">
                <Link to="/about">Site created by J-cubed</Link>
            </div>
        </footer>
    );
}

export default Footer;