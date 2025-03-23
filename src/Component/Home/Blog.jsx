import React from 'react'
import Image from '../../assets/3.jpg'
import { BsClockFill, BsHeartFill } from 'react-icons/bs'
import { BiComment, BiCommentDetail, BiCommentDots, BiSolidComment } from 'react-icons/bi'
import { FaComment, FaSearchPlus } from 'react-icons/fa'

const Blog = () => {
  return (
    <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5" style={{maxWidth: 800}}>
                    <h5 className="text-uppercase text-primary">Latest News & Blog</h5>
                    <h1 className="mb-0">Help today because tomorrow you may be the one who needs more helping!
                    </h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-3">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={Image} className="img-fluid w-100" alt=""/>
                                <div className="blog-info">
                                    <span className='d-flex align-items-center justify-content-center'><BsClockFill/>&nbsp; Dec 01.2024</span>
                                    <div className="d-flex">
                                        <span className="me-3"> 3 <BsHeartFill/></span>
                                        <a href="#" className="text-white">0 <FaComment/></a>
                                    </div>
                                </div>
                                <div className="search-icon">
                                    <a href={Image} data-lightbox="Blog-1" className="my-auto btn btn-primary text-white p-2"><FaSearchPlus/></a>
                                </div>
                            </div>
                            <div className="text-dark border p-4 ">
                                <h4 className="mb-4">Save The Topic Forests</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
                                <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={Image} className="img-fluid w-100" alt=""/>
                                <div className="blog-info">
                                    <span className='d-flex align-items-center justify-content-center'><BsClockFill/>&nbsp; Dec 01.2024</span>
                                    <div className="d-flex">
                                        <span className="me-3"> 3 <BsHeartFill/></span>
                                        <a href="#" className="text-white">0 <FaComment/></a>
                                    </div>
                                </div>
                                <div className="search-icon">
                                    <a href={Image} data-lightbox="Blog-2" className="my-auto btn btn-primary text-white p-2"><FaSearchPlus/></a>
                                </div>
                            </div>
                            <div className="text-dark border p-4 ">
                                <h4 className="mb-4">Save The Topic Forests</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
                                <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={Image} className="img-fluid w-100" alt=""/>
                                <div className="blog-info">
                                    <span className='d-flex align-items-center justify-content-center'><BsClockFill/>&nbsp; Dec 01.2024</span>
                                    <div className="d-flex">
                                        <span className="me-3"> 3 <BsHeartFill/></span>
                                        <a href="#" className="text-white">0 <FaComment/></a>
                                    </div>
                                </div>
                                <div className="search-icon">
                                    <a href={Image} data-lightbox="Blog-3" className="my-auto btn btn-primary text-white p-2"><FaSearchPlus/></a>
                                </div>
                            </div>
                            <div className="text-dark border p-4 ">
                                <h4 className="mb-4">Save The Topic Forests</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
                                <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={Image} className="img-fluid w-100" alt=""/>
                                <div className="blog-info">
                                    <span className='d-flex align-items-center justify-content-center'><BsClockFill/>&nbsp; Dec 01.2024</span>
                                    <div className="d-flex">
                                        <span className="me-3"> 3 <BsHeartFill/></span>
                                        <a href="#" className="text-white">0 <FaComment/></a>
                                    </div>
                                </div>
                                <div className="search-icon">
                                    <a href={Image} data-lightbox="Blog-4" className="my-auto btn btn-primary text-white p-2"><FaSearchPlus/></a>
                                </div>
                            </div>
                            <div className="text-dark border p-4 ">
                                <h4 className="mb-4">Save The Topic Forests</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
                                <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Blog