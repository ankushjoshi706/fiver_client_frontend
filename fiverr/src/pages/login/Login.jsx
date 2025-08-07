import React, { useState } from "react";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("http://localhost:8000/api/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
       navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen login">
      <form className="w-[360px] py-[100px] px-0 flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <h1 className="text-gray-500 text-[50px] mb-[20px]">Sign in</h1>
        <label className="text-gray-500 text-[18px]" htmlFor="">Username</label>
        <input className="p-[20px] border border-[rgb(216,214,214)]" 
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="text-gray-500 text-[18px]" htmlFor="">Password</label>
        <input className="p-[20px] border border-[rgb(216,214,214)]" placeholder="Type here"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="border-none p-[20px] text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer" type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
}

export default Login;