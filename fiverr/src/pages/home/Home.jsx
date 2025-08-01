import React from 'react'
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
import { cards, projects } from '../../data';
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

function Home() {
  return (
    <div className='home'>
        <Featured />
        <TrustedBy />
        <Slide slidesToShow={5} arrowsScroll={5} >
            {cards.map(card=>(
                <CatCard key={card.id} item={card} />
            ))}
        </Slide>
        <div className={`features flex justify-center p-[100px] bg-[#f1fdf7] `}>
            <div className="container w-[1400px] flex items-center gap-[200px]">
                <div className="item flex flex-col gap-[15px] flex-[2]">
                    <h1 className="font-medium mb-[10px] text-black text-[40px]">A whole world of freelance talent at your fingertips</h1>
                    {/* --------Item 1--------- */}
                    <div className={`title flex items-center gap-[10px] font-medium text-[18px] `}>
                        <img className="w-[24px] h-[24px]" src="./img/check.png" alt="" />
                        The best for every budget
                    </div>
                    <p className={`text-[18px] font-light leading-[28px] tracking-[1px] `}> 
                        Find high-quality services at every price point. No hourly rates, just project-based pricing.
                    </p>

                    {/* --------Item 2--------- */}
                    <div className={`title flex items-center gap-[10px] font-medium text-[18px]`}>
                        <img className="w-[24px] h-[24px]" src="./img/check.png" alt="" />
                        Quality work done quickly
                    </div>
                    <p className={`text-[18px] font-light leading-[28px] tracking-[1px] `}> 
                        Find the right freelancer to begin working on your project within minutes.
                    </p>

                    {/* --------Item 3--------- */}
                    <div className={`title flex items-center gap-[10px] font-medium text-[18px]`}>
                        <img className="w-[24px] h-[24px]" src="./img/check.png" alt="" />
                        Protected payments, every time
                    </div>
                    <p className={`text-[18px] font-light leading-[28px] tracking-[1px] `}> 
                        Always know what you'll pay upfront. Your payment isn't released until you approve the work.
                    </p>

                    {/* --------Item 4--------- */}
                    <div className={`title flex items-center gap-[10px] font-medium text-[18px]`}>
                        <img className="w-[24px] h-[24px]" src="./img/check.png" alt="" />
                        24/7 support
                    </div>
                    <p className={`text-[18px] font-light leading-[28px] tracking-[1px] `}> 
                        Find high-quality services at every price point. No hourly rates, just project-based pricing.
                    </p>
                    
                </div>
                <div className="item">
                    <video src="./img/video.mp4" controls width="700"></video>
                </div>
                
            </div>
        </div>


        <div className="features flex justify-center p-[100px] bg-[#0d084d] text-white ">
            <div className="container w-[1400px] flex items-center gap-[200px]">
                <div className="item flex flex-col gap-[15px] flex-[3] text-[40px]">
                    <h1 className="font-medium mb-[10px] text-white text-[40px]">fiver business</h1>
                    <h1 className="font-medium mb-[10px] text-white">A business solution designed for teams</h1>
                    <p className="text-[18px] font-light leading-[28px] tracking-[1px]">
                        Upgrade to a curated experience packed with tools and benefits,
                        dedicated to businesses
                    </p>
                    {/* --------item1-------- */}
                    <div className="title flex items-center gap-[10px]  text-white font-light text-[14px]">
                        <img className="w-[24px] h-[24px]" src="./img/check.png" alt="" />
                        Connect to freelancers with proven business experience
                    </div>

                    {/* --------item2-------- */}
                    <div className="title flex items-center gap-[10px]  text-white font-light text-[14px]">
                        <img className="w-[24px] h-[24px]" src="./img/check.png" alt="" />
                        Get matched with the perfect talent by a customer success manager
                    </div>

                    {/* --------item3-------- */}
                    <div className="title flex items-center gap-[10px]  text-white font-light text-[14px]">
                        <img className="w-[24px] h-[24px]" src="./img/check.png" alt="" />
                        Manage teamwork and boost productivity with one powerful workspace
                    </div>

                    <button className="bg-[#1dbf73] border-none text-white py-[10px] px-[20px] rounded-[5px] w-max text-[16px] cursor-pointer mt-[20px]">
                        Explore Liverr Business
                    </button>                    
                </div>
                <div className="item flex flex-col gap-[15px] flex-[3] text-[40px]">
                    <img className="w-full" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
                </div>
            </div>
        </div>

        <Slide slidesToShow={4.1} arrowsScroll={4}>
            {projects.map((card)=> (
                <ProjectCard key={card.id} item={card} />
            ))}
        </Slide>
    </div>
  )
}

export default Home