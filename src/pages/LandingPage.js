// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1 className="app-title">BOOKKEEPER PRO</h1>
            <p className="app-description">Your personal library at your fingertips</p>
            <Link to="/search">
                <button className="start-button">Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
