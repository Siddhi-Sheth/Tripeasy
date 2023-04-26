import React from 'react'
import './Othertrip.css'

const Yourreview = () => {
  return (
    <div className='myReview'>
        <div className='Reviews'>
            <h3>Your reviews</h3>
            <h6>You have no reviews yet. After you write some reviews, they will appear here.</h6>
        </div>
        <div className='Review-img'>
        <div class="example">
            <img src="./images/Review/why_review_image.png" alt=''/>
                <h1>Why review?</h1>
                <h6>See how your reviews help <br/>millions of travellers and <br/> business owners</h6>
                <button className='btn'>Learn More</button>
        </div> 
            <div>
                <h6>Is Tripadvisor missing a place?</h6>
                <p>Tell us about it so we can improve what we show.</p>
                <button>Add a place</button>
            </div>
        </div>
    </div>
  )
}

export default Yourreview