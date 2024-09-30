import React from "react";
import "./skills.css"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import postgress from '../../assets/postgresql.png'
import node from "../../assets/node.png"


const skills = [
  {
    heading: "Html",
    text: "I have a strong foundation in HTML, the core language for structuring content on the web.",
    img: html },
  {
    heading: "Css",
    text: "With a deep understanding of CSS, I have the expertise to create visually engaging, responsive, and user-friendly web designs.",
    img: css,
  },
  {
    heading: "JavaScript",
    text: "I am proficient in JavaScript, enabling me to create interactive and dynamic user experiences on the web.",
    img: js },
  {
    heading: "React.js",
    text: "I have extensive experience in building high-performance, scalable, and maintainable web applications using React.js.",
    img: react},
  {
    heading: "React Native",
    text: "I am skilled in developing cross-platform mobile applications using React Native, leveraging the power of JavaScript",
    img: react,
  },
  {
    heading: "Node.js",
    text: "I am proficient in building scalable and efficient server-side applications using Node.js. With a focus on high-performance back-end development",
    img:node },
  {
    heading: "PostgerSQL",
    text: " have extensive experience working with PostgreSQL, a powerful open-source relational database system",
    img: postgress,
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
