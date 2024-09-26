import React from 'react'
import "./NavBar.css"
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='navbar'>
    <img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt=""  className='logo'/>
    <div className='desktopMenu'>
    <Link className="desktopMenuItem">Home</Link>
    <Link className="desktopMenuItem">Skills</Link>
    <Link className="desktopMenuItem">About</Link>
    <Link className="desktopMenuItem">Portfolio</Link>
    </div>
    <button className='desktopMenubtn'>Contact Me</button>
    </nav>
  )
}

export default NavBar