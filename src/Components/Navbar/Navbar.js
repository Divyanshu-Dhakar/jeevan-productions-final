import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.png'

const Navbar = () => {
  return (
    <div>
            <section className="top-nav">
    <div className='logo'><h3>JEEVAN PRODUCTIONS</h3></div>
    <input id="menu-toggle" type="checkbox" />
    <label className="menu-button-container" htmlFor="menu-toggle">
      <div className="menu-button" />
    </label>
    <ul className="menu">
      <li><a href='#Services'>Services</a></li>
      <li><a href='#About'>About</a></li>
      <li><a href='#contact'>Contact</a></li>
      <li><a target='_blank' href='https://www.instagram.com/jeevan_productions/'>Instagram</a></li>
    </ul>
  </section>
    </div>
  )
}

export default Navbar
