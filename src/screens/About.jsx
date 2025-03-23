import React from 'react'
import Navbar from '../Component/Navbar'
import AboutUs from '../Component/Home/AboutUs'
import Footer from '../Component/Footer'

const About = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid py-5'>
      <AboutUs/>
      </div>
      <Footer/>
    </>
  )
}

export default About