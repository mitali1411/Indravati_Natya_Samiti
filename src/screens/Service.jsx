import React from 'react'
import WhatWeDo from '../Component/Home/WhatWeDo'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Service = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid py-5'>
      <WhatWeDo/>
      </div>
      <Footer/>
    </>
  )
}

export default Service