import React from "react";
import "./portfolio.css";
import work1 from "../../assets/work-1.png";
import work2 from "../../assets/work-2.png";
import work3 from "../../assets/work-3.png";

const projects = [
  { name: "SOGOCRM", description: "This App is about Providing QR Code solutions, URL Shortner,Creating Whatsapp Campaigns ,Creating Email Campaigns,Payment Integration with Razorpay", image: work1,url:"https://gosol.ink/" },
  { name: "Project 2", description: "Description for Project 2", image: work2 },
  { name: "Project 3", description: "Description for Project 3", image: work3 },
  { name: "Project 4", description: "Description for Project 4", image: work1 },
  { name: "Project 5", description: "Description for Project 5", image: work2 },
  { name: "Project 6", description: "Description for Project 6", image: work3 },
];

const PortFolio = () => {
  return (
    <section id="work">
      <span className="workTitle">My Portfolio</span>
      <span className="workDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam
        accusantium amet vitae, et obcaecati voluptates ab, libero nulla
        consequuntur maiores? Ipsam, aperiam natus in laudantium eligendi
        similique nam fugiat.
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
