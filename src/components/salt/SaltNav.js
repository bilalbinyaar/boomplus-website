import React from 'react';
import logoHeader from '../../assets/logo-header.png';
import {AiFillCaretDown} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import flag_1 from '../../assets/flags/Flag_of_South_Africa_Flat_Round-64x64.png'
import flag_2 from '../../assets/flags/Flag_of_Saudi_Arabia_Flat_Round-64x64.png'
import flag_3 from '../../assets/flags/Flag_of_United_States_Flat_Round-64x64.png'
import flag_4 from '../../assets/flags/Flag_of_France_Flat_Round-64x64.png'
import flag_5 from '../../assets/flags/Flag_of_Brazil_Flat_Round-64x64.png'
import flag_6 from '../../assets/flags/Flag_of_Spain_Flat_Round-64x64.png'

const SaltNav = () => {
  return (
    <div className='salt-navbar'>
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
                <AiFillCaretDown />
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-item">Salt Manufacturing</li>
                  <li className="dropdown-menu-item">Wholesale</li>
                </ul>
              </li>
              <li className="salt-nav-menu-item dropdown">
                Private Label
                <AiFillCaretDown />
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-item">Salt Bay</li>
                  <li className="dropdown-menu-item">Salt Sal Royal</li>
                  <li className="dropdown-menu-item">Salt Yamy Red</li>
                  <li className="dropdown-menu-item">Salt Yamy Blue</li>
                  <li className="dropdown-menu-item">Salt Diamond</li>
                  <li className="dropdown-menu-item">Salt Tower</li>
                  <li className="dropdown-menu-item">Salt Mago</li>
                </ul>
              </li>
              <li className="salt-nav-menu-item">Certification</li>
              <li className="salt-nav-menu-item">Get Price</li>
              <li className="salt-nav-menu-item">Choose Another Product</li>
            </ul>
          </div>
          <div className="salt-nav-account">
            <button><Link to='#'>My Account</Link></button>
          </div>
          <div className="salt-nav-language">
            <img src={flag_1} alt='lang-flag' />
            <img src={flag_2} alt='lang-flag' />
            <img src={flag_3} alt='lang-flag' />
            <img src={flag_4} alt='lang-flag' />
            <img src={flag_5} alt='lang-flag' />
            <img src={flag_6} alt='lang-flag' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaltNav;
