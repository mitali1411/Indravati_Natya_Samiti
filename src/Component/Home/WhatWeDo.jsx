import React from 'react'
import Image1 from '../../assets/1.jpg'

const WhatWeDo = () => {
  return (
    <div className="container-fluid service py-5 bg-light">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5" style={{maxWidth: 800}}>
                    <h5 className="text-uppercase text-primary">What we do</h5>
                    <h1 className="mb-0">What we do to protect environment</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="service-item">
                            <img src={Image1} className="img-fluid w-100" alt="Image"/>
                            <div className="service-link">
                                <a href="#" className="h4 mb-0">Raising money to help</a>
                            </div>
                        </div>
                        <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="service-item">
                            <img src={Image1} className="img-fluid w-100" alt="Image"/>
                            <div className="service-link">
                                <a href="#" className="h4 mb-0"> close work with services</a>
                            </div>
                        </div>
                        <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="service-item">
                            <img src={Image1} className="img-fluid w-100" alt="Image"/>
                            <div className="service-link">
                                <a href="#" className="h4 mb-0">Pro Guided tours only</a>
                            </div>
                        </div>
                        <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="service-item">
                            <img src={Image1} className="img-fluid w-100" alt="Image"/>
                            <div className="service-link">
                                <a href="#" className="h4 mb-0">Protecting animal area</a>
                            </div>
                        </div>
                        <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-center">
                            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WhatWeDo