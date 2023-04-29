import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="navbar">
      <div className="container">
      <div className='nav-logo'>
            <NavLink to='/'><img className='nav-img' src="./assets/Logo/logo.svg" alt="logo" /></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <span class="material-symbols-outlined">more_horiz</span>
        </div>
        <div className={`nav-elements nav-links ${showNavbar && 'active'}`}>
          <ul>
            <li>
                <NavLink to="/Review" className='nav-link-item'><span className="material-symbols-outlined item-icon">edit</span>Review</NavLink>
            </li>
            <li>
                <NavLink to="/trips" className='nav-link-item'><span className="material-symbols-outlined item-icon">favorite</span>Trips</NavLink>
            </li>
            <li>
                <NavLink to="/alerts" className='nav-link-item'><span className="material-symbols-outlined item-icon">notifications</span>Alerts</NavLink>
            </li>
            <button type='submit' className='sign-in-btn'>Sign in</button>
            <li>
              <NavLink to='/cart' className='nav-link-item'><span className="material-symbols-outlined item-icon">shopping_cart</span>Cart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header