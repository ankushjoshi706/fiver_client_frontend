import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );


  return (
     <div className="flex flex-col gap-[20px] my-[20px] review">
                {isLoading ? "loading" : error ? "error" : 
                <div className="flex items-center user">
                    <img
                    className="h-[50px] w-[50px] rounded-full pp"
                    src={data.img || "./img/noavatar.jpg"}
                    alt=""
                    />
                    <div className="ml-2 info">
                    <span className="text-[14px] font-medium">{data.username}</span>
                    <div className="flex items-center gap-[10px] text-gray-500 country">
                        <span>{data.country}</span>
                    </div>
                    </div>
                </div>}
                <div className="flex items-center gap-[5px] stars">
                     {Array(review.star).fill().map((item,i) =>(

                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" key={i}/>
                     ))}
                        <span className="text-[14px] font-bold text-[#ffc108]">{review.star}</span>
                </div>
                <p className="font-light leading-[25px] text-[#555]">
                    {review.desc}
                </p>
                <div className="flex items-center gap-[10px] helpful">
                    <span>Helpful?</span>
                    <img className="w-[14px]" src="/img/like.png" alt="" />
                    <span>Yes</span>
                    <img className="w-[14px]" src="/img/dislike.png" alt="" />
                    <span>No</span>
                </div>
                </div>
    );
};

export default Review;