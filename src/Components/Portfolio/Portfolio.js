import React from 'react'
import './Portfolio.css'
import grid1 from '../../Images/grid1.jpg'
import grid2 from '../../Images/grid2.jpeg'
import grid3 from '../../Images/grid3.jpg'
import grid4 from '../../Images/grid4.jpg'
import grid5 from '../../Images/grid5.jpg'

import grid6 from '../../Images/grid6.jpg'

import grid7 from '../../Images/grid7.jpg'

import grid8 from '../../Images/grid8.jpg'

import grid9 from '../../Images/grid9.JPG'



const Portfolio = () => {
  return (
    <div>
      <div className='portfolio'>
      <h1>PORTFOLIO</h1>
    
        <p>
        Our passionate team of creatives transforms businesses into remarkable brands through compelling narratives and visually stunning content. We understand the art of storytelling and its impact on brand perception, collaborating closely with clients to align every aspect with their vision and values. Offering a comprehensive range of services such as brand strategy, logo design,, social media marketing, and video production, etc.
        </p>

        <div className="image-grid">
  <img
    className="image-grid-col-2 image-grid-row-2"
    src={grid1}
  />
  <img src={grid2} />
  <img src={grid3} />
  <img src={grid4} />
  <img
    className="image-grid-col-1 image-grid-row-2 "
    src={grid6}
  />
  <img src={grid5} />
  <img
    className="image-grid-col-2 image-grid-row-2"
    src={grid7}
  />
  <img src={grid8} />
  <img src={grid9}/>
</div>

        </div>
        
    </div>
  )
}

export default Portfolio
