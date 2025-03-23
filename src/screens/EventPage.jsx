import React from 'react'
import Navbar from '../Component/Navbar'
import Events from '../Component/Home/Events'
import Footer from '../Component/Footer'
import Sliders from '../Component/Sliders'

const EventPage = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid py-5'>
      {/* <Events/> */}
      <Sliders/>
      </div>
      <Footer/>
    </>
  )
}

export default EventPage