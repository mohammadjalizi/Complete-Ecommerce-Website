import React from 'react'
import new_collection from '../assets/Assets/new_collections'
import Item from '../item/Item'
function NewcCollection() {
  return (
    <div className=' newcollections  flex flex-col items-center gap-2  h-[90vh] '>
        <h1 className='text=[#171717] text-5xl font-semibold'>NEW COLLECTIONS</h1>
        <hr className=' w-[200px] h-2 rounded-lg bg-[#252525] ' />
        <div className="collections  mt-12 flex flex-wrap  gap-7   justify-center  md:mx-44   ">
{new_collection.map((item,i)=>{
return <Item  key={i} id={item.id} name={item.name}  image={item.image} new_Price={item.new_price}  old_price={item. old_price}/>

})}

        </div>
    </div>
  )
}

export default NewcCollection