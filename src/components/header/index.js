import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpenser<i className="fa-regular fa-credit-card"></i>
        </div>
        <div className="header-button">
          <a href="https://github.com/AkankshaAhire11" 
          target="_blank" 
          rel="noopener noreferrer"> 
          <i className="fa-brands fa-github"></i> Star</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
