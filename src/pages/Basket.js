import React from 'react'
import Tours from './Home/Tours'
import Tours_data from '../data/Tours_data'
import World_data from '../data/World_data'
import World from './Home/World'
import './Basket.css'

const Basket = () => {
  return (
    <div>
        <div className='basket'>
            <div className='basket-content'>
                <div className='basket-info'>
                    <img src='./assets/Logo/suitcase.svg' alt='basket'/>
                    <h4>Your basket is empty</h4>
                    <p>Add Things to Do to your basket. Now you can shop for tours, attractions, and experiences. <span>Explore Now</span></p>
                    <hr/>
                    <p>Log in to view any saved items in your basket</p>
                    <button className='sign-in-btn'>Sign in</button>
                </div>
                <div className='support'>
                    <span class="material-symbols-outlined">language</span>
                    <p>24/7 Global Support.<span style={{"textDecoration":"underline", "cursor": "pointer"}}>000-0800-100-6999</span></p>
                </div>
            </div>
        </div>
        <World props={World_data}/>
        <Tours props={Tours_data}/> 
    </div>
    
  )
}

export default Basket