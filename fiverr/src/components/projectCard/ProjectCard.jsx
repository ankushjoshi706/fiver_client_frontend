import React from 'react'
import { Link } from 'react-router-dom';

function ProjectCard({item}) {
  return (
    <Link to="/">
        <div className="w-[300px] h-[300px] rounded-[5px] overflow-hidden cursor-pointer border border-[rgb(225,225,225)] projectCard">
            <img className="w-full h-[70%] object-cover" src={item.img} alt="" />
            <div className="flex items-center gap-[20px] p-[15px] info">
                <img className="w-[40px] h-[40px] rounded-full object-cover" src={item.pp} alt="" />
                <div className="texts">
                    <h2 className="text-[14px] font-medium">{item.cat}</h2>
                    <span className="text-[14px] font-light">{item.username}</span>
                </div>
            </div>

        </div>
    </Link>
  )
}

export default ProjectCard