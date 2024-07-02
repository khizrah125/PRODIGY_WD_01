import React from 'react'
import about from '../../assets/about.png'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='container mt-5' id="about">
       <h2 className='mt-5 text-success text-opacity-75 text-center '>About-Us</h2>
       <div className="row mt-5">
        <div className='col-sm-12 col-md-6 col-md-6 mb-4 about-img mt-5'>
        <img src={about} alt="" />
        </div>
        <div className='col-sm-12 col-md-6 col-md-6 mb-4 about-txt mt-5'>
          <h2 className='fw-bold'>Award Wining Consultancy <br/> Agency For Your Business</h2>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod</p>
           <h5  className='fw-bold'>Business Planning</h5>
           <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
           <h5  className='fw-bold'>Financial Analaysis</h5>
           <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
           <button className='button btn rounded-pill text-light bg-success bg-opacity-75'>Learn More</button>
        </div>
       <hr className='hr'/>
       </div>
    </div>
      


     
  
  )
}

export default AboutUs
