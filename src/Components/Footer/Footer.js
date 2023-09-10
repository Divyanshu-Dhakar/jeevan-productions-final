import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
  <h1>JEEVAN PRODUCTIONS</h1>
  <ul className="footermenu">
    <li>
      <a href="#Services">Services</a>
    </li>
    <li>

      <a href="#About">About</a>
    </li>
    <li>

      <a href="#Contact">Contact</a>
    </li>
    <li>
      <a href="#Testimonials">Testimonials</a>
    </li>
  </ul>
  <div className="footerbottom">
    <ul className="footericons">
      {/* In order to use these icons paste   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"> in html <head> tag. */}
      <li>

        <a href="https://www.instagram.com/jeevan_productions/">
          <i className="fa-brands fa-instagram color-white" />
        </a>
      </li>
      <li>
    
        <a href="https://www.facebook.com/jeevanproduction">
          <i className="fa-brands fa-facebook color-white" />
        </a>
      </li>
    </ul>
    <p>© All rights reserved to <a href='https://www.instagram.com/big.branders/'>Big Branders</a></p>
  </div>
</footer>

    </div>
  )
}

export default Footer
