import React from 'react'
import { Link } from "react-router-dom";

function Message() {
  return (
    <div className="flex justify-center message">
      <div className="w-[1200px] m-[50px] container">
        <span className="font-light text-[13px] text-[#555] breadcrumbs">
          <Link to="/messages">Messages</Link> &gt; John Doe &gt;
        </span>
        <div className="my-[30px] py-[50px] px-[50px] flex flex-col gap-[20px] h-[500px] overflow-y-scroll messages">
          <div className="flex gap-[20px] max-w-[600px] text-[18px] item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* -----------------Message from another user------------ */}
          <div className="flex flex-row-reverse self-end gap-[20px] max-w-[600px] text-[18px] owner item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(195,209,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ------------------item section------Message from another user---- */}
          <div className="flex gap-[20px] max-w-[600px] text-[18px] item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="User"
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ------------item owner 2----------- */}
          <div className="flex flex-row-reverse self-end gap-[20px] max-w-[600px] text-[18px] owner item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(195,209,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* -------message of another user---------- */}
          <div className="flex gap-[20px] max-w-[600px] text-[18px] item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ------------item owner 3----------- */}
          <div className="flex flex-row-reverse self-end gap-[20px] max-w-[600px] text-[18px] owner item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(195,209,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ------------------------Message from another user---------- */}
          <div className="flex gap-[20px] max-w-[600px] text-[18px] item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ------------item owner 4----------- */}
          <div className="flex flex-row-reverse self-end gap-[20px] max-w-[600px] text-[18px] owner item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(195,209,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ----------------------Message from another user-------------- */}
          <div className="flex gap-[20px] max-w-[600px] text-[18px] item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ------------item owner 5----------- */}
          <div className="flex flex-row-reverse self-end gap-[20px] max-w-[600px] text-[18px] owner item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(195,209,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          {/* --------------------------Message from another user-------------- */}
          <div className="flex gap-[20px] max-w-[600px] text-[18px] item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ---------------------------Message from another user----------------- */}
          <div className="flex gap-[20px] max-w-[600px] text-[18px] item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ------------item owner 6----------- */}
          <div className="flex flex-row-reverse self-end gap-[20px] max-w-[600px] text-[18px] owner item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(195,209,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* ------------item owner 7----------- */}
          <div className="flex flex-row-reverse self-end gap-[20px] max-w-[600px] text-[18px] owner item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(195,209,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* --------------Message from another user-------------------- */}
          <div className="flex gap-[20px] max-w-[600px] text-[18px] item">
            <img className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr className="h-0 border-t border-[0.5px] border-[rgb(232,230,230)] mb-[20px]" />
        <div className="flex items-center justify-between write">
          <textarea className="w-[80%] h-[100px] p-[10px] border border-[lightgray] rounded-[10px] resize-none" type="text" placeholder="write a message" />
          <button className="bg-[#1dbf73] p-[20px] text-white font-medium border-none rounded-[10px] cursor-pointer w-[100px]">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message