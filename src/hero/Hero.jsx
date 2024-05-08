import React from 'react'
import handicon from '../assets/Assets/hand_icon.png'
const Hero = () => {
  return (
    <div className=' hero '>
  
    <div className="hero-left">
    <h2>NEEW ARRIVALS ONLY</h2>
    <div>

        <div className="hand-icon">
<p>new</p>
<img src={handicon} alt="" />
        </div>
    </div>

    </div>
    <div className="hero-right">


    </div>
    
    </div>
  )
}

export default Hero