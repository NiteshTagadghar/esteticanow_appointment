import React from 'react';
import './Header.css';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-content">
        <div className="welcome-section">
          <h1 className="welcome-title">Welcome Back, Vendor</h1>
          <p className="welcome-subtitle">Hello, here you can manage your orders by zone</p>
        </div>
        
        <div className="header-actions">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="notification-icon">
            <span>🔔</span>
            <div className="notification-dot"></div>
          </div>
          
          <div className="user-info">
            <span className="user-name">AD</span>
            <span className="user-label">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;