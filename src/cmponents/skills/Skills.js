import React from "react";
import "./skills.css";

const skills = [
  {
    heading: "Html",
    text: "I have a strong foundation in HTML, the core language for structuring content on the web.",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3260195/htm-icon-md.png",
  },
  {
    heading: "Css",
    text: "With a deep understanding of CSS, I have the expertise to create visually engaging, responsive, and user-friendly web designs.",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3411890/css-icon-md.png",
  },
  {
    heading: "JavaScript",
    text: "I am proficient in JavaScript, enabling me to create interactive and dynamic user experiences on the web.",
    img: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
  },
  {
    heading: "React.js",
    text: "I have extensive experience in building high-performance, scalable, and maintainable web applications using React.js.",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236966/reactjs-icon-md.png",
  },
  {
    heading: "React Native",
    text: "I am skilled in developing cross-platform mobile applications using React Native, leveraging the power of JavaScript",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236966/reactjs-icon-md.png",
  },
  {
    heading: "Node.js",
    text: "I am proficient in building scalable and efficient server-side applications using Node.js. With a focus on high-performance back-end development",
    img: "https://th.bing.com/th/id/R.4b12dd41635001837f4fe5f02de9a6eb?rik=y7BKtyI8b9gs9A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-png-create-a-model-to-persist-data-in-a-node-js-loopback-api-from-beeman-nl-on-eggheadio-1200.png&ehk=6QNKnM%2f%2bkMi12S13FW11YvhIrCCwsXSuPKmnrw514os%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    heading: "PostgerSQL",
    text: " have extensive experience working with PostgreSQL, a powerful open-source relational database system",
    img: "https://static-00.iconduck.com/assets.00/postgresql-icon-2048x2026-2lkx6hk5.png",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        As a dedicated full stack developer, I specialize in building dynamic,
        scalable, and user-friendly web applications. I bring expertise in both
        front-end and back-end technologies, with a focus on delivering
        efficient and high-performing solutions.
      </span>
      <div className="skillBars">
        {skills?.map((val) => {
          return (
            <div className="skillbar">
              <img src={val?.img} alt="" className="skillBarImg" />
              <div className="skillBarText">
                <h2>{val?.heading}</h2>
                <p>{val?.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
