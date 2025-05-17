import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink, Link} from 'react-router-dom';
import { SlEnvolope } from "react-icons/sl";
import { IoCallOutline, IoMenu } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitter } from 'react-icons/bs';

const Navbar = () => {
  return (
//     <nav className=="navbar navbar-expand-lg shadow-sm" id='navbar'>
//     <div className=="container-fluid">
//     <NavLink to='/' to='/' className=="navbar-brand">
//         <img src={Logo} alt="" />
//     </NavLink>
//     <button className=="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//       <span type='button' className=="navbar-toggler-icon"></span>
//     </button>
//     <div className=="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className=="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className=="nav-item">
//           <NavLink to='/' to='/'>Home</NavLink>
//         </li>
//         <li className=='nav-item'>
//           <NavLink to='/' to='/about'>About</NavLink>
//         </li>
//         <li className=='nav-item'>
//           <NavLink to='/' to='/*'>Other</NavLink>
//         </li>
//         <li className=='nav-item'>
//           <NavLink to='/' to='/contact'>Contact</NavLink>
//         </li>
//         </ul>
//     </div>
//   </div>
// </nav>

<div className="container-fluid fixed-top px-0">
            <div className="container px-0">
              {/* TOPBAR */}
                <div className="topbar">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-8">
                            <div className="topbar-info d-flex flex-wrap">
                                <a href="mailto:indravatidramasociety@gmail.com" target='_blank' className="text-light me-4 text-decoration-none"><SlEnvolope className='me-2'/>indravatidramasociety@gmail.com</a>
                                <a href="tel:+919926094042" target='_blank' className="text-light text-decoration-none"><IoCallOutline className='me-2'/>+919926094042</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="topbar-icon d-flex align-items-center justify-content-end">
                                <a href="https://www.facebook.com/indravatinataysamitisidhi/" target='_blank' className="btn-square text-white me-2"><FaFacebookF/></a>
                                <a href="#" target='_blank' className="btn-square text-white me-2"><BsTwitter/></a>
                                <a href="https://www.instagram.com/indore_ins_theatre_/" target='_blank' className="btn-square text-white me-2"><FaInstagram/></a>
                                <a href="https://www.youtube.com/@INSSIDHI" target='_blank' className="btn-square text-white me-2"><IoLogoYoutube/></a>
                                <a href="#" target='_blank' className="btn-square text-white me-0"><FaLinkedin/></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NAVBAR */}
                <nav className="navbar navbar-light bg-light navbar-expand-xl">
                    <NavLink to='/' className="navbar-brand ms-3">
                        <img src={Logo} className="" style={{height:80, borderRadius:100}}/>
                    </NavLink>
                    <button className="navbar-toggler py-2 px-3 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span><IoMenu className="text-primary"/></span>
                    </button>
                    <div className="collapse navbar-collapse bg-light" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <NavLink to='/' end activeclassname="active" className="nav-link">Home</NavLink>
                            <NavLink to='/about' activeclassname="active" className="nav-link">About</NavLink>
                            <NavLink to='/service' activeclassname="active" className="nav-link">Services</NavLink>
                            <NavLink to='/*' activeclassname="active" className="nav-link">Causes</NavLink>
                            <NavLink to='/events' activeclassname="active" className="nav-link">Events</NavLink>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                                {/* <a href='' className="nav-Link dropdown-toggle" data-bs-toggle="dropdown">Pages</a> */}
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                <Link to='/*' className="dropdown-item">Blog</Link>
                                <Link to='/*' className="dropdown-item">Gallery</Link>
                                <Link to='/*' className="dropdown-item">Volunteers</Link>
                                <Link to='/*' className="dropdown-item">Donation</Link>
                                </div>
                            </div>
                            <NavLink to='/contact' className='nav-link' activeclassname="active" >Contact</NavLink>
                        </div>
                        <div className="d-flex align-items-center flex-nowrap pt-xl-0" style={{marginLeft: 15}}>
                          <NavLink to='/' className="btn-hover-bg btn btn-primary text-white py-2 px-4 me-3">Donate Now</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  )
}

export default Navbar