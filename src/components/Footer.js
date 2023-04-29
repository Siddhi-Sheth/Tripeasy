import React from 'react'
import './footer.css' 

const Footer = () => {
  return (
    <div className='footer'>
        <div className='div_footer footer-padding'>
            <div className='footer-links'>
                <div className='footer-links-div'>
                    <h4>About Tripadvisor</h4>
                    <a href='/'><p>About us</p></a>
                    <a href='/'><p>Press</p></a>
                    <a href='/'><p>Resources and Policies</p></a>
                    <a href='/'><p>Careers</p></a>
                    <a href='/'><p>Trust & Safety</p></a>
                    <a href='/'><p>Contact us</p></a>
                    <a href='/'><p>Accessibility Statement</p></a>
                </div>
                <div className='footer-links-div'>
                    <h4>Explore</h4>
                    <a href='/'><p>Write a review</p></a>
                    <a href='/'><p>Add a Place</p></a>
                    <a href='/'><p>Join</p></a>
                    <a href='/'><p>Travellers' Choice</p></a>
                    <a href='/'><p>GreenLeaders</p></a>
                    <a href='/'><p>Help Centre</p></a>
                    <a href='/'><p>Travel Articles</p></a>
                </div>
                <div className='footer-links-div'>
                    <h4>Do Business With Us</h4>
                    <a href='/'><p>Owners & DMO/CVB</p></a>
                    <a href='/'><p>Business Advantage</p></a>
                    <a href='/'><p>Sponsored Placements</p></a>
                    <a href='/'><p>Access our Content API</p></a>
                </div>
                <div className='footer-links-div'>
                    <h4>Follow us on</h4>
                    <div className='socialmedia'>
                    <p><img src='./assets/icons/facebook.png' alt='fb'/></p>
                    <p><img src='./assets/icons/twitter.png' alt='tweet'/></p>
                    <p><img src='./assets/icons/pinterest.png' alt='pint'/></p>
                    <p><img src='./assets/icons/instagram.png' alt='insta'/></p>                    
                    </div>
                </div>
            </div>
            
            <hr></hr>

            <div className='footer-below'>
                <div className='footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} Tripadvisor LLC All rights reserved.
                    </p>
                </div>
                <div className='footer-below-links'>
                    <a href='/'><div><p>Terms of Use</p></div></a>
                    <a href='/'><div><p>Privacy and Cookies Statement</p></div></a>
                    <a href='/'><div><p>Contact us</p></div></a>
                    <a href='/'><div><p>How the site works</p></div></a>
                    <a href='/'><div><p>Site Map</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

// Press
// Resources and Policies
// Careers
// Trust & Safety
// Contact us
// Accessibility Statement