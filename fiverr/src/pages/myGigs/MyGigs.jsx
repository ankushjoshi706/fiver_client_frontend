import React from 'react';
import { Link } from "react-router-dom";
import getCurrentUser from '../../utils/getCurrentUser';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function MyGigs() {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error , data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };


  return (
    <div className="flex justify-center text-[#555] myGigs">
      {isLoading ? "loading" : error ? "error" :
      <div className="w-[1400px] py-[50px] container">
        <div className="flex justify-between title">
          <h1 className="text-[30px] font-bold">Gigs</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-[#1dbf73] text-white font-medium border-none p-[10px] cursor-pointer">Add New Gig</button>
            </Link>
          )}
        </div>
        <table className="w-full">
            <thead>
                <tr className="h-[50px] even:bg-[#1dbf730f]">
                    <th className="text-left">Image</th>
                    <th className="text-left">Title</th>
                    <th className="text-left">Price</th>
                    <th className="text-left">Sales</th>
                    <th className="text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((gig) => (
                <tr className="h-[50px] even:bg-[#1dbf730f]" key={gig._id}>
                    <td>
                    <img
                        className="w-[50px] h-[25px] object-cover image"
                        src={gig.cover}
                        alt=""
                    />
                    </td>
                    <td>{gig.title}</td>
                    <td>{gig.price}</td>
                    <td>{gig.sales}</td>
                    <td>
                    <img className="w-[20px] cursor-pointer delete" src="./img/delete.png" alt="" onClick={() => handleDelete(gig._id)} />
                    </td>
                </tr>))}
            </tbody>
          
        </table>
      </div>}
    </div>
  );
}

export default MyGigs