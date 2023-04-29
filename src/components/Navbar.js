import React from 'react'
import {Link} from "react-router-dom"
import './navbar.css' 

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='navbar-padding'>
            <div className='nav-items'>
                <div className='nav-logo'>
                    <Link to='/'><img className='nav-img' src="./assets/Logo/logo.svg" alt="logo" /></Link>
                </div>
                <div className='nav-links'>
                    <Link to='/review' className='nav-link-item'><span className="material-symbols-outlined item-icon">edit</span>Review</Link>
                    <Link to='/trips' className='nav-link-item'><span className="material-symbols-outlined item-icon">favorite</span>Trips</Link>
                    <Link to='/alerts' className='nav-link-item'><span className="material-symbols-outlined item-icon">notifications</span>Alerts</Link>
                    <button type='submit' className='sign-in-btn'>Sign in</button>
                    <Link to='/cart' className='nav-link-item'><span className="material-symbols-outlined item-icon">shopping_cart</span>Cart</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar