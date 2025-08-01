import React from 'react';
import { Link } from 'react-router-dom';

function GigCard({item}) {
  return (
    <Link to="/gig/123" className="link">
      <div className="w-[324px] h-[450px] border border-[rgb(228,228,228)] mb-[40px] gigCard">
            <img className="w-full h-1/2 object-cover" src={item.img} alt="" />
            <div className="flex flex-col gap-[20px] p-[10px] px-[20px] info">
                <div className="flex items-center gap-[10px] user">
                    <img className="w-[26px] h-[26px] rounded-full object-cover" src={item.pp} alt="" />
                    <span>{item.username}</span>
                </div>
                <p className="text-[#111]">{item.desc}</p>
                <div className="flex items-center gap-[5px] star">
                    <img className="w-[14px] h-[14px]" src="./img/star.png" alt="" />
                    <span className="font-bold text-[14px] text-[#ffc108]">{item.star}</span>
                </div>
            </div>
            <hr className="h-0 border-t border-[0.5px] border-[rgb(228,228,228)]" />
            <div className="flex items-center justify-between p-[10px] px-[20px] detail ">
                <img className="w-[16px] h-[16px] cursor-pointer object-cover " src="./img/heart.png" alt="" />
                <div className="price text-right  ">
                    <span className="text-[#999] text-[12px] ">STARTING AT</span>
                    <h2 className="text-[#555] text-[18px] font-normal text-end ">
                    $ {item.price}
                    <sup className="text-[12px] font-light  ">99</sup>
                    </h2>
                </div>
            </div>
      </div>
    </Link>
  )
}

export default GigCard