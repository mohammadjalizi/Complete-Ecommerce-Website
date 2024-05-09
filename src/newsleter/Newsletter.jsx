import React from 'react'
import './New.css'
const Newsletter = () => {
  return (
    <div className='newsletter w-[65%]  h-[40vh] flex flex-col items-center justify-center m-auto   pt-0  px-[140px] mb-[150px] gap-8'>
      <h1 className=' text-[#454545] text-[55px] font-semibold '> GetvExclusive ofeers on Your Email </h1>
      <p className=' text-[#454545] text-[20px]  '> SSubscribe to our newletter and stay updated </p>
      <div className=' flex items-center justify-between bg-white w-[730px]    '>
        <input  type="email" placeholder=' Your Email id ' />
        <button className=' w-[210px] h-[70px] ' >Subscribe </button>
      </div>
    </div>
  )
}

export default Newsletter