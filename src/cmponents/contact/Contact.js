import React from 'react'
import "./contact.css";
import Linkedin from "../../assets/linkedin.jpg";
import Insta from "../../assets/insta.jpg"



const Contact = () => {
  return (
    <section id='contact'>
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to disscuss any work opportunities.</span>
        <form action="" className="contactForm">
        {/* <input type="text" className="name" placeholder='Your Name'/> */}
        <input type="text" className="email" placeholder='Your Name'/>

            <input type="email" className="email" placeholder='Your Email'/>
            <textarea name="message" rows={'5'} className='msg' placeholder='Your Message'/>
            <button className="submitBtn" type='submit'>Submit</button>
            <div className="links">
                <img src={Linkedin} alt="" className="link" />
                <img src={Insta} alt="" className="link" />
            </div>
        </form>

    </section>
  )
}

export default Contact