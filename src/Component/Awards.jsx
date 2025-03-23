import React from 'react'
import Image1 from '../assets/11.svg'

const Awards = () => {
    const cards = [
        {
            img: Image1,
            title: 'Award 1',
        },
        {
            img: Image1,
            title: 'Award 2',
        },
        {
            img: Image1,
            title: 'Award 3',
        },
        {
            img: Image1,
            title: 'Award 4',
        },
        {
            img: Image1,
            title: 'Award 5',
        },
    ]
  return (
    <div className="container-fluid">
        <div className='container text-light py-5' id='award'>
        <h3 className='text-center'>Awards & Recongnition</h3>
        <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 gap-2 d-flex">
                {
                    cards.map((card, index) => {
                        return (

                            <div className="card" key={index}>
                                <div className="card-body">
                                    <img src={card.img} className="card-image w-50"/>
                                    <p className="card-text">{card.title}</p>
                                </div>
                            </div>

                        )
                    })
                }
                </div>
        </div>
    </div>
    </div>
  )
}

export default Awards