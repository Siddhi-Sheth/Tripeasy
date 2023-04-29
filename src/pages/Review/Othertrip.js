import React from 'react'
import './Review.css'

const Othertrip = () => {
  return (
    <div className='Somemone-review-page'>
        <div className='edit-div'>
            <div className='header'>
                <h1>Write a review, make someone's trip</h1>
                <h4>Stories like yours are what helps travellers have better trips.<br/> Share your experience and help out a fellow traveller!</h4>
                <div className='search-trip'><p><span class="material-symbols-outlined">search</span>What would you like to review?</p></div>
            </div>
            <div className='cards'>
                <div className='cards-img'><img src="./images/Review/hero_image_1.png" alt='img1'/></div>
                <div className='cards-img' ><img src="./images/Review/hero_image_2.png" alt='img2'/></div>
                <div className='cards-img'><img src="./images/Review/hero_image_3.png" alt='img3'/></div>
                </div>
        </div>
    </div>
  )
}

export default Othertrip