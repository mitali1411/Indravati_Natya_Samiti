import React from 'react'
import Image1 from '../../assets/NEWS/1.jpg'
import Image2 from '../../assets/NEWS/2.jpg'
import Image3 from '../../assets/NEWS/3.jpg'
import Image4 from '../../assets/NEWS/4.jpg'
import { BsClockFill, BsHeartFill } from 'react-icons/bs'
import { FaComment, FaSearchPlus } from 'react-icons/fa'

const Blog = () => {
    let Cards = [
        {img:Image1, title:"Art Impact in Society", description:"Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.", date:"Dec 12 2024", likes: "108", comments: "52"},
        {img:Image2, title:"Art Impact in Society", description:"Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.", date:"Dec 12 2024", likes: "108", comments: "52"},
        {img:Image3, title:"Art Impact in Society", description:"Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.", date:"Dec 12 2024", likes: "108", comments: "52"},
        {img:Image4, title:"Art Impact in Society", description:"Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.", date:"Dec 12 2024", likes: "108", comments: "52"},
    ]
    return (
    <div className="container-fluid blog py-5 bg-secondary">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5" style={{maxWidth: 800}}>
                    <h5 className="text-uppercase text-primary">Latest News & Blog</h5>
                    <h1 className="mb-0">Help today because tomorrow you may be the one who needs more helping!
                    </h1>
                </div>
                <div className="row g-4">
                    {Cards.map((item, index) => 
                        <div className="col-lg-6 col-xl-3" key={index}>
                        <div className="blog-item shadow">
                            <div className="blog-img">
                                <img src={item.img} className="img-fluid w-100" style={{height:230}} alt=""/>
                                <div className="blog-info">
                                    <span className='d-flex align-items-center justify-content-center'><BsClockFill/>&nbsp; {item.date}</span>
                                    <div className="d-flex">
                                        <span className="me-3"> {item.likes} <BsHeartFill/></span>
                                        <a href="#" className="text-white">{item.comments} <FaComment/></a>
                                    </div>
                                </div>
                                <div className="search-icon">
                                    <a href={item.img} data-lightbox="Blog-1" className="my-auto btn btn-primary text-white p-2"><FaSearchPlus/></a>
                                </div>
                            </div>
                            <div className="text-dark border p-4 ">
                                <h4 className="mb-4">{item.title}</h4>
                                <p className="mb-4">{item.description}</p>
                                <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
  )
}

export default Blog