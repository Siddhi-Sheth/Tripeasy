import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
    
  return (
    <div className='Navbar'>
        <div className='nav-logo'>
            <Link to="/">
                <img src="./assets/Logo/logo.png" alt='logo'/>
            </Link>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <span class="material-symbols-outlined">more_horiz</span>
            </div>
        </div>
        <div className={`nav-items ${showNavbar && 'active'}`}>
        <li className='nav-links'>
                <Link to="/review"><span className="material-symbols-outlined item-icon">edit</span>Review</Link>
                <Link to="/trips"><span className="material-symbols-outlined item-icon">favorite</span>Trips</Link>
                <Link to="/alerts"><span className="material-symbols-outlined item-icon">notifications</span>Alerts</Link>
                <Link to='/signin'><button type='submit' className='sign-in-btn'>Sign in</button></Link>
                <Link to="/basket"><span className="material-symbols-outlined item-icon">shopping_cart</span>Basket</Link>
            </li>
        </div>
    </div>
  )
}

export default Navbar