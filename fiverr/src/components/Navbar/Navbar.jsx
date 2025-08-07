import React, { useEffect } from 'react'
import { useState } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import newRequest from '../../utils/newRequest';

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  // ---------function for scroll----------
  const isActive =() =>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(()=>{
    window.addEventListener("scroll", isActive);
    return()=>{
      window.removeEventListener("scroll", isActive);
    }
  },[]);

  const currentUser= JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  //--------logout------------
  const handleLogout = async () =>{
    try{
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/")
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className={`flex flex-col items-center sticky top-0 z-[999] transition-all duration-500 ease-in-out ${active || pathname !=="/" ? "bg-white text-black" : "bg-[#013914] text-white"}`}>
      {/* --------Container----- */}
      <div className="w-[1400px] flex items-center justify-between py-[20px] px-0">
        <div className="text-[34px] font-bold flex items-center logo">
          <Link to="/" className="link">
              <span className="text">fiverr</span>
          </Link>
          
          <span className="font-bold text-[#1dbf73] dot">.</span>
        </div>
        <div className="flex items-center gap-[24px] font-montserrat font-medium links">
          <span className="whitespace-nowrap">Fiverr Bussiness</span>
          <span className="whitespace-nowrap">Explore</span>
          <span className="whitespace-nowrap">English</span>
          {/* <Link to="/login" className="whitespace-nowrap">Sign in</Link> */}
         {!currentUser?.isSeller && <span className="whitespace-nowrap">Become a Seller</span>}
          {/* {!currentUser && <button className="text-white py-[10px] px-[20px] rounded-[5px] border border-white bg-transparent cursor-pointer transition-colors duration-200 hover:bg-[#1dbf73] hover:border-[#1dbf73]">Join</button>} */}
          {/* ---------Current USer Menu--------------*/}
          {currentUser ? (
            <div className="flex items-center gap-[10px] cursor-pointer relative user" onClick={() =>setOpen(!open)}>
              <img className="w-8 h-8 rounded-full object-cover" src={currentUser.img || "/img/noavatar.jpg" } alt="user avatar" />
              <span>{currentUser?.username}</span>
              {open && <div className="absolute top-[50px] right-0 p-[20px] bg-white rounded-[10px] z-[999] border border-[#d3d3d3] flex flex-col gap-[10px] w-[200px] font-light text-gray-500 options">
                {
                  currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs">Gigs</Link>
                      <Link to="/add">Add New Gig</Link>
                    </>
                  )
                }
                <Link to="/orders">Orders</Link>
                <Link to="/messages">Messages</Link>
                <Link onClick={handleLogout}>Logout</Link>
              </div>}
            </div>
          ) : (
          <>

            <Link to="/login" className="whitespace-nowrap">Sign in</Link>
            <Link to="/register" className="whitespace-nowrap">
              <button className="text-white py-[10px] px-[20px] rounded-[5px] border border-white bg-transparent cursor-pointer transition-colors duration-200 hover:bg-[#1dbf73] hover:border-[#1dbf73]">Join</button>
            </Link>
          </>
          )
        }
        </div>
      </div>
      {(active || pathname !=="/") && (
        <><hr className="w-[calc(100%-2px)] h-0 border-t border-b border-[#ebe9e9]"></hr>
          <div className="w-[1400px] py-[10px] px-0 flex justify-between text-gray-500 font-light font-montserrat menu">
            <Link to="/">Graphics & Design</Link>
            <Link to="/">Programming & Tech</Link>
            <Link to="/">Digital Marketing</Link>
            <Link to="/">Video & Animation</Link>
            <Link to="/">Writing & Translation</Link>
            <Link to="/">Music & Audio</Link>
            <Link to="/">Business</Link>
            <Link to="/">Finance</Link>
            <Link to="/">AI Services</Link>
         </div>
         <hr className="w-[calc(100%-2px)] h-0 border-t border-b border-[#ebe9e9]"></hr>
        </>
      )}
      
    </div>
  )
}

export default Navbar