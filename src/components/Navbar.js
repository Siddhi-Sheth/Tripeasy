import React from 'react'
import './css/nav.css' 

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-padding'>
            <div className='nav-items'>
                <div className='nav-logo'>
                    <img className='nav-img' src="./images/logo.svg" alt="logo"/>
                </div>
                <div className='nav-links'>
                    <a href='/'><span className="material-symbols-outlined item-icon">edit</span>Review</a>
                    <a href='/'><span className="material-symbols-outlined item-icon">favorite</span>Trips</a>
                    <a href='/'><span className="material-symbols-outlined item-icon">notifications</span>Alerts</a>
                    <button type='submit' className='sign-in-btn'>Sign in</button>
                    <a href='/'><span className="material-symbols-outlined item-icon">shopping_cart</span>Cart</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar