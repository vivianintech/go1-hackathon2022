import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function LoginControlNav() {
    const token = window.localStorage.getItem("token");
    const user = window.localStorage.getItem("user");

    const handleSignin = (e) => {
        e.preventDefault();
        window.location.href = "/signin";
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        window.location.href = "/signup";
    };

    const handleLogin = (e) => {
        e.preventDefault();
        window.location.href = "/";
    };
    
    const handleLogout = (e) => {
        e.preventDefault();
        window.localStorage.clear();
        window.location.href = "/signout";
    };
    
    if (token) {
        return (
            <div className="login-wrapper">
                <Link className="loggin-item" onClick={handleLogin}>{user}</Link>
                <Link className="loggin-item" onClick={handleLogout}>Sign Out</Link>
            </div>
        )
    }
    return (
        <div className="login-wrapper">
            <Link className="loggin-item" onClick={handleSignUp}>Sign Up</Link>
            <Link className="loggin-item" onClick={handleSignin}>Sign In</Link>
        </div>
    )
};

export default LoginControlNav;