import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import EventGrid from '../Component/EventGrid'

const EventPage = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid' style={{marginBlockStart:100}}>
      <EventGrid/>
      <Footer/>
      </div>
    </>
  )
}

export default EventPage