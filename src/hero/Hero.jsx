import React from 'react'
import './Hero.css'
import handicon from '../assets/Assets/hand_icon.png'
import Arrowicon from '../assets/Assets/arrow.png'
import heroimg from '../assets/Assets/hero_image.png'
const Hero = () => {
  return (
    <div className=' hero flex '>
  
    <div className="hero-left flex-1 ">
    <h2>NEEW ARRIVALS ONLY</h2>
    <div>

        <div className="hand-icon">
<p>new</p>
<img src={handicon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
    </div>
<div className="hero-last-btn">

<div>   latest Collection </div>
<img src= {Arrowicon} alt="" />

</div>
    </div>
    <div className="hero-right">
<img src={heroimg} alt="" />

    </div>
    
    </div>
  )
}

export default Hero