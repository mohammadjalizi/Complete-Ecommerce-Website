import React, { useState } from 'react'

import './Nvbar.css'

import logo from '../../assets/Assets/logo.png'
import cart_icon from '../../assets/Assets/cart_icon.png'
const Navbar = () => {
const[menu,Setmenu]=useState("shop")

  return (
    <div className='  navbar  flex  justify-around p-4  '>
      
<div className=' flex items-center ' >

<img src={logo} alt="" />
<p className=' text-[#171717] text-[38px]  font-semibold ' >SHOPPER</p>
</div>
<ul className=' flex  items-center gap-12 text-[#626252] text-[20px] font-medium '>

<li

onClick={()=>{

Setmenu("shop") 

}}
className='flex   flex-col items-center justify-center  gap-1 cursor-pointer' >Shop {menu==="shop"?<hr className=' *: border-none  w-3/4 h-[3px]   rounded-xl	bg-[#FF4141] ' />:<></>} </li>
<li

onClick={()=>{

Setmenu(mens)

}}
className='flex   flex-col items-center justify-center  gap-1 cursor-pointer' >Men{menu==="mens"?<hr className=' *: border-none  w-3/4 h-[3px]   rounded-xl	bg-[#FF4141] ' />:<></>}</li>
<li

onClick={()=>{

Setmenu(womens)

}}
className='flex   flex-col items-center justify-center  gap-1 cursor-pointer' >Women</li>
<li 

onClick={()=>{

Setmenu(kid)

}}
className='flex   flex-col items-center justify-center  gap-1 cursor-pointer' >Kids</li>

</ul>
<div className="login-cart flex  items-center  gap-11 ">

<button className='  w-40 h-14 outline-none  border  border-[#7a7a7a]    rounded-full  text-[#515151]  text-[20px] font-medium  bg-white cursor-pointer active:bg-[#f3f3f3]' >Login</button>
<img src={cart_icon} alt="" />
<div className="cart-count size-6 flex justify-center items-center mt-[-35px] ml-[-55px]  rounded-xl text-[14px]  bg-red-500 text-white ">0</div>
</div>

    </div>
  )
}

export default Navbar