import React from 'react';
import { Slider } from "infinite-react-carousel/lib";


function Gig() {
  return (
    <div className="flex justify-center gig">
      <div className="w-[1400px] py-[30px] px-0 flex gap-[50px] container">
        {/* --------left section---------- */}
        <div className="flex-[2] flex flex-col gap-[20px] left">
          <span className="font-light uppercase text-[13px] text-[#555] breadcrumbs">Fiverr &gt; Graphics & Design &gt;</span>
          <h1 className="text-[30px] font-semibold">I will create ai generated art for you</h1>
          {/* ----------user section--------- */}
          <div className="flex items-center gap-[10px] user">
            <img
              className="w-[32px] h-[32px] rounded-full object-cover pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="text-[14px] font-medium">Anna Bell</span>
            <div className="flex items-center gap-[5px] stars">
              <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
              <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
              <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
              <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
              <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
              <span className="text-[14px] font-bold text-[#ffc108]">5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="bg-[#F5F5F5] slider">
            <img className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2 className="font-normal font-semibold text-[30px]">About This Gig</h2>
          <p className="font-light leading-[25px] text-[#555]">
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="mt-[50px] flex flex-col gap-[20px] seller">
            <h2 className="font-normal font-semibold text-[30px]">About The Seller</h2>
            <div className="flex items-center gap-[20px] user">
              <img className="w-[100px] h-[100px] rounded-full object-cover"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="flex flex-col gap-[10px] info">
                    <span className="text-[14px] font-medium">Anna Bell</span>
                    <div className="flex items-center gap-[5px] stars">
                    <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                    <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                    <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                    <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                    <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                    <span className="text-[14px] font-bold text-[#ffc108]">5</span>
                    </div>
                    <button className="bg-white rounded-[5px] border border-gray-400 p-[10px]">Contact Me</button>
              </div>
            </div>
            <div className="border border-[lightgray] rounded-[5px] p-[20px] mt-[20px] box">
              <div className="flex justify-between flex-wrap items">
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px] item">
                  <span className="title font-light">From</span>
                  <span className="desc">USA</span>
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
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>

          {/* -----------review section--------------- */}
          <div className="mt-[50px] reviews">
                <h2 className="font-normal font-semibold text-[30px]">Reviews</h2>
                {/* ---------------review 1---------------- */}
                <div className="flex flex-col gap-[20px] my-[20px] item">
                <div className="flex items-center user">
                    <img
                    className="h-[50px] w-[50px] rounded-full pp"
                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    />
                    <div className="ml-2 info">
                    <span className="text-[14px] font-medium">Garner David</span>
                    <div className="flex items-center gap-[10px] text-gray-500 country">
                        <img className="w-[20px]"
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                        />
                        <span>United States</span>
                    </div>
                    </div>
                </div>
                <div className="flex items-center gap-[5px] stars">
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <span className="text-[14px] font-bold text-[#ffc108]">5</span>
                </div>
                <p className="font-light leading-[25px] text-[#555]">
                    I just want to say that art_with_ai was the first, and after
                    this, the only artist Ill be using on Fiverr. Communication was
                    amazing, each and every day he sent me images that I was free to
                    request changes to. They listened, understood, and delivered
                    above and beyond my expectations. I absolutely recommend this
                    gig, and know already that Ill be using it again very very soon
                </p>
                <div className="flex items-center gap-[10px] helpful">
                    <span>Helpful?</span>
                    <img className="w-[14px]" src="/img/like.png" alt="" />
                    <span>Yes</span>
                    <img className="w-[14px]" src="/img/dislike.png" alt="" />
                    <span>No</span>
                </div>
                </div>
                <hr className="h-0 border-t border-[0.5px] border-[lightgray] my-[50px]"/>
                {/* ---------------review 2---------------- */}
                <div className="flex flex-col gap-[20px] my-[20px] item">
                <div className="flex items-center user">
                    <img
                    className="h-[50px] w-[50px] rounded-full pp"
                    src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    />
                    <div className="ml-2 info">
                    <span className="text-[14px] font-medium">Sidney Owen</span>
                    <div className="flex items-center gap-[10px] text-gray-500 country">
                        <img className="w-[20px]"
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                        alt=""
                        />
                        <span>Germany</span>
                    </div>
                    </div>
                </div>
                <div className="flex items-center gap-[5px] stars">
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                        <span className="text-[14px] font-bold text-[#ffc108]">5</span>
                </div>
                <p className="font-light leading-[25px] text-[#555]">
                    The designer took my photo for my book cover to the next level!
                    Professionalism and ease of working with designer along with
                    punctuality is above industry standards!! Whatever your project
                    is, you need this designer!
                </p>
                <div className="flex items-center gap-[10px] helpful">
                    <span>Helpful?</span>
                    <img className="w-[14px]" src="/img/like.png" alt="" />
                    <span>Yes</span>
                    <img className="w-[14px]" src="/img/dislike.png" alt="" />
                    <span>No</span>
                </div>
                </div>
                <hr className="h-0 border-t border-[0.5px] border-[lightgray] my-[50px]"/>

                {/* ---------------review 3---------------- */}
                <div className="flex flex-col gap-[20px] my-[20px] item">
                    <div className="flex items-center user">
                            <img
                            className="h-[50px] w-[50px] rounded-full pp"
                            src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                            />
                            <div className="ml-2 info">
                                <span className="text-[14px] font-medium">Lyle Giles </span>
                                <div className="flex items-center gap-[10px] text-gray-500 country">
                                    <img className="w-[20px]"
                                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                    alt=""
                                    />
                                    <span>United States</span>
                                </div>
                            </div>
                    </div>
                    <div className="flex items-center gap-[5px] stars">
                            <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                            <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                            <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                            <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                            <img className="h-[14px] w-[14px]" src="/img/star.png" alt="" />
                            <span className="text-[14px] font-bold text-[#ffc108]">5</span>
                    </div>
                    <p className="font-light leading-[25px] text-[#555]">
                        Amazing work! Communication was
                        amazing, each and every day he sent me images that I was free to
                        request changes to. They listened, understood, and delivered
                        above and beyond my expectations. I absolutely recommend this
                        gig, and know already that Ill be using it again very very soon
                    </p>
                    <div className="flex items-center gap-[10px] helpful">
                        <span>Helpful?</span>
                        <img className="w-[14px]" src="/img/like.png" alt="" />
                        <span>Yes</span>
                        <img className="w-[14px]" src="/img/dislike.png" alt="" />
                        <span>No</span>
                    </div>
                </div>
          </div>
        </div>

            {/* ------------right section------------------ */}
            <div className="flex-[1] border border-[lightgray] p-[20px] rounded-[5px] flex flex-col gap-[20px] h-max max-h-[500px] sticky top-[150px] right">
                <div className="flex items-center justify-between price">
                    <h3 className="font-medium">1 AI generated image</h3>
                    <h2 className="font-light">$ 59.99</h2>
                </div>
                <p className="text-gray-500 my-[10px]">
                    I will create a unique high quality AI generated image based on a
                    description that you give me
                </p>
                <div className="flex items-center justify-between text-[14px] details">
                    <div className="flex items-center gap-[10px] item">
                        <img className="w-[20px]" src="/img/clock.png" alt="" />
                        <span>2 Days Delivery</span>
                    </div>
                    <div className="flex items-center gap-[10px] item">
                        <img className="w-[20px]" src="/img/recycle.png" alt="" />
                        <span>3 Revisions</span>
                    </div>
                </div>

                {/* --------------Features sections--------- */}
                <div className="features">
                    <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px] item">
                        <img className="w-[14px]" src="/img/greencheck.png" alt="" />
                        <span>Prompt writing</span>
                    </div>
                    <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px] item">
                        <img className="w-[14px]" src="/img/greencheck.png" alt="" />
                        <span>Artwork delivery</span>
                    </div>
                    <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px] item">
                        <img className="w-[14px]" src="/img/greencheck.png" alt="" />
                        <span>Image upscaling</span>
                    </div>
                    <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px] item">
                        <img className="w-[14px]" src="/img/greencheck.png" alt="" />
                        <span>Additional design</span>
                    </div>
                </div>
                <button className="bg-[#1dbf73] p-[10px] text-white font-medium border-none text-[18px] cursor-pointer">Continue</button>
            </div>
      </div>
    </div>
  )
}

export default Gig