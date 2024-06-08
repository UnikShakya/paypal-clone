import React from 'react'
import "./Hero3.css"
import { Link } from 'react-router-dom'
function Hero3() {
  return (
    <div className='hero3'>
        <div className="hero3-text">
      <h3>Make a payment online or with your mobile.</h3>
      <p>Make a payment in exchange for goods and services without sharing your financial information with the seller. It's simple, faster and more secure. Currency conversion fees may apply.</p>
      <Link to=""className='link'>Make a payment</Link>
      </div>
    </div>
  )
}

export default Hero3
