import React from 'react';
import logoHeader from '../../assets/logo-header.png';

const SaltNav = () => {
  return (
    <div>
      <div className="container">
        <div className="salt-nav-wrapper">
          <div className="salt-nav-logo">
            <img src={logoHeader} alt="header-logo" />
          </div>
          <div className="salt-nav-menu">
            <ul className="salt-nav-menu-items">
              <li className="salt-nav-menu-item">Home</li>
              <li className="salt-nav-menu-item">Product</li>
              <li className="salt-nav-menu-item dropdown">
                Salt Information
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-item">Submenu 1</li>
                  <li className="dropdown-menu-item">Submenu 2</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="salt-nav-account">
            <button>My Account</button>
          </div>
          <div className="salt-nav-language">language</div>
        </div>
      </div>
    </div>
  );
};

export default SaltNav;
