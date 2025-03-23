import React from 'react'
import Logo from '../assets/Logo.jpg'

const Gallery = () => {

    const GridPic = [
        {image:Logo, desc : "Music"},
        {image:Logo, desc : "Music"},
        {image:Logo, desc : "Music"},
        {image:Logo, desc : "Music"},
        {image:Logo, desc : "Music"},
        {image:Logo, desc : "Music"},
        {image:Logo, desc : "Music"},
        {image:Logo, desc : "Music"},

    ]

  return (
    <div className='p-3'>
        <div className='row'>
        {
            GridPic.map((item, index) => 
                <div className="col-md-3 col-lg-3 col-sm-6 g-5">
                    <div className='bg-primary text-light d-flex flex-column jusitfy-content-between align-items-center p-3'>
                    <img src={item.image} alt="" style={{borderRadius:30, width:150}}/>
                    <p>{item.desc}</p>
                    </div>
                </div>
            )
        }
    </div>
    </div>
  )
}

export default Gallery