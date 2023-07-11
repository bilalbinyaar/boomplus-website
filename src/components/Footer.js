import React from 'react';
import logoFooter from '../assets/logo-header.png'
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill, BsPhone, BsFacebook } from 'react-icons/bs';
import { AiOutlineWhatsApp, AiOutlineMail, AiFillYoutube, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { GiRotaryPhone } from 'react-icons/gi';
import { MdLocationPin } from 'react-icons/md';



const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer-wapper'>
              <div className='footer-col'>
                <img src={logoFooter} alt='header-logo'/>
              </div>
              <div className='footer-col'>
                <h2>Explore</h2>
                <div className='footer-col-items'>
                  <Link>Choose Another Product</Link>
                  <Link>Contact Us</Link>
                  <Link>FAQ</Link>
                  <Link>Our Story</Link>
                  <Link>Careers</Link>
                  <Link>Privacy Policy</Link>
                </div>
              </div>
              <div className='footer-col width-fix'>
                <h2>Be Our Guest</h2>
                <div className='footer-col-items'>
                  <div className='footer-col-item'>
                    <div className='col-icon'>
                      <BsFillTelephoneFill />
                    </div>
                    <div className='col-value'>
                    +20227338383
                    </div>
                  </div>
                  <div className='footer-col-item'>
                    <div className='col-icon'>
                      <AiOutlineWhatsApp />
                    </div>
                    <div className='col-value'>
                    +201220066112
                    </div>
                  </div>
                  <div className='footer-col-item'>
                    <div className='col-icon'>
                      <BsPhone />
                    </div>
                    <div className='col-value'>
                    +201003802680
                    </div>
                  </div>
                  <div className='footer-col-item'>
                    <div className='col-icon'>
                      <GiRotaryPhone />
                    </div>
                    <div className='col-value'>
                    +20227338408
                    </div>
                  </div>
                  <div className='footer-col-item'>
                    <div className='col-icon'>
                      <AiOutlineMail />
                    </div>
                    <div className='col-value'>
                    info@boom-plus.com
                    </div>
                  </div>
                  <div className='footer-col-item'>
                    <div className='col-icon'>
                      <MdLocationPin />
                    </div>
                    <div className='col-value'>
                    Egypt, Cairo, Zahraa Elmaadi, Off 50th Street, Block 88, Plot 13, Building # 6, 3rd Floor # 303. Landmark: NBE 50th street.
                    </div>
                  </div>
                </div>
              </div>
              <div className='footer-col'>
                <h2>Follow Us On</h2>
                <div className='social-icons'>
                  <Link><AiOutlineWhatsApp /></Link>
                  <Link><BsFacebook /></Link>
                  <Link><AiFillYoutube /></Link>
                  <Link><AiFillLinkedin /></Link>
                  <Link><AiOutlineInstagram /></Link>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer