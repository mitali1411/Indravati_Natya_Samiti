import React from 'react'
import Image1 from '../../assets/24.jpg'
import Image2 from '../../assets/27.jpg'
import Image3 from '../../assets/3.jpg'


const Donation = () => {
    const Cards = [
        {img: Image1, heading: "Drama", title: "Help Us More", subtitle: "Learn Acting", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"},
        {img: Image2, heading: "Theatre", title: "Help Us More", subtitle: "Learn Acting", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"},
        {img: Image3, heading: "Acting", title: "Help Us More", subtitle: "Learn Acting", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"},
    ]
  return (
    <div className="container-fluid donation py-5">
    <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{maxWidth: 800}}>
            <h5 className="text-uppercase text-primary">Donation</h5>
            <h1 className="mb-0">Your money will save our life</h1>
        </div>
        <div className="row g-4">
            {Cards.map((item, index)=> 
            <div className="col-lg-4" key={index}>
                <div className="donation-item" style={{height:420}}>
                    <img src={item.img} className="img-fluid w-100" alt="Image"/>
                    <div className="donation-content d-flex flex-column">
                        <h5 className="text-uppercase text-primary mb-4">{item.heading}</h5>
                        <a href="#" className="btn-hover-color display-6 text-white">{item.title}</a>
                        <h4 className="text-white mb-4">{item.subtitle}</h4>
                        <p className="text-white mb-4">{item.description}</p>
                        <div className="donation-btn d-flex align-items-center justify-content-start">
                            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Donate !</a>
                        </div>
                    </div>
                </div>
            </div>)}
            <div className="col-12">
                <div className="d-flex align-items-center justify-content-center">
                    <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">All Donation</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Donation