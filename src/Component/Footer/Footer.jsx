import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer ">
        <div className="row container pb-4">
            <div className="col-sm-12 col-md-6 col-lg-3 ps-5 pt-5 text-light">
                <h3>Get In Touch</h3>
                <ul>
                <li>123 Street, New York, USA</li>
                <li>+012 345 67890</li>
                <li>info@example.com</li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 ps-5 pt-5 text-light">
            <h3 className=''>Quick Link</h3>
                <ul >
                <a className='text-light' href="#about">About Us</a><br/>
                <a className='text-light' href="#featuers">Featuers</a><br/>
                <a className='text-light' href="#services">Services</a><br/>
                <a className='text-light' href="#">Contact Us</a><br/>
             
              
                </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3  ps-5 pt-5  text-light">

            <h3 className=''>Popular link</h3>
                <ul >
                <a className='text-light' href="#about">About Us</a><br/>
                <a className='text-light' href="#featuers">Featuers</a><br/>
                <a className='text-light' href="#services">Services</a><br/>
                <a className='text-light' href="#">Contact Us</a><br/>
             
              
                </ul>
            
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3   ps-5 pt-5  text-light">
            <h3>Newsletter</h3>
            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
            <div className='d-flex '>
                <input type="text" className='rounded' placeholder='Email'/>
                <input type="submit" className='rounded bg-success bg-opacity-75 text-light ms-2'/>

            </div>
              
            </div>
        </div>

        <hr className='hr2'/>
        <p className='text-center text-light pb-3'>Designed by Khizra</p>

      
    </div>
  )
}

export default Footer
