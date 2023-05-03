import React from 'react'
import './css/Donation.css'

const Donation = () => {
  return (
    <div className='Donation'>
        <div className='donation-wrap'>
            <div className='donation-image'>
                <img src='./assets/Logo/Found-img.jpg' alt='found-img' />
            </div>
            <div className='donation-content'>
            <img src="./assets/Logo/logo-icon-black.png" alt='footer-logo' className='donation-content-img'/><span>Tripeasy Foundation</span>
              <h1>Help us help the planet</h1>
              <p>Together, we’ve raised more than $10 million USD for World Central Kitchen’s emergency food relief efforts around the world. This month only, donate to their Climate Disaster Fund and the Tripeasy Foundation will match it.</p>
              <button className='sign-in-btn' style={{fontWeight:'bold'}}>Donate now</button>
            </div>
        </div>
    </div>
  )
}

export default Donation
// #f2b203