import React, { useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-scroll'

const NavBar = () => {
  const [showMenue,setShowMenue]=useState(false);
  return (
    <nav className='navbar'>
    <img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt=""  className='logo'/>
    <div className='desktopMenu'>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Skills</Link>
     <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Portfolio</Link>
    </div>
    <button className='desktopMenubtn' onClick={()=>{
          const contactElement = document.getElementById("contact");
          const yOffset = -50; // Set your desired offset here (negative moves up)
          const y = contactElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
      
    }}>Contact Me</button>

<img src="https://www.pinclipart.com/picdir/big/532-5328945_menu-bar-icon-white-clipart-png-download-menu.png" alt=""  className='menu' onClick={()=>setShowMenue(!showMenue)}/>
    <div className='navMenu' style={{display:showMenue?'flex':"none"}}>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem"onClick={()=>setShowMenue(false)}>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem"onClick={()=>setShowMenue(false)}>Skills</Link>
     <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem"onClick={()=>setShowMenue(false)}>Portfolio</Link>
     <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}onClick={()=>setShowMenue(false)} className="desktopMenuItem">Contact</Link>
    </div>
    </nav>
  )
}

export default NavBar