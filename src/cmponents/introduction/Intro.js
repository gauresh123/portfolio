import React from 'react'
import "./intro.css"
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introcontent">
            <span className="hello">Hello,</span>
            <span className="introduction">I'm<span className='name'>Gauresh</span><br />Full Stack Developer</span>
            <p className="introparagraph">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sed porro iste provident.</p>
        <Link><button className='btn'>Hire me</button></Link>


        </div>
        <img src="https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="" className="introimg" />
    </section>
  )
}

export default Intro