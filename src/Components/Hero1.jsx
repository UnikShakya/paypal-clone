import React from 'react'
import './Hero1.css'
import pic1 from '../assets/1.png';
import { Link } from 'react-router-dom';
function Hero1() {
  return (
    <section className="hero1 container">
    <div className='left'>
      <img src={pic1} alt="" height='450px'/>
    </div>
    <div className="right">
        <h5 className='heading'>Quick and Easy</h5>
        <p className='paragraph'>Millions of customers around the world use us for one simple reason: it’s simple. Just an email address and password will get you through to checkout before you can reach for your wallet.</p>
        <div className="links">
            <Link to="" className='hero1-link'>Pay on eBay</Link>
            <Link to="" className='hero1-link'>Pay on Websites</Link>
        </div>
    </div>
    </section>
  )
}

export default Hero1
