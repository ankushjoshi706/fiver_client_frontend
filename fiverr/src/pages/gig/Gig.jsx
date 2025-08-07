import React from 'react';
import { Slider } from "infinite-react-carousel/lib";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";


function Gig() {

    const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });


  return (
    <div className="flex justify-center gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : <div className="w-[1400px] py-[30px] px-0 flex gap-[50px] container">
        {/* --------left section---------- */}
        <div className="flex-[2] flex flex-col gap-[20px] left">
          <span className="font-light uppercase text-[13px] text-[#555] breadcrumbs">Fiverr &gt; Graphics & Design &gt;</span>
          <h1 className="text-[30px] font-semibold">{data.title}</h1>
          {/* ----------user section--------- */}
          {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : <div className="flex items-center gap-[10px] user">
            <img
              className="w-[32px] h-[32px] rounded-full object-cover pp"
              src={dataUser.img || "/img/noavatar.jpg"}
              alt=""
            />
            <span className="text-[14px] font-medium">{dataUser.username}</span>
            {!isNaN(data.totalStars / data.starNumbe) &&
            <div className="flex items-center gap-[5px] stars">
              {Array(Math.round(data.totalStars / data.starNumbe)).fill().map((item,i) =>(

                 <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" key={i} />
                ))}
              <span className="text-[14px] font-bold text-[#ffc108]"> {Math.round(data.totalStars / data.starNumbe)}</span>
            </div>}
          </div>}
          <Slider slidesToShow={1} arrowsScroll={1} className="bg-[#F5F5F5] slider">
            {data.images.map((img) =>(

                <img className="max-h-[500px] object-contain"
                key={img}
                src={img}
                alt=""
                />
            ))}
            
          </Slider>
          <h2 className="font-normal font-semibold text-[30px]">About This Gig</h2>
          <p className="font-light leading-[25px] text-[#555]">
            {data.desc}
          </p>
          {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : <div className="mt-[50px] flex flex-col gap-[20px] seller">
            <h2 className="font-normal font-semibold text-[30px]">About The Seller</h2>
            <div className="flex items-center gap-[20px] user">
              <img className="w-[100px] h-[100px] rounded-full object-cover"
                src={dataUser.img || "/img/noavatar.jpg"}
                alt=""
              />
              <div className="flex flex-col gap-[10px] info">
                    <span className="text-[14px] font-medium">{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumbe) &&
                        <div className="flex items-center gap-[5px] stars">
                            {Array(Math.round(data.totalStars / data.starNumbe)).fill().map((item,i) =>(

                              <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" key={i} />
                            ))}
                            
                            <span className="text-[14px] font-bold text-[#ffc108]"> {Math.round(data.totalStars / data.starNumbe)}</span>
                        </div>
                    }
                    <button className="bg-white rounded-[5px] border border-gray-400 p-[10px]">Contact Me</button>
              </div>
            </div>
            <div className="border border-[lightgray] rounded-[5px] p-[20px] mt-[20px] box">
              <div className="flex justify-between flex-wrap items">
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] item">
                  <span className="title font-light">From</span>
                  <span className="desc">{dataUser.country}</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] item">
                  <span className="title font-light">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] item">
                  <span className="title font-light">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] item">
                  <span className="title font-light">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] item">
                  <span className="title font-light">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr className="h-0 border-t border-[0.5px] border-[lightgray] mb-[20px]"/>
              <p className="font-light leading-[25px] text-[#555]">
                {dataUser.desc}
              </p>
            </div>
          </div>}
          <Reviews gigId={id}/>
        </div>

            {/* ------------right section------------------ */}
            <div className="flex-[1] border border-[lightgray] p-[20px] rounded-[5px] flex flex-col gap-[20px] h-max max-h-[500px] sticky top-[150px] right">
                <div className="flex items-center justify-between price">
                    <h3 className="font-medium">{data.shortTitle}</h3>
                    <h2 className="font-light">${data.price}</h2>
                </div>
                <p className="text-gray-500 my-[10px]">
                    {data.shortDesc}
                </p>
                <div className="flex items-center justify-between text-[14px] details">
                    <div className="flex items-center gap-[10px] item">
                        <img className="w-[20px]" src="/img/clock.png" alt="" />
                        <span>{data.deliveryDate} Days Delivery</span>
                    </div>
                    <div className="flex items-center gap-[10px] item">
                        <img className="w-[20px]" src="/img/recycle.png" alt="" />
                        <span>{data.revisionNumber} Revisions</span>
                    </div>
                </div>

                {/* --------------Features sections--------- */}
                <div className="features">
                    {data.features.map((feature) =>{

                        <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px] item" key={feature}>
                            <img className="w-[14px]" src="/img/greencheck.png" alt="" />
                            <span>{feature}</span>
                        </div>
                    })}
                    
                </div>
                 <Link to={`/pay/${id}`}>
                   <button className="bg-[#1dbf73] p-[10px] text-white font-medium border-none text-[18px] cursor-pointer">Continue</button>
                 </Link>
            </div>
      </div>}
    </div>
  )
}

export default Gig