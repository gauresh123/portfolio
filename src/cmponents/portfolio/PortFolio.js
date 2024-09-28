import React from "react";
import "./portfolio.css";
import work1 from "../../assets/work-1.png";
import work2 from "../../assets/work-2.png";
import work3 from "../../assets/work-3.png";

const projects = [
  {
    name: "SOGOCRM",
    description:
      "This App is about Providing QR Code solutions, URL Shortner,Creating Whatsapp Campaigns ,Creating Email Campaigns,Payment Integration with Razorpay",
    image: work1,
    url: "https://gosol.ink/",
  },
  {
    name: "SOGO-CLIENT",
    description:
      "This is the e-commerce application for distributors and retailers where both can place orders.",
    image: work2,
    url: "http://live.thesogo.com/",
  },
  {
    name: "CHATME",
    description:
      "Basic Chat Application where user can perform activities like sending text messages, images , creating group , voice call , add profile picture,edit profile etc",
    image: work3,
    url:"https://chat-app-ui-hs4h.onrender.com/"
  },
  {
    name: "SOGO-MOBILE-APP",
    description:
      "This Mobile App is based on React Native , Expo it is e-commerce type application for distributors.",
    image: work3,
  },
  {
    name: "BOGO-MOBILE-APP",
    description:
      "This Mobile App is based on React Native , Expo it is e-commerce type application for retailers",
    image: work1,
  },
  {
    name: "SOGO-API",
    description:
      "This is based on Node js and Express this is Backend for the ui of SOGOCRM ,SOGOClIENT ,SOGO MOBILE APP and BOGO MOBILE APP",
    image: work2,
  },
];

const PortFolio = () => {
  return (
    <section id="work">
      <span className="workTitle">My Portfolio</span>
      <span className="workDesc">
        I specialize in building efficient, scalable solutions, focusing on
        seamless integration between front-end and back-end technologies.
      </span>
      <div className="workimgs">
        {projects.map((project, index) => (
          <a className="project-card" href={project.url} target="_blank">
            <img
              src={project.image}
              alt={project.name}
              className="project-image workimg"
            />
            <div className="overlay">
              <div className="text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortFolio;
