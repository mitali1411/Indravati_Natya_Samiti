import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from '../assets/3.jpg'

const Sliders = () => {

  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  // PREV NEXT 
  let sliderRef = useRef(null);
  // ///// CENTER MODE ////////
  const centerSetting= {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    // autoplaySpeed: 1000
  };
  // console.log(sliderRef)


  return (
    <>
    {/* <div className="slider-container p-5">
      <Slider {...settings}>
        <div className='card shadow-sm'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://media.istockphoto.com/id/480354734/photo/the-shepherd-and-the-moon.jpg?s=612x612&w=0&k=20&c=lk8i2p-_mQNtPVY7ne0w87ujIBsEAlBURZCFPXTHtGA=" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://thumbs.dreamstime.com/b/planet-earth-space-night-some-elements-image-furnished-nasa-52734504.jpg" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://media.istockphoto.com/id/1399246824/photo/digital-eye-wave-lines-stock-background.jpg?s=612x612&w=0&k=20&c=1cW5xuLcb6HPDj6CLQQFBvGK5_fJvx9eA2egik-3hAc=" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://cdn.pixabay.com/photo/2023/09/14/16/17/soap-bubbles-8253276_1280.jpg" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfi8r3QDH2u34dCmwivff7F6kS25TTa4JZSeqQw0OV2VT4agJ5tKN49nA8eiulc_vuiA&usqp=CAU" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        <div className='card shadow-sm'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VBeHlfEGQAPdOP2YyQJXBPQLzOTo0Ng4gg&s" alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
      </Slider>
    </div> */}


{/* // ////////// center mode /////////////// */}
<div className="slider-container">
      <Slider ref={sliderRef} {...centerSetting}>
        <div>
        <div className='card shadow-sm'>
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="" /> */}
          <img src={Image} alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        </div>
        <div>
          <div className='card shadow-sm'>
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="" /> */}
          <img src={Image} alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        </div>
        <div>
        <div className='card shadow-sm'>
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="" /> */}
          <img src={Image} alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        </div>
        <div>
        <div className='card shadow-sm'>
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="" /> */}
          <img src={Image} alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        </div>
        <div>
        <div className='card shadow-sm'>
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="" /> */}
          <img src={Image} alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        </div>
        <div>
        <div className='card shadow-sm'>
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="" /> */}
          <img src={Image} alt="" />
          <div className="card-body">
            <h3>React Slick</h3>
            <p>We use react slick</p>
          </div>
        </div>
        </div>
      </Slider>

      <div className='controls'>
            <button onClick={()=>sliderRef.current && sliderRef.current.slickPrev()}>
              <FaArrowLeft />
            </button>
            <button onClick={()=>sliderRef.current && sliderRef.current.slickNext()}>
              <FaArrowRight />
            </button>
          </div>
    </div>
    </>

  )
}

export default Sliders