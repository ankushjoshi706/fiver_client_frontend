import React from 'react';
import { Link } from "react-router-dom";

function Orders() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="flex justify-center text-[#555] orders">
      <div className="w-[1400px] py-[50px] container">
        <div className="flex justify-between title mb-4">
          <h1 className="text-[30px] font-bold">Orders</h1>
        </div>
        <table className="w-full table-auto border-collapse">
          <tr className="h-[50px] border-b border-gray-200">
            <th className="text-left">Image</th>
            <th className="text-left">Title</th>
            <th className="text-left">Price</th>
            {<th className="text-left">{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th className="text-left">Contact</th>
          </tr>
          <tr class="h-[50px] even:bg-[#1dbf730f]">
            <td>
              <img
                className="w-[50px] h-[25px] object-cover image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td>
              <img  className="w-[25px] cursor-pointer message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr class="h-[50px] even:bg-[#1dbf730f]">
            <td>
              <img
                className="w-[50px] h-[25px] object-cover image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>79.<sup>99</sup></td>
            <td>Francisco Chang</td>
            <td>
              <img className="w-[25px] cursor-pointer message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr class="h-[50px] even:bg-[#1dbf730f]">
            <td>
              <img
                className="w-[50px] h-[25px] object-cover image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>110.<sup>99</sup></td>
            <td>Roland Mendel</td>
            <td>
              <img className="w-[25px] cursor-pointer message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr class="h-[50px] even:bg-[#1dbf730f]">
            <td>
              <img
                className="w-[50px] h-[25px] object-cover image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>39.<sup>99</sup></td>
            <td>Helen Bennett</td>
            <td>
              <img className="w-[25px] cursor-pointer message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr class="h-[50px] even:bg-[#1dbf730f]">
            <td>
              <img
                className="w-[50px] h-[25px] object-cover image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>119.<sup>99</sup></td>
            <td>Yoshi Tannamuri</td>
            <td>
              <img className="w-[25px] cursor-pointer message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr class="h-[50px] even:bg-[#1dbf730f]">
            <td>
              <img
                className="w-[50px] h-[25px] object-cover image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>49.<sup >99</sup></td>
            <td>Giovanni Rovelli</td>
            <td>
              <img className="w-[25px] cursor-pointer message" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders