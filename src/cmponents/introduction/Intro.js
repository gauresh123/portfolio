import React from 'react'
import "./intro.css"
import { Link } from 'react-scroll'
import profile from "../../assets/profile.jpg"

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introcontent">
            <span className="hello">Hello,</span>
            <span className="introduction">I'm <span className='introduction' id='name'>Gauresh</span><br />Full Stack Developer</span>
            <p className="introparagraph">I am a full stack developer<br />proficient in building web and mobile applications.</p>
        <Link><button className='btn' onClick={()=>{
                    const contactElement = document.getElementById("contact");
                    const yOffset = -50; // Set your desired offset here (negative moves up)
                    const y =
                      contactElement.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
          
        }}>Hire me</button></Link>


        </div>
        <img src={profile} alt="" className="introimg" />
    </section>
  )
}

export default Intro