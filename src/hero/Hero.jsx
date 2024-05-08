import React from 'react'
import './Hero.css'
import handicon from '../assets/Assets/hand_icon.png'
import Arrowicon from '../assets/Assets/arrow.png'
import heroimg from '../assets/Assets/hero_image.png'
const Hero = () => {
  return (
    <div className=' hero flex '>
  
    <div className="hero-left flex-1 flex  flex-col justify-center gap-5  pl-44  leading-[1.1]  ">
    <h2 className=' text-[#090909] text-2xl  font-semibold '>NEEW ARRIVALS ONLY</h2>
    <div>

        <div className="hand-icon flex items-center gap-5">
<p className='  text-[#171717] text-8xl font-bold '>new</p>
<img className=' w-[105px] ' src={handicon} alt="" />
        </div>
        <p className=' text-[#171717] text-8xl font-bold '>collections</p>
        <p className=' text-[#171717] text-8xl font-bold '>for everyone</p>
    </div>
<div className="hero-last-btn flex    items-center justify-center gap-4 w-[310px] h-[70px] border   rounded-3xl mt-8 bg-[#ff4141] text-white text-[22px] font-medium     ">

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