import React from 'react'
import Navbar from '../Component/Navbar'
import HeroSection from '../Component/Home/HeroSection'
import AboutUs from '../Component/Home/AboutUs'
import WhatWeDo from '../Component/Home/WhatWeDo'
import Donation from '../Component/Home/Donation'
import Footer from '../Component/Footer'
import Awards from '../Component/Awards'
import Blog from '../Component/Home/Blog'

const Home = ({collapsed,setCollapsed}) => {
  return (
    <div>
      <Navbar/>
      <div id='home' className={!collapsed ? "home-main" : "home-main-collapsed"}>
      <HeroSection/>
      <AboutUs/>
      <WhatWeDo/>
      <Donation/>
      <Blog/>
      <Awards/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home