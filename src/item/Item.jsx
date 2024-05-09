import React from 'react'

const Item = () => {
  return (
    <div className=' item '>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
<div className="item-prices">
  <div className="item-price-new">
    {Props.new_price}

  </div>
<div className="item-price-old">
{props.item_old}
</div>
</div>

    </div>
  )
}

export default Item