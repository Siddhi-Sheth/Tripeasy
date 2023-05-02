import React from 'react'
// import './css/List.css'
import './Trips.css'

const Trips = () => {
  return (
    <div className='Trips'>
      <div className='Trip-wrapper'>
        <div className='Trip-info'>
            <h4>Travelling soon? Save your amazing ideas all in one place with Trips.</h4>
            <p>Save traveller-recommended places for your trip</p>
            <p>View the things to do, restaurants and hotels you saved on a map</p>
            <p>Easily access all your saves while travelling, wherever you go</p>
            <div className='trip-btn-info'>
                <button className='sign-in-btn trip-btn'>Get Started</button>
                <p className='login'>Log in now</p>
            </div>
        </div>
        <div className='Trip-map'>
                <img src='./assets/Trips/map1.webp' alt='map1'/>
                <img src='./assets/Trips/map2.webp' alt='map2'/>
        </div>
      </div>
    </div>
  )
}

export default Trips