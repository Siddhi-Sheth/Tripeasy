import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='nav-logo'>
            <Link href="/">
                <img src="./assets/Logo/logo-no-background.png" alt='logo'/>
            </Link>
        </div>
        <div className='nav-items'>
        <li className='nav-links'>
                <Link href="/"><span className="material-symbols-outlined item-icon">edit</span>Review</Link>
                <Link href="/"><span className="material-symbols-outlined item-icon">favorite</span>Trips</Link>
                <Link href="/"><span className="material-symbols-outlined item-icon">notifications</span>Alerts</Link>
                <button type='submit' className='sign-in-btn'>Sign in</button>
                <Link href="/"><span className="material-symbols-outlined item-icon">shopping_cart</span>Cart</Link>
            </li>
        </div>
    </div>
  )
}

export default Navbar