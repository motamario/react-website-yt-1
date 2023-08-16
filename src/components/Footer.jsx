import React from 'react'
import { Button } from './Button'
import './footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Enroll in our Adventure Newsletter to Unlock Exclusive Vacation Offers!
            </p>
            <p className="footer-subscription-text">
                Choose not to participate, but keep in mind the consequences: potential exclusion from popular airports and losing rewards, even credit card points, gained on and off the website.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='Your Email' className='footer-input'  />
                    <Button buttonStyle='btn--outline'>
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
    </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className='social-logo'>
                        TRVL <FontAwesomeIcon icon={faPlaneDeparture} />
                    </Link>
                </div>
                <small className="website-rights">
                    TRVL © 2023
                </small>
                <div className="social-icons">
                    <Link to='/'
                     className='social-icon-link facebook'
                     target='_blank'
                     aria-label='Facebook'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link to='/'
                     className='social-icon-link instagram'
                     target='_blank'
                     aria-label='Instagram'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to='/'
                     className='social-icon-link twitter'
                     target='_blank'
                     aria-label='Twitter'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </Link>
                    <Link to='/'
                     className='social-icon-link tiktok'
                     target='_blank'
                     aria-label='Tiktok'>
                        <FontAwesomeIcon icon={faTiktok} />                
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer