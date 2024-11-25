import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Destinations from '../destinations/Destinations'
import BestHotels from '../hotels/BestHotels'
import Services from '../services/Services'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="home-container">
      <Destinations/>
      <BestHotels/>
      <Services/>
      <Newsletter/>
      <Footer/>
      </div>
    </div>  
  )           
}
     
export default Home
