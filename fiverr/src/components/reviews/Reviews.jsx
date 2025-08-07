import React from 'react'
import Review from '../review/Review'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Reviews({gigId}) {

const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    
    <div className="mt-[50px] reviews">
        
        <h2 className="font-normal font-semibold text-[30px]">Reviews</h2>
        {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}
        <div className="mt-[20px] flex flex-col gap-[20px] add">
        <h3 className="font-normal font-semibold text-[20px]">Add a review</h3>
        <form action="" className="flex flex-col gap-[20px] addForm" onSubmit={handleSubmit}>
          <input className="p-[20px] border-1" type="text" placeholder="write your opinion" />
          <select className="w-[200px] p-[20px] self-end" name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button className="self-end w-[100px] border-none p-[10px] text-white bg-[#1dbf73] cursor-pointer">Send</button>
        </form>
      </div>
    </div>
    
  )
}

export default Reviews