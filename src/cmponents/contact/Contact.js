import React, { useRef } from "react";
import "./contact.css";
import Linkedin from "../../assets/linkedin.jpg";
import Insta from "../../assets/insta.jpg";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_saw5tl8", "template_9ehrc7h", form.current, {
        publicKey: "4isv0jyQuGYhrA5IQ",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Your message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <span className="contactTitle">Contact Me</span>
      <span className="contactDesc">
        Please fill out the form below to disscuss any work opportunities.
      </span>
      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        {/* <input type="text" className="name" placeholder='Your Name'/> */}
        <input
          type="text"
          className="email"
          placeholder="Your Name"
          name="from_name"
        />

        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          name="message"
          rows={"5"}
          className="msg"
          placeholder="Your Message"
        />
        <button className="submitBtn" type="submit">
          Submit
        </button>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/gauresh-warang-608159226/"
            target="_blank"
          >
            <img src={Linkedin} alt="" className="link" />
          </a>
          <a
            href="https://www.instagram.com/direct/t/105834377484590/"
            target="_blank"
          >
            <img src={Insta} alt="" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
