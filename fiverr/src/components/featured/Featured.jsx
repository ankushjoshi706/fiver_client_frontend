import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Featured() {
     const [input, setInput] = useState("");
     const navigate = useNavigate();

     const handleSubmit = () => {
     navigate(`/gigs?search=${input}`);
    };
  return (
    <div className="h-[600px] flex justify-center bg-[#013914] text-white">
        <div className="w-[1400px] flex items-center">
            <div className="flex flex-col gap-[30px]">
                <h1 className="text-[50px]">Find the perfect <span className="italic font-light">freelance</span> services for your business</h1>
                <div className="bg-white rounded-[5px] flex items-center justify-between overflow-hidden">
                    <div className="flex items-center gap-[10px] searchInput">
                        <img className="w-[20px] h-[20px] m-[10px]" src="./img/search.png" alt="" />
                        <input className="border-none outline-none text-black placeholder:text-gray-500" type="text" placeholder='Try "building mobile app"' onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <button className="w-[120px] h-[50px] border-none bg-[#1dbf73] text-white self-end cursor-pointer" onClick={handleSubmit}>Search</button>
                </div>
                <div className="flex items-center gap-[10px] popular">
                    <span className="w-max">Popular:</span>
                    <button className="w-max text-white border border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-[14px]">Web Design</button>
                    <button className="w-max text-white border border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-[14px]">Wordpress</button>
                    <button className="w-max text-white border border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-[14px]">Logo Design</button>
                    <button className="w-max text-white border border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-[14px]">AI services</button>
                </div>
            </div>
            <div className="h-full right">
                <img className="h-full object-contain" src="./img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured