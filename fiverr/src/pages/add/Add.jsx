import React, {useReducer, useState} from 'react'
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Add() {

  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs")
  };


  return (
    <div className="flex justify-center add">
      <div className="w-[1400px] py-[50px] px-0 container">
        <h1 className="w-max mb-[30px] text-[40px] text-gray-500 font-medium ">Add New Gig</h1>
        {/* -------sections--------- */}
        <div className="flex justify-between gap-[100px] sections">
          <div className="flex-1 flex flex-col gap-[10px] justify-between info">
            <label className="text-gray-500 text-[18px]" htmlFor="">Title</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm"
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">Category</label>
            <select className="p-[20px] outline outline-offset-2 rounded-sm" name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="flex items-center gap-[20px] images">
                <div className="flex flex-col gap-[20px] imagesInputs">

                    <label className="text-gray-500 text-[18px]" htmlFor="">Cover Image</label>
                    <input className="p-[20px] outline outline-offset-2 rounded-sm bg-[#f1e7e7]" type="file" onChange={e=>setSingleFile(e.target.files[0])} />
                    <label className="text-gray-500 text-[18px]" htmlFor="">Upload Images</label>
                    <input className="p-[20px] outline outline-offset-2 rounded-sm bg-[#f1e7e7]" type="file" multiple onChange={e=>setFiles(e.target.files)}/>
                </div>
                <button className="border-none ml-50 p-[20px] text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer" onClick={handleUpload}>{uploading ? "uploading" : "Upload"}</button>

            </div>
            <label className="text-gray-500 text-[18px]" htmlFor="">Description</label>
            <textarea className="p-[20px] outline outline-offset-2 rounded-sm" name="desc" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16" onChange={handleChange}></textarea>
            <button 
                className="border-none p-[20px] text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer"
                onClick={handleSubmit}
                >Create</button>
          </div>
          {/* -----------details------------ */}
          <div className="flex-1 flex flex-col gap-[10px] justify-between details">
            <label className="text-gray-500 text-[18px]" htmlFor="">Service Title</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="text" name="shortTitle" placeholder="e.g. One-page web design" onChange={handleChange}/>
            <label className="text-gray-500 text-[18px]" htmlFor="">Short Description</label>
            <textarea  className="p-[20px] outline outline-offset-2 rounded-sm" name="shortDesc" id="" placeholder="Short description of your service" cols="30" rows="10" onChange={handleChange}></textarea>
            <label className="text-gray-500 text-[18px]" htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="number" name="deliveryTime" onChange={handleChange}/>
            <label className="text-gray-500 text-[18px]" htmlFor="">Revision Number</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="number" name="revisionNumber" min={1} onChange={handleChange}/>
            <label className="text-gray-500 text-[18px]" htmlFor="">Add Features</label>
            <form className="flex justify-between add" action="" onSubmit={handleFeature}>

             <input className="p-[20px] w-[80%]  outline outline-offset-2 rounded-sm" type="text" placeholder="e.g. page design" />
             <button className="border-none p-[20px] text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer" type="submit">Add</button>
            </form>
            <div className="flex gap-[20px] addedFeatures">
                {state?.features ?.map((f)=>(

                <div className="flex items-center gap-[20px]" key={f}>
                    <button 
                    className="h-[30px] text-[12px] font-normal bg-transparent text-red-500 border border-red-500 flex items-center gap-[20px] px-[12px]"
                    onClick={()=>dispatch({type:"REMOVE_FEATURE", payload : f})}
                    >{f}
                        <span>X</span>
                    </button>
                </div>
                ))
                }

            </div>
            <label className="text-gray-500 text-[18px]" htmlFor="">Price</label>
            <input className="p-[20px] outline outline-offset-2 rounded-sm" type="number" name="price" onChange={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add