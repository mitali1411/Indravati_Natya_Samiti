import React from 'react'
import Image1 from '../../assets/1.jpg'
import Image2 from '../../assets/3.jpg'

const HeroSection = () => {
  return (
    <div className="container-fluid carousel-header vh-100 px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                </ul>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src={Image2} className="img-fluid" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="p-3" style={{maxWidth: 900}}>
                                <h4 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: 3}}>We are an NGO</h4>
                                <h1 className="display-1 text-capitalize text-white mb-4">Indravati Natya Samiti</h1>
                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="#">Join With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image1} className="img-fluid" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="p-3" style={{maxWidth: 900}}>
                                <h4 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: 3}}>We are an NGO</h4>
                                <h1 className="display-1 text-capitalize text-white mb-4">Indravati Natya Samiti</h1>
                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="#">Join With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="img-fluid" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="p-3" style={{maxWidth: 900}}>
                                <h4 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: 3}}>We are an NGO</h4>
                                <h1 className="display-1 text-capitalize text-white mb-4">Indravati Natya Samiti</h1>
                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="#">Join With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
  )
}

export default HeroSection