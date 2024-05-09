import React from 'react'
import new_collection from '../assets/Assets/new_collections'
import Item from '../item/Item'
function NewcCollection() {
  return (
    <div className=' newcollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
{new_collection.map((item,i)=>{
return <Item  key={i} id={item.id} name={item.name}  image={item.image} new_Price={item.new_price}  old_price={item. old_price}/>

})}

        </div>
    </div>
  )
}

export default NewcCollection