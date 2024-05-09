import React from 'react'
import footer_logo from '../assets/Assets/logo_big.png'
import instgrame from '../assets/Assets/instagram_icon.png'
import whatasap from '../assets/Assets/whatsapp_icon.png'
import pinter from '../assets/Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className=' footer  flex flex-col justify-center items-center gap-[50px]  ' >
<div className="footer-logo flex items-center gap-[20px]  ">

    <img src={footer_logo} alt="" />
    <p className=' text-[#383838] text-[34px] font-bold ' >SHOPPER</p>
    </div>        
<ul className="footer-link flex list-none gap-[50px] text-[#252525] text-[20px] ">

    <li className=' cursor-pointer  '> Company </li>
    <li className=' cursor-pointer  '> products </li>
    <li className=' cursor-pointer  '> offices </li>
    <li className=' cursor-pointer  '>About </li>
    <li className=' cursor-pointer  '> Contact </li>
    </ul>
    <div className="footer-socaial-icons flex items-center  gap-[20px]">

        <div className="footer-icons-container  p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ededed]  ">
            <img src={instgrame} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatasap} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinter} alt="" />
        </div>
  
    </div>
    <div className="coppyright flex flex-col items-center gap-[30px] w-full  mb-[30px] text-[#1a1a1a] text-[20px] ">
<hr className=' w-[80%] border-none rounded-xl   h-1 bg-[#c7c7c7] ' />
<p>Copyright@2024 -All right Reserved.</p>

        </div>

    </div>
  )
}

export default Footer