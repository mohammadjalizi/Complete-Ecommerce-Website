import React from 'react'

import './Nvbar.css'

import logo from '../../assets/Assets/logo.png'
import cart_icon from '../../assets/Assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='  navbar  flex  justify-around p-4  '>
      
<div className=' flex items-center ' >

<img src={logo} alt="" />
<p className=' text-[#171717] text-[38px] ' >SHOPPER</p>
</div>
<ul className=' flex '>

<li>Shop</li>
<li>Men</li>
<li>Women</li>
<li>Kids</li>

</ul>
<div className="login-cart">

<button>Login</button>
<img src={cart_icon} alt="" />
</div>

    </div>
  )
}

export default Navbar