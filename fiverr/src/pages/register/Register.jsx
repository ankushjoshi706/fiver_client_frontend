import React, { useState } from "react";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen register">
      <form className="w-[960px] py-[100px] px-0 flex gap-[120px]" onSubmit={handleSubmit}>
        <div className="flex-1 flex flex-col gap-[10px] justify-between left">
          <h1 className="text-gray-500 text-[50px] mb-[20px]">Create a new account</h1>
          <label className="text-gray-500 text-[18px]" htmlFor="">Username</label>
          <input className="p-[20px] border border-[rgb(216,214,214)]"
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">Email</label>
          <input className="p-[20px] border border-[rgb(216,214,214)]"
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">Password</label>
          <input className="p-[20px] border border-[rgb(216,214,214)]" name="password" type="password" onChange={handleChange} />
          <label className="text-gray-500 text-[18px]" htmlFor="">Profile Picture</label>
          <input className="p-[20px] border border-[rgb(216,214,214)] bg-[rgb(216,214,214)]" type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label className="text-gray-500 text-[18px]" htmlFor="">Country</label>
          <input className="p-[20px] border border-[rgb(216,214,214)]"
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button className="border-none p-[20px] text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer" type="submit">Register</button>
        </div>
        <div className="flex-1 flex flex-col gap-[10px] justify-between right">
          <h1 className="text-gray-500 text-[50px] mb-[20px]">I want to become a seller</h1>
          <div className="flex items-center gap-[10px] toggle">
            <label className="text-gray-500 text-[18px]" htmlFor="">Activate the seller account</label>
            <label  className="relative inline-block w-[50px] h-[24px] switch">
              <input className="peer opacity-0 w-0 h-0"  type="checkbox" onChange={handleSeller} />
              <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] rounded-[24px] transition-all duration-400 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[4px] before:bottom-[4px] before:bg-white before:rounded-full before:transition-all before:duration-400 peer-checked:bg-[#2196f3] peer-focus:shadow-[0_0_1px_#2196f3] peer-checked:before:translate-x-[26px]"></span>
            </label>
          </div>
          <label className="text-gray-500 text-[18px]" htmlFor="">Phone Number</label>
          <input className="p-[20px] border border-[rgb(216,214,214)]"
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">Description</label>
          <textarea className="p-[20px] border border-[rgb(216,214,214)]"
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;