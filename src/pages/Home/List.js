import React from 'react'
import './css/List.css'

const List = () => {
  return (
    <div className='List'>
      <div className='List-wrap'>
      <div className='List-content'>
        <h1>Get out there</h1>
        <p>Best of the Best tours, attractions & activities you won’t want to miss.</p>
        <button className='sign-in-btn' style={{fontWeight:'bold'}}>See the list</button>
      </div>
      <div className='List-image'>
          <img src='./assets/Logo/List-img.jpg' alt='list-img' />
      </div>
    </div>
    </div>
  )
}

export default List