import React from 'react'
import AboutUs from '../Component/Home/AboutUs'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Poster from '../assets/3.jpg'

const About = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid' style={{marginBlockStart:100}}>
      <AboutUs/>
      <Footer/>
      </div>
    </>
  )
}

export default About