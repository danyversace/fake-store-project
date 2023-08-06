//rfce
import React from 'react'
import'./Footer.css'
import {Link} from 'react-router-dom'
import { BsFillBalloonHeartFill } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer-container'>
      < div className='love-container'>
          <p>Made with</p>
          <BsFillBalloonHeartFill />
          <p>by Mimo</p>
        </div>
        <Link to="/contactus" className='contact-btn'>Contact Us</Link>
    </div>
  )
}

export default Footer