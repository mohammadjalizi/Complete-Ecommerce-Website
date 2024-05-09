import React from 'react'
import './Item.css'
const Item = () => {
  return (
    <div className='   item  w-[350px] '>
      <img src={props.image} alt="" />
      <p className='  mt-2'>{props.name}</p>
<div className="item-prices flex gap-5">
  <div className="item-price-new text-[#374151] text-lg font-semibold ">
    {Props.new_price}

  </div>
<div className="item-price-old text-[#8c8c8c] text-lg  font-medium  line-through ">
{props.item_old}
</div>
</div>

    </div>
  )
}

export default Item