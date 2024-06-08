import React from 'react'
import "./Footer.css"
import nepal from "../assets/nepal.png"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <><div className="footer">
  <div className="footer-top">
    <div className="footer-top-left">
      <Link to="" className='link-top'>Help</Link>
      <Link to=""className='link-top'>Contact</Link>
      <Link to=""className='link-top'>Fees</Link>
      <Link to=""className='link-top'>Security</Link>
      <Link to=""className='link-top'>Features</Link>
      <Link to=""className='link-top'>Shop</Link>
    </div>
    <div className="footer-top-right">
      <img src={nepal} alt="Nepal Flag" width="15px" height="auto">
      </img>
    </div>
  </div>
  
  <div className="footer-mid">
    <div className="footer-mid-left">
        <Link to="/aboutus" className='link-mid'>About</Link>
        <Link to="" className='link-mid'>Newsroom</Link>
        <Link to="" className='link-mid'>Jobs</Link>
        <Link to="" className='link-mid'>Developers</Link>
    </div>

    <div className="footer-mid-right">
        <p>© 1999–2024 All rights reserved.</p>
        <Link to="" className='link-mid'>Cookies</Link>
        <Link to="" className='link-mid'>Accessibility</Link>
        <Link to="" className='link-mid'>Privacy</Link>
        <Link to="" className='link-mid'>Legal</Link>
    </div>
  </div>

  <div className="footer-bot">
    <p>PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as a Major Payment Institution under the Payment Services Act 2019.</p>
  </div>

  </div>

  </>
 


  )
}

export default Footer
