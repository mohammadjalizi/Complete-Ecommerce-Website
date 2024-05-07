import React from 'react'

import './Nvbar.css'

import logo from '../../assets/Assets/logo.png'
import cart_icon from '../../assets/Assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='  navbar  flex  justify-around p-4  '>
      
<div className=' flex items-center ' >

<img src={logo} alt="" />
<p className=' text-[#171717] text-[38px]  font-semibold ' >SHOPPER</p>
</div>
<ul className=' flex  items-center gap-12 text-[#626252] text-[20px] font-medium '>

<li className='flex   flex-col items-center justify-center  gap-1 cursor-pointer' >Shop <hr className=' *: border-none  w-3/4 h-[3px]   rounded-xl	bg-[#FF4141] ' /> </li>
<li className='flex   flex-col items-center justify-center  gap-1 cursor-pointer' >Men</li>
<li className='flex   flex-col items-center justify-center  gap-1 cursor-pointer' >Women</li>
<li className='flex   flex-col items-center justify-center  gap-1 cursor-pointer' >Kids</li>

</ul>
<div className="login-cart">

<button>Login</button>
<img src={cart_icon} alt="" />
</div>

    </div>
  )
}

export default Navbar