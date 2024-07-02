import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the custom CSS

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-light ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><p className='h1 text-success ps-4'>Biz Consult</p></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${menu === "home" ? "active" : ""}`} href='#home' onClick={() => setMenu("home")}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menu === "about-us" ? "active" : ""}`} href='#about' onClick={() => setMenu("about-us")}>About Us</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menu === "features" ? "active" : ""}`} href='#featuers' onClick={() => setMenu("features")}>Features</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menu === "services" ? "active" : ""}`} href='#services' onClick={() => setMenu("services")}>Services</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menu === "features" ? "active" : ""}`} href='#' onClick={() => setMenu("contact")}>Contact Us</a>
            </li>
            
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
