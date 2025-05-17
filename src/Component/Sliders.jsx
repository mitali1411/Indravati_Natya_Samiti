import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from '../assets/3.jpg'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Sliders = () => {
let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "50px"

  };


    const slides = [
        {
          img: "https://images.unsplash.com/photo-1740031770947-f0e53f07b3e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
          title: "SEND CHILDREN BACK TO SCHOOL",
          text: "If not now they might never return",
        },
        {
          img: "https://images.unsplash.com/photo-1739827787460-1bc968f71bab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzF8fHxlbnwwfHx8fHw%3D",
          title: "STOP CHILD LABOUR",
          text: "Help children go to school instead",
        },
        {
          img: "https://plus.unsplash.com/premium_photo-1739548337994-1ed3ea65d076?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjN8fHxlbnwwfHx8fHw%3D",
          title: "HELP UNDERPRIVILEGED CHILDREN",
          text: "Provide resources for a brighter future",
        },
        {
          img: "https://images.unsplash.com/photo-1739056656195-ba25ea0a7b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjJ8fHxlbnwwfHx8fHw%3D",
          title: "SUPPORT CHILD EDUCATION",
          text: "Every child deserves to learn",
        }]

  return (
    <>
    <div className="slider-container">
      <div className="owl-nav">
        <div className="owl-prev"><BiLeftArrow/></div>
        <div className="owl-next"><BiRightArrow/></div>
        </div>
      <Slider {...settings}>
        {slides.map((item, index) => {
          return  <div className='event-card' key={index}>
            <div className="event-item shadow-sm" key={index}>
                                  <img src={Image} className="img-fluid w-100" alt="Image"/>
                                  <div className="event-content p-4">
                                      <div className="d-flex justify-content-between mb-4">
                                          <span className="text-body"><i className="fas fa-map-marker-alt me-2"></i>Grand Mahal, Dubai 2100.</span>
                                          <span className="text-body"><i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                                      </div>
                                      <h4 className="mb-4">{item.title}</h4>
                                      <p className="mb-4">{item.text}</p>
                                      <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                                  </div>
                              </div>
          </div>
        })}
      </Slider>
    </div>
  </>

  )
}

export default Sliders