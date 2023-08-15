import React from 'react'
import logoHeader from '../assets/logo-header.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-image'>
            <img src={logoHeader} alt='header-logo'/>
        </div>
    </div>
  )
}

export default Navbar