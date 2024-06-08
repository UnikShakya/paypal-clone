import React from 'react'
import "./Hero2.css"
import pic2 from '../assets/2.jpg';
import { Link } from 'react-router-dom';
function Hero2() {
  return (
    <div className='hero2 '>
        <img src={pic2} alt="" height="450px" width="100%" />
        <div className="text">
            <h5>We’ve got you covered.</h5>
            <p className='paragraph'>Shop with peace of mind, knowing we protect your eligible purchases. If an eligible item doesn’t show up, or turns out to be different than described, we’ll help sort things out with the seller. Conditions apply.</p>
            <Link to=""className='link'>More about Paypal Buyer Protection</Link>
        </div>
    </div>
  )
}

export default Hero2
