import React from 'react'
import data_product from '../assets/Assets/data'
import Item from '../item/Item'
const Popler = () => {
  return (
    <div className=' popler flex flex-col items-center gap-2  h-[90vh]  '>
      <h1 className=' text=[#171717] text-5xl font-semibold' >POPULER IN WOMEN</h1>
      <hr  className=' w-[200px] h-2 rounded-lg bg-[#252525] '/>
      <div className="populer-item mt-12 flex  gap-8">
        {data_product.map((item,i)=>{
return <Item key={i} id={item.id} name={item.name}  image={item.image} new_Price={item.new_price}  old_price={item. old_price} />

        })}
      </div>

    </div>
  )
}

export default Popler