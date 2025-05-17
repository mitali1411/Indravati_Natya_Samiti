import React from 'react'
import Image1 from '../../assets/21.jpg'
import Image2 from '../../assets/32.jpg'
import Image3 from '../../assets/23.jpg'

const HeroSection = () => {
    // const carousel = [
    //     {img: Image1, text:"We are an NGO", title:"Indravati Natya Samiti", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora facilis eius? Porro, placeat suscipit. Distinctio voluptatibus voluptatum, dolorem cupiditate tenetur delectus asperiores illo quidem incidunt, eligendi, repellendus sint ut."},
    //     {img: Image1, text:"We are an NGO", title:"We are Theatre", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora facilis eius? Porro, placeat suscipit. Distinctio voluptatibus voluptatum, dolorem cupiditate tenetur delectus asperiores illo quidem incidunt, eligendi, repellendus sint ut."},
    //     {img: Image1, text:"An Organization", title:"Indravati Natya Samiti", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora facilis eius? Porro, placeat suscipit. Distinctio voluptatibus voluptatum, dolorem cupiditate tenetur delectus asperiores illo quidem incidunt, eligendi, repellendus sint ut."},
    // ]
  return (
    <div className="container-fluid carousel-header vh-80 px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                </ul>
                <div className="carousel-inner" role="listbox">  
                    <div className="carousel-item">
                        <img src={Image1} className="img" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="p-3" style={{maxWidth: 900}}>
                                <h4 className="text-white text-uppercase fw-bold mt-4" style={{letterSpacing: 3}}>We are an NGO</h4>
                                <h1 className="display-2 text-capitalize text-white mb-4">Indravati Natya Samiti</h1>
                                <p className="mt-3 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Join With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item active">
                        <img src={Image2} className="img-fluid" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="p-3" style={{maxWidth: 900}}>
                                <h4 className="text-white text-uppercase fw-bold mt-4" style={{letterSpacing: 3}}>We are Theatre</h4>
                                <h1 className="display-2 text-capitalize text-white mb-4">Indravati Natya Samiti</h1>
                                <p className="mt-3 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora facilis eius? Porro, placeat suscipit. Distinctio voluptatibus voluptatum, dolorem cupiditate tenetur delectus asperiores illo quidem incidunt, eligendi, repellendus sint ut.</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Join With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={Image3} className="img-fluid" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="p-3" style={{maxWidth: 900}}>
                                <h4 className="text-white text-uppercase fw-bold mt-4" style={{letterSpacing: 3}}>An Organization</h4>
                                <h1 className="display-2 text-capitalize text-white mb-4">Indravati Natya Samiti</h1>
                                <p className="mt-3 fs-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat praesentium officiis minima pariatur dolorum in ipsa unde nam. Labore adipisci assumenda voluptatibus et aliquid, molestiae nihil voluptatum. Voluptates, ratione fuga!</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn-hover-bg btn btn-primary text-white px-4 py-2" href="#">Join With Us</a>
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