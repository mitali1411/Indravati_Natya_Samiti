import React from 'react'
import { SlEnvolope } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Logo from '../../assets/Logo.jpg'

const Header = () => {
  return (
    <nav className='navbar bg-dark' id='header'>
      <div className='flex-grow-1 p-1'>
        <img src={Logo} alt="" style={{width:50, borderRadius:50}}/>
      </div>
        <ul className='d-flex align-items-center my-1'>
            <a href='mailto:indravatidramasociety@gmail.com' target='_blank' className='text-decoration-none text-light mx-2 d-flex align-items-center'><SlEnvolope className='me-2'/>indravatidramasociety@gmail.com</a>
            <a href="tel:+919926094042" target='_blank' className='text-decoration-none text-light mx-2 d-flex align-items-center'><IoCallOutline className='me-2'/>+91 99260 94042</a>
            <a href="https://www.instagram.com/indore_ins_theatre_/" target='_blank' className='text-decoration-none text-light mx-2 '><CiInstagram/></a>
            <a href="https://www.facebook.com/indravatinataysamitisidhi/" target='_blank' className='text-decoration-none text-light mx-2'><FaFacebookF/></a>
            <a href="" className='text-decoration-none text-light mx-2'><FaLinkedinIn/></a>
            <a href="https://www.youtube.com/@INSSIDHI" target='_blank' className='text-decoration-none text-light mx-2'><IoLogoYoutube/></a>
        </ul>
    </nav>
  )
}

export default Header