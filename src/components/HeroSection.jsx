import React from 'react'
import '../App.css'
import { Button } from './Button'
import './herosection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlay } from '@fortawesome/free-solid-svg-icons'


function HeroSection() {
  return (
    <div className='hero-container'>
    
        <img src='/images/miami-g52d0e4901_1280.jpg' />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large' 
            >                
             GET STARTED
            </Button>

            <Button 
            className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large' 
            >
                WATCH TRAILER <FontAwesomeIcon icon={faPlay}  />
            </Button>


        </div>
    </div>
  )
}

export default HeroSection;