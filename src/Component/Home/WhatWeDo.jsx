import React from 'react'
import Image1 from '../../assets/30.jpg'
import Image2 from '../../assets/28.jpg'
import Image3 from '../../assets/31.jpg'
import Image4 from '../../assets/25.jpg'

const WhatWeDo = () => {
    let cards = [
        {img: Image1, title: "Raising money to help", description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
        {img: Image2, title: "Close work with services", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
        {img: Image3, title: "Protecting animal area", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
        {img: Image4, title: "Pro Guided tours only", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
    ]
  return (
    <div className="container-fluid service py-5 bg-light">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5" style={{maxWidth: 800}}>
                    <h5 className="text-uppercase text-primary">What we do</h5>
                    <h1 className="mb-0">What we do to protect environment</h1>
                </div>
                <div className="row g-4">
                    {cards.map((item, index) => {
                        return(
                        <div className="col-md-6 col-lg-6 col-xl-3" key={index}>
                        <div className="service-item">
                            <img src={item.img} className="img-fluid w-100" style={{height:400}} alt="Image"/>
                            <div className="service-link">
                                <a href="#" className="h4 mb-0">{item.title}</a>
                            </div>
                        </div>
                        <p className="my-4">{item.description}</p>
                        </div>
                        )
                    })}
                    </div>
            </div>
        </div>
  )
}

export default WhatWeDo