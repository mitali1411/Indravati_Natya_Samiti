import React from 'react'
import Image1 from '../assets/37.jpg'
import Image2 from '../assets/38.jpg'

const Awards = () => {
    const cards = [
        { img: Image1, title: 'Award 1', description: 'This is a description of award 1.',},
        { img: Image2, title: 'Award 2', description: 'This is a description of award 2.',},
        { img: Image1, title: 'Award 3', description: 'This is a description of award 3.',},
        { img: Image2, title: 'Award 4', description: 'This is a description of award 4.',},
    ]
  return (
    <div className="container-fluid award">
        <div className='container py-5'>
        <h5 className='text-center text-uppercase text-primary'>Awards & Recongnition</h5>
        <h1 className="mb-0 text-center">Recongnize by hounourable teams</h1>
        <div className="row g-4">
                {
                    cards.map((card, index) => {
                        return (
                            <div className="award-item col-md-6 col-lg-4 col-xl-3 pt-5 text-center" key={index}>
                                <div className="award-img">
                                    <img src={card.img} className="img-fluid"/>
                                </div>
                                <h5 className="mt-3">{card.title}</h5>
                                <p className='mt-2'>{card.description}</p>
                            </div>
                        )
                    })
                }
        </div>
    </div>
    </div>
  )
}

export default Awards