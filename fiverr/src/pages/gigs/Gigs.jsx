import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import GigCard from "../../components/gigCard/GigCard";
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const {search} = useLocation();


   const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['gigs'],
            queryFn: () =>
            newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
            .then((res) =>{
                return res.data;
            })
    })
    console.log(data);
    
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() =>{
    refetch()
  },[sort]);

  const apply = ()=>{
    refetch();
  }

  return (
    <div className="w-full flex justify-center gigs">
      <div className="w-[1400px] py-[30px] px-0 flex flex-col gap-[15px] container">
        <span className="font-light uppercase text-[13px] text-[#555] breadcrumbs">Liverr &gt; Graphics & Design &gt; </span>
        <h1 className="text-[40px] font-semibold">AI Artists</h1>
        <p className="text-[#999] font-light">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="flex items-center justify-between mb-[20px] menu">
          <div className="flex items-center gap-[10px] text-[#555] font-light left">
            <span>Budget</span>
            <input className="p-[5px] border border-[lightgrey] rounded-[5px] outline-none placeholder:text-[#999]" ref={minRef} type="number" placeholder="min" />
            <input className="p-[5px] border border-[lightgrey] rounded-[5px] outline-none placeholder:text-[#999]" ref={maxRef} type="number" placeholder="max" />
            <button className="py-[5px] px-[10px] bg-[#1dbf73] text-white border-none font-medium rounded-[5px] cursor-pointer" onClick={apply}>Apply</button>
          </div>
          {/* ------------right Section---------- */}
          <div className="relative flex items-center gap-[10px] right">
            <span className="text-[#555] font-light sortBy">Sort by</span>
            <span className="font-medium sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img className="w-[15px] cursor-pointer" src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
                // ---------------right menu-------------
              <div className="p-[20px] bg-white border border-[lightgrey] rounded-[5px] absolute top-[30px] right-0 z-10 flex flex-col gap-[20px] text-[#555] rightMenu">
                {sort === "sales" ? (
                  <span className="cursor-pointer" onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span className="cursor-pointer" onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                  <span className="cursor-pointer" onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>

        {/* -------------------card section--------------- */}
        <div className="flex justify-between flex-wrap cards">
          {isLoading ? "loading" : error ? "Somethine is wrong" : data.map((gig) => (
            <GigCard key={gig._id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs