import React from "react";
import "./skills.css";

const skills = [
  {
    heading: "Html",
    text: "I have a strong foundation in HTML, the core language for structuring content on the web.",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3260195/htm-icon-md.png",
  },
  { heading: "Css", text: "With a deep understanding of CSS, I have the expertise to create visually engaging, responsive, and user-friendly web designs.", img: "" },
  { heading: "JavaScript", text: "I am proficient in JavaScript, enabling me to create interactive and dynamic user experiences on the web. With a focus on clean and efficient code, I can handle a variety of tasks from DOM manipulation to API integration", img: "" },
  { heading: "React.js", text: "I have extensive experience in building high-performance, scalable, and maintainable web applications using React.js. With a strong grasp of React’s component-based architecture, I create dynamic and responsive user interfaces while adhering to best practices for code efficiency and reusability.", img: "" },
  { heading: "React Native", text: "hello", img: "" },
  { heading: "Node.js", text: "hello", img: "" },
  { heading: "PostgerSQL", text: "hello", img: "" },
];

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam
        accusantium amet vitae, et obcaecati voluptates ab, libero nulla
        consequuntur maiores? Ipsam, aperiam natus in laudantium eligendi
        similique nam fugiat.
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
