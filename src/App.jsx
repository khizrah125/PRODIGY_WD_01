import React from 'react';
import Navbar from './Component/Navbar/Navbar'; // Ensure this path is correct
import Home from './Component/Home/Home';
import AboutUs from './Component/AboutUs/AboutUs';
import Featuers from './Component/Features/Featuers';
import './App.css';
import { Services } from './Component/Services/Services';
import Footer from './Component/Footer/Footer';

function App() {
  return (
   <div className="App">
        <Navbar />
        <Home />
        <AboutUs />
        <Featuers/>
        <Services/>
        <Footer/>
       
      </div>
  
  );
}

export default App;
