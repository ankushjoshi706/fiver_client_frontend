import React from 'react'
import { Link } from "react-router-dom";

function Messages() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="flex justify-center messages">
      <div className="w-[1400px] py-[50px] container">
        <div className="flex justify-between title mb-4">
          <h1 className="text-[30px] font-bold">Messages</h1>
        </div>
        <table className="w-full table-auto border-collapse">
          <tr className="h-[100px] border-b border-gray-200">
            <th className="text-left">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th className="text-left">Last Message</th>
            <th className="text-left">Date</th>
            <th className="text-left">Action</th>
          </tr>
          <tr className="h-[100px] active:bg-[#1dbf730f]">
            <td className="font-medium px-[10px]">Charley Sharp</td>
            <td className="text-gray-500 px-[10px]">
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className="text-gray-500 px-[10px]">1 hour ago</td>
            <td className="px-[10px]">
              <button className="bg-[#1dbf73] text-white p-[10px] border-none cursor-pointer" type="button">Mark as Read</button>
            </td>
          </tr>
          <tr className="h-[100px] active:bg-[#1dbf730f]">
            <td className="font-medium px-[10px]">John Doe</td>

            <td className="text-gray-500 px-[10px]">
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className="text-gray-500 px-[10px]">2 hours ago</td>
            <td className="px-[10px]">
              <button className="bg-[#1dbf73] text-white p-[10px] border-none cursor-pointer" type="button">Mark as Read</button>
            </td>
          </tr>
          <tr className="h-[100px] active:bg-[#1dbf730f]">
            <td className="font-medium px-[10px]">Elinor Good</td>
            <td className="text-gray-500 px-[10px]">
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className="text-gray-500 px-[10px]">1 day ago</td>
          </tr>
          <tr className="h-[100px] active:bg-[#1dbf730f]">
            <td className="font-medium px-[10px]">Garner David </td>
            <td className="text-gray-500 px-[10px]">
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className="text-gray-500 px-[10px]">2 days ago</td>
          </tr>
          <tr className="h-[100px] active:bg-[#1dbf730f]">
            <td className="font-medium px-[10px]">Troy Oliver</td>
            <td className="text-gray-500 px-[10px]">{message.substring(0, 100)}</td>
            <td className="text-gray-500 px-[10px]">1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages