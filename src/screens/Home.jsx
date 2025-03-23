import React from 'react'
import Navbar from '../Component/Navbar'
import HeroSection from '../Component/Home/HeroSection'
import AboutUs from '../Component/Home/AboutUs'
import WhatWeDo from '../Component/Home/WhatWeDo'
import Donation from '../Component/Home/Donation'
import Events from '../Component/Home/Events'
import Footer from '../Component/Footer'
import Awards from '../Component/Awards'
import Blog from '../Component/Home/Blog'
import Sidebar from '../Component/Sidebar'
import Header from '../Component/Home/Header'

const Home = ({collapsed,setCollapsed}) => {
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <Sidebar setCollapsed={setCollapsed} collapsed={collapsed}/>
      <div id='home' className={!collapsed ? "home-main" : "home-main-collapsed"}>
      <HeroSection/>
      <AboutUs/>
      <WhatWeDo/>
      <Donation/>
      {/* <Events/> */}
      <Blog/>
      <Awards/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home