import React from 'react'
import './Header.css'; 
import { Link } from 'react-router-dom';
function Header() {
  return (
  
    <div className='head'>
    <Link to="/"><img src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" height="30px" alt="PayPal Logo"/></Link>
    <div className="head_mid">
      <p>BUY</p>
      <p>SEND</p>
    </div>
    <div className="head_right">
      <Link to="/login"><button className='btn-login'>Log In</button></Link>
      <Link to="/signup"><button className='btn-signin'>Sign Up</button></Link>
    </div>
  </div>
  )
}

export default Header
