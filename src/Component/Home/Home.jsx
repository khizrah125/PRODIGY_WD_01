import React from 'react'
import hero from '../../assets/hero.png'
import './Home.css'

export const Home = () => {
  return (
    <div id="home" className='container-fluid bg-success bg-opacity-75'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center flex-column text-light main-text">
            <h1 className="text-center">We Help To Push Your <br/> Business To The Top Level</h1>
            <p className="text-center">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
            <button className='button btn rounded-pill ps-3 pe-3 pt-1 pb-1 border-light text-light'>Learn More</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end mt-5 mb-5">
            <img src={hero} alt="" className="img-fluid home-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
