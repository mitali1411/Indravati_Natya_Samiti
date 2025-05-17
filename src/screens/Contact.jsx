import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'
import { PiWhatsappLogoThin } from 'react-icons/pi'

const Contact = () => {

        const iconMap = {
        location: CiLocationOn ,
        mail: CiMail,
        call: CiPhone,
        whatsapp: PiWhatsappLogoThin
    };

    let info = [
        {i : 'location', title: "Our Office", description: "353, near SKPS school, Sector A, Tilak Nagar, Indore, Madhya Pradesh 452010"},
        {i: 'mail', title: "Our Email", description: "indravatidramasociety@gmail.com"},
        {i: 'call', title: "Call Us", description: "(+91) 9926094042"},
        {i: 'whatsapp', title: "Whatsapp", description: "(+91) 9926094042"},
    ]

  return (
    <>
    <Navbar/>
    <div className='container-fluid contact' style={{marginBlockStart:150}}>
        <div className="container py-5">
            {/* <div className="text-center mx-auto" style={{maxWidth: 800}}>
                <h2 className='text-uppercase text-primary'>Contact Us</h2>   
            </div> */}
            <div className="row g-5">
                <div className="col-xl-5">
                   <form className='form'>
                    <h5>Leave A Message</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <input type="text" className='form-control mt-5' placeholder='Enter your name' />
                    <input type="email" className='form-control' placeholder='Enter your email' />
                    <input type="text" className='form-control' placeholder='Enter subject' />
                    <textarea className='form-control' placeholder='Your message'></textarea>
                    <button type='submit' className='btn btn-primary mt-3 w-100'>Submit</button>
                   </form>
                </div>
                <div className="col-xl-7">
                    <div className='info'>
                        <h1 className='text-primary'>Get In Touch</h1>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus nobis repellendus nesciunt iure quasi qui ad ut corporis at amet ducimus, quae esse maxime, magnam iste vitae, voluptate illum.</p>

                        {info.map((item, index) => {
                        const IconComponent = iconMap[item.i];
                        return(<div className='info-element d-flex align-items-center' key={index}>
                            <div className='icon bg-primary text-secondary mx-2 border-radius border-1 p-2'>{IconComponent && <IconComponent/>}</div>
                            <div className='info-detail px-3'>
                                <h4 className='text-primary mt-3 m-auto'>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>)})}
                    </div>
                </div>
            </div>

            <div className='py-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2592681867336!2d75.89898219999999!3d22.7186028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0049026a91%3A0xf3eae71ad4c45f3d!2sIndravati%20Natya%20Samiti%2C%20Indore%20(INS%20THEATRE)!5e0!3m2!1sen!2sin!4v1747395895665!5m2!1sen!2sin" className='w-100' style={{height:400}} loading="lazy"></iframe>
            </div>
        </div>
    </div>
    <Footer/>
    </>
)
}

export default Contact