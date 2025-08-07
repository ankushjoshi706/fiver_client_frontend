import React from 'react'
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import moment from "moment";

function Messages() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };



  return (
    <div className="flex justify-center messages">
     {isLoading ? "loading" : error ? "error " :
      <div className="w-[1400px] py-[50px] container">
        <div className="flex justify-between title mb-4">
          <h1 className="text-[30px] font-bold">Messages</h1>
        </div>
        <table className="w-full table-auto border-collapse">
            <thead>
                <tr className="h-[100px] border-b border-gray-200">
                    <th className="text-left">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                    <th className="text-left">Last Message</th>
                    <th className="text-left">Date</th>
                    <th className="text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((c) => (

                <tr className="h-[100px] active:bg-[#1dbf730f]" key={c.id}>
                    <td className="font-medium px-[10px]">{currentUser.isSeller ? c.buyerId : c.sellerId }</td>
                    <td className="text-gray-500 px-[10px]">
                    <Link to={`/message/${c.id}`} className="link">
                        {c?.lastMessage?.substring(0, 100)}...
                    </Link>
                    </td>
                    <td className="text-gray-500 px-[10px]">{moment(c.updatedAt).fromNow()}</td>
                    <td className="px-[10px]">
                        {((currentUser.isSeller && !c.readBySeller) ||
                            (!currentUser.isSeller && !c.readByBuyer)) && (
                            <button className="bg-[#1dbf73] text-white p-[10px] border-none cursor-pointer" onClick={() => handleRead(c.id)}>
                            Mark as Read
                            </button>
                        )}
                    </td>
                </tr>
                ) )}
            </tbody>
          
        </table>
      </div>}
    </div>
  );
}

export default Messages