import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-background">
            <img src="/src/assets/images/logo-background.png" alt="Logo Background" />
          </div>
          <div className="logo-text">
            <svg width="101" height="21" viewBox="0 0 101 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.17H25.42V20.52H0V0.17Z" fill="white"/>
              <path d="M32.04 0.17H38.46V20.52H32.04V0.17Z" fill="white"/>
              <path d="M45.12 0.17H70.54V20.52H45.12V0.17Z" fill="white"/>
              <path d="M76.5 0H101.5V20.7H76.5V0Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        <nav className="nav">
          <Link to="/home" className="nav-link active">HOME</Link>
          <Link to="/roadmap" className="nav-link">ROADMAP</Link>
          <Link to="/web" className="nav-link">MIMO for Web</Link>
        </nav>
        
        <div className="header-actions">
          <Link to="/download" className="download-btn">
            Download
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 