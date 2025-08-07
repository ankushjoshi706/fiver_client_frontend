import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Orders() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

   const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="flex justify-center text-[#555] orders">
     {isLoading ? "loading" : error ? "error" :(
      <div className="w-[1400px] py-[50px] container">
        <div className="flex justify-between title mb-4">
          <h1 className="text-[30px] font-bold">Orders</h1>
        </div>
        <table className="w-full table-auto border-collapse">
            <thead>

                <tr className="h-[50px] border-b border-gray-200">
                    <th className="text-left">Image</th>
                    <th className="text-left">Title</th>
                    <th className="text-left">Price</th>
                    <th className="text-left">Contact</th>
                </tr>
            </thead>
            <tbody>

                {data.map((order)=>(

                <tr key={order._id} className="h-[50px] even:bg-[#1dbf730f]">
                    <td>
                    <img
                        className="w-[50px] h-[25px] object-cover image"
                        src={order.img}
                        alt=""
                    />
                    </td>
                    <td>{order.title}</td>
                    <td>{order.price}.</td>
                    <td>
                    <img  className="w-[25px] cursor-pointer message" src="./img/message.png" alt="" onClick={() =>handleContact(order)}/>
                    </td>
                </tr>
                ))}
            </tbody>
          
        </table>
      </div>)}
    </div>
  );
}

export default Orders