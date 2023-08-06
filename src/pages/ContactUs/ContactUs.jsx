import React from 'react'
import './ContactUs.css'


function ContactUs() {

    
  return (
    <div className='main-container'>
        <h3>Contact Us</h3>
        <div className='items-container'>
            <input type="text" name="" id="" placeholder='First Name' className='item'/>
            <input type="text" name="" id="" placeholder='Last Name'  className='item'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Write your message here' className='item'></textarea>
            <button className='item submit-btn' >Submit</button>
        </div>
    </div>
  )
}

export default ContactUs