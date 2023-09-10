import React from 'react'
import './Slider.css'
import slider1 from '../../Images/1.png'
import slider2 from '../../Images/2.png'
import slider3 from '../../Images/3.png'
import slider4 from '../../Images/4.png'

const Slider = () => {
  return (
   <>
   <div className='slider'>
<div className='slider-container'>
   <div className="slider-wrapper">
     <img src={slider1} />
     <img src={slider2} />
     <img src={slider3} />
     <img src={slider4} />
   </div>
   </div>
   </div>
 </>


  )
}

export default Slider
