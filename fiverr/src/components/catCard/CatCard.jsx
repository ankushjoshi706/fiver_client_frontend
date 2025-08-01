import React from 'react'
import { Link } from 'react-router-dom'

function CatCard({item}) {
  return (
    <Link to="/gigs?cat=design">
        <div className="w-[252px] h-[344px] text-white rounded-[5px] relative cursor-pointer catCard">
          <img className="w-full h-full object-cover" src={item.img} alt="" />
          <span className="font-light absolute top-[15px] left-[15px] desc">{item.desc}</span>
          <span className="absolute top-[40px] left-[15px] text-[24px] font-medium title">{item.title}</span>
          
       </div>
    </Link>
    
  )
}

export default CatCard