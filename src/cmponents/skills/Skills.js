import React from "react";
import "./skills.css";

const skills = [
  {
    heading: "Html",
    text: "I have a strong foundation in HTML, the core language for structuring content on the web.",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3260195/htm-icon-md.png",
  },
  { heading: "Css", text: "With a deep understanding of CSS, I have the expertise to create visually engaging, responsive, and user-friendly web designs.", img: "" },
  { heading: "JavaScript", text: "I am proficient in JavaScript, enabling me to create interactive and dynamic user experiences on the web.", img: "" },
  { heading: "React.js", text: "I have extensive experience in building high-performance, scalable, and maintainable web applications using React.js.", img: "" },
  { heading: "React Native", text: "I am skilled in developing cross-platform mobile applications using React Native, leveraging the power of JavaScript", img: "" },
  { heading: "Node.js", text: "I am proficient in building scalable and efficient server-side applications using Node.js. With a focus on high-performance back-end development", img: "" },
  { heading: "PostgerSQL", text: " have extensive experience working with PostgreSQL, a powerful open-source relational database system", img: "" },
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
