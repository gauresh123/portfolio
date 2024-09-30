import React, { useRef } from 'react'
import "./contact.css";
import Linkedin from "../../assets/linkedin.jpg";
import Insta from "../../assets/insta.jpg";
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_saw5tl8', 'template_9ehrc7h', form.current, {
        publicKey: '4isv0jyQuGYhrA5IQ',
      })
      .then(
        () => {
          form.current.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>
        <span className="contactTitle">Contact Me</span>
        <span className="contactDesc">Please fill out the form below to disscuss any work opportunities.</span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        {/* <input type="text" className="name" placeholder='Your Name'/> */}
        <input type="text" className="email" placeholder='Your Name' name='from_name'/>

            <input type="email" className="email" placeholder='Your Email' name='from_email'/>
            <textarea name="message" rows={'5'} className='msg' placeholder='Your Message' />
            <button className="submitBtn" type='submit'>Submit</button>
            <div className="links">
                <a href=""><img src={Linkedin} alt="" className="link" /></a>
               <a href=""><img src={Insta} alt="" className="link" /></a> 
            </div>
        </form>

    </section>
  )
}

export default Contact