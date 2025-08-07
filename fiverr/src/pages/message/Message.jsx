import React from 'react'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";

function Message() {

  const { id } = useParams();
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };


  return (
    <div className="flex justify-center message">
      <div className="w-[1200px] m-[50px] container">
        <span className="font-light text-[13px] text-[#555] breadcrumbs">
          <Link to="/messages">Messages</Link> &gt; John Doe &gt;
        </span>
        { isLoading ? ("loading") : error ? ("error " ): (
            <div className="my-[30px] py-[50px] px-[50px] flex flex-col gap-[20px] h-[500px] overflow-y-scroll messages">
                {(data ?? []).map((m) => (
                        <div className={`flex gap-[20px] max-w-[600px] text-[18px] item ${m.userId === currentUser._id ? 'owner' : ''}`} key={m._id}>
                            <img className="w-[40px] h-[40px] rounded-full object-cover"
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                            />
                            <p className="max-w-[500px] p-[20px] bg-[rgb(244,241,241)] rounded-[0_20px_20px_20px] text-gray-500 font-light">
                            {m.desc}
                            </p>
                        </div>
                    ))}
            </div>
        )}
        <hr className="h-0 border-t border-[0.5px] border-[rgb(232,230,230)] mb-[20px]" />
        <form className="flex items-center justify-between write" onSubmit={handleSubmit}>
          <textarea className="w-[80%] h-[100px] p-[10px] border border-[lightgray] rounded-[10px] resize-none" type="text" placeholder="write a message" />
          <button className="bg-[#1dbf73] p-[20px] text-white font-medium border-none rounded-[10px] cursor-pointer w-[100px]" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message