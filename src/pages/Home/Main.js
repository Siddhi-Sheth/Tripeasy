import React from 'react'
import './css/Main.css'

const Main = () => {
  return (
    <div className='Main'>
      <div>
        <img className='home-img' src="./assets/Logo/Home1.webp" alt="Home_page1"/>
        <div className='search-bar'><span class="material-symbols-outlined search-icon">search</span><input className='home-search' type='text' placeholder='Where to?'/></div>
      </div>
    </div>
  )
}

export default Main

{/* <span className='home-search'>Where to?</span> */}