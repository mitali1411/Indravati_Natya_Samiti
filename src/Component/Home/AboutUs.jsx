import React from 'react'
import Poster from '../../assets/27.jpg'

const AboutUs = () => {
  return (
    <div className="container-fluid about">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{maxWidth: 800}}>
          <h5 className="text-uppercase text-primary">About Us</h5>
          <h1 className="mt-3">What we do to protect environment</h1>
          {/* <p className="fs-6 mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
      </div>
        <div className="row g-5">
          <div className="col-xl-5">
            <div className="">
              <img src={Poster} className="img-fluid" alt="Image"/>
            </div>
          </div>
          <div className="col-xl-7">
            {/* <h5 className="text-uppercase text-primary">About Us</h5> */}
          <p className="fs-6 mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="tab-class bg-secondary p-4">
              <ul className="nav d-flex mb-2">
                <li className="nav-item mb-3">
                  <a className="d-flex py-2 text-center bg-white active" data-bs-toggle="pill" href="#tab-1">
                    <span className="text-dark" style={{width: 120}}>About</span>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a className="d-flex py-2 mx-3 text-center bg-white" data-bs-toggle="pill" href="#tab-2">
                    <span className="text-dark" style={{width: 120}}>Mission</span>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a className="d-flex py-2 text-center bg-white" data-bs-toggle="pill" href="#tab-3">
                    <span className="text-dark" style={{width: 120}}>Vision</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-start my-auto">
                          <h5 className="text-uppercase mb-3">Lorem Ipsum 1</h5>
                          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, veritatis. Iste alias laudantium commodi. Unde amet atque dolores totam modi illo pariatur, quos incidunt. Ea nisi commodi quasi velit quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima reprehenderit ex illum. Provident recusandae laborum, ipsa quia sunt nostrum quos maiores ut repellat reprehenderit asperiores assumenda explicabo ullam quam!</p>
                          <div className="d-flex align-items-center justify-content-start">
                            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-start my-auto">
                          <h5 className="text-uppercase mb-3">Lorem Ipsum 2</h5>
                          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                          <div className="d-flex align-items-center justify-content-start">
                            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-start my-auto">
                          <h5 className="text-uppercase mb-3">Lorem Ipsum 3</h5>
                          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                          <div className="d-flex align-items-center justify-content-start">
                            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>                            
            </div>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default AboutUs