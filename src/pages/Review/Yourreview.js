import React from 'react'
import './Review.css'

const Yourreview = () => {
  return (
    <div className='myReview'>
        <div className='Reviews'>
            <h3>Your reviews</h3>
            <h6>You have no reviews yet. After you write some reviews, they will appear here.</h6>
        </div>
        <div className='Review-img'>
            <div class="example">
                <img src="./assets/Review/why_review_image.png" alt=''/>
                <div className='img-content'>
                    <h1>Why review?</h1>
                    <h6>See how your reviews help millions of travellers and business owners</h6>
                    <button className='btn'>Learn more</button>
                </div>
            </div> 
            <div className='below-para'>
                <h6>Is Tripadvisor missing a place?</h6>
                <p>Tell us about it so we can improve what we show.</p>
                <button className='sign-in-btn' style={{"width":"100%"}}>Add a place</button>
            </div>
        </div>
    </div>
  )
}

export default Yourreview