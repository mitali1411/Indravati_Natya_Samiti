import React from 'react'
import Event1 from '../assets/31.jpg'
import Event2 from '../assets/34.jpg'
import Event3 from '../assets/31.jpg'

const EventGrid = () => {
     const slides = [
        {img: Event1, title: "OPEN MIC", text: "If not now they might never return",},
        {img: Event2, title: "PATNI KA PATRA", text: "Help children go to school instead",},
        {img: Event3, title: "THEATRE WORKSHOP", text: "Provide resources for a brighter future",},
        {img: Event1, title: "OPEN MIC", text: "If not now they might never return",},
        {img: Event2, title: "PATNI KA PATRA", text: "Help children go to school instead",},
        {img: Event1, title: "THEATRE WORKSHOP", text: "Provide resources for a brighter future",},
        ]
  return (
    <div className="event-container">
      <div className='container py-5'>
        <div className="text-center mx-auto pb-5" style={{maxWidth: 800}}>
                    <h5 className="text-uppercase text-primary">Events</h5>
                    <h1 className="mb-0">What we do to protect environment</h1>
      </div>
      <div className='row g-5'>
            {slides.map((item, index) => {
                return(
                    <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="card shadow-sm">
                            <img src={item.img} alt=""  className='img-fluid'/>
                        </div>
                            <div className="card-body p-3">
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </div>
                    </div>
                )
            })
        }
      </div>
      </div>
    </div>
  )
}

export default EventGrid