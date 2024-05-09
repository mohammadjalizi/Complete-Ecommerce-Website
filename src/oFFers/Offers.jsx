import React from 'react'
import exclucive_image from '../assets/Assets/exclusive_image.png'
import  './Offers.css'
const Offers = () => {
  return (
    <div className='offers  w-[65%] h-[60vh] flex  m-auto pt-0  px-36 mb-[150px]   '>
<div className="offers-left flex-1 flex flex-col justify-center ">
<h1 className=' text-[#171717] text-[80px] font-semibold '>Exclusive</h1>
<h1 className=' text-[#171717] text-[80px] font-semibold '>offers For You</h1>
<p className=' colo[#171717] text[22px] font-semibold '>ONLY ON BEST SELLERS PRODUCTS</p>
<button className=' w-[282px] h-[70px] bg-[#ff4141] border-none  text-white text[22px]  font-medium mt-[30px] cursor-pointer '> Check Now </button>
</div>
<div className="offers-right flex flex-1 item-center justify-center  pt-[50px]">
<img src={exclucive_image} alt="" />
</div>
    </div>
  )
}

export default Offers