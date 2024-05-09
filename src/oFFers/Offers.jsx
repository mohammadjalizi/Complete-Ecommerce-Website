import React from 'react'
import exclucive_image from '../assets/Assets/exclusive_image.png'
import  './Offers.css'
const Offers = () => {
  return (
    <div className='offers  w-[65%] h-[60vh] flex  m-auto pt-0  px-36 mb-[150px]   '>
<div className="offers-left">
<h1>Exclusive</h1>
<h1>offers For You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button> Check Now </button>
</div>
<div className="offers-right">
<img src={exclucive_image} alt="" />
</div>
    </div>
  )
}

export default Offers