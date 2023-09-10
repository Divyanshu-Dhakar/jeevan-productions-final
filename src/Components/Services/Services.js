import React from 'react'
import './Services.css'


const Services = () => {
  return (
    <div>
    <div className='service-section' >
      <h1>OUR SERVICES</h1>
    </div>
    <div className="services" id="Services">
<div className="service-cards">
  <div className="card">
    <div className="icon-wrapper">
      <i className="fa-solid fa-camera" />
    </div>
    <h3>Photography &amp; Videography</h3>
    <p>
      Capturing life's beauty through stunning photography and compelling
      videography. Preserving moments to cherish forever. Your memories, our
      passion.
    </p>
  </div>
  <div className="card">
    <div className="icon-wrapper">
      <i className="fa-solid fa-pen-nib" />
    </div>
    <h3>Graphic Design</h3>
    <p>
      Unlock your brand's potential with captivating graphic design. From
      logos to visuals, we craft designs that make a lasting impact.
    </p>
  </div>
  <div className="card">
    <div className="icon-wrapper">
      <i className="fa-solid fa-pen" />
    </div>
    <h3>Content Writing &amp; Creation</h3>
    <p>
      Crafting compelling content that captivates and converts. Our content
      writing and creation service brings your brand's story to life.
    </p>
  </div>
  <div className="card">
    <div className="icon-wrapper">
      <i className="fa-solid fa-mobile" />
    </div>
    <h3>Social Media Consultation, Strategies, and Management</h3>
    <p>
      Maximize your online presence with expert social media consultation,
      tailored strategies, and seamless management for impactful engagement
      and growth.
    </p>
  </div>
  <div className="card">
    <div className="icon-wrapper">
      <i className="fa-solid fa-square-poll-vertical" />
    </div>
    <h3>Marketing</h3>
    <p>
      Driving growth and success through data-driven marketing strategies. Our
      expertise empowers your brand to thrive in the digital landscape.
    </p>
  </div>
  <div className="card">
    <div className="icon-wrapper">
      <i className="fa-solid fa-question" />{" "}
    </div>
    <h3>Looking for more?</h3>
    <p>
      Are you looking forward to make your buisness a brand then you are at
      the right place.
      <br/>
      <br/>
     < a href="#contact" style={{backgroundColor:'#4774fe', borderRadius:'0.2rem' }}>Let's have a conversation</a>
    </p>
  </div>
</div>
</div>

  </div>
  )
}

export default Services
