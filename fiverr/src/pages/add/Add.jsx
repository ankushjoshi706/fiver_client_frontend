import React from 'react'

function Add() {
  return (
    <div className="flex justify-center add">
      <div className="w-[1400px] py-[50px] px-0 container">
        <h1 className="w-max mb-[30px] text-[40px] text-gray-500 font-medium ">Add New Gig</h1>
        {/* -------sections--------- */}
        <div className="flex justify-between gap-[100px] sections">
          <div className="flex-1 flex flex-col gap-[10px] justify-between info">
            <label className="text-gray-500 text-[18px]" htmlFor="">Title</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm"
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">Category</label>
            <select className="p-[20px] outline outline-offset-2 rounded-sm" name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label className="text-gray-500 text-[18px]" htmlFor="">Cover Image</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm bg-[#f1e7e7]" type="file" />
            <label className="text-gray-500 text-[18px]" htmlFor="">Upload Images</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm bg-[#f1e7e7]" type="file" multiple />
            <label className="text-gray-500 text-[18px]" htmlFor="">Description</label>
            <textarea className="p-[20px] outline outline-offset-2 rounded-sm" name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
            <button className="border-none p-[20px] text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer">Create</button>
          </div>
          {/* -----------details------------ */}
          <div className="flex-1 flex flex-col gap-[10px] justify-between details">
            <label className="text-gray-500 text-[18px]" htmlFor="">Service Title</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="text" placeholder="e.g. One-page web design" />
            <label className="text-gray-500 text-[18px]" htmlFor="">Short Description</label>
            <textarea  className="p-[20px] outline outline-offset-2 rounded-sm" name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label className="text-gray-500 text-[18px]" htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="number" />
            <label className="text-gray-500 text-[18px]" htmlFor="">Revision Number</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="number" min={1}/>
            <label className="text-gray-500 text-[18px]" htmlFor="">Add Features</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="text" placeholder="e.g. page design" />
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="text" placeholder="e.g. file uploading" />
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="text" placeholder="e.g. setting up a domain" />
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="text" placeholder="e.g. hosting" />
            <label className="text-gray-500 text-[18px]" htmlFor="">Price</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="number" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add