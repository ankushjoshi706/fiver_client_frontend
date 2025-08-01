import React from 'react'

function Footer() {
  return (
    <div className="flex justify-center text-[#666] my-[50px] footer">
        <div className="w-[1400px] container">
            <div className="flex justify-between top">
                {/* -------------item1---------- */}
                <div className="flex flex-col gap-[20px] item">
                    <h2 className="text-[20px] font-bold text-[#555]">Categories</h2>
                    <span className="font-light">Graphics & Design</span>
                    <span className="font-light">Digital Marketing</span>
                    <span className="font-light">Writing & Translation</span>
                    <span className="font-light">Video & Animation</span>
                    <span className="font-light">Music & Audio</span>
                    <span className="font-light">Programming & Tech</span>
                    <span className="font-light">Data</span>
                    <span className="font-light">Business</span>
                    <span className="font-light">Lifestyle</span>
                    <span className="font-light">Photography</span>
                    <span className="font-light">Sitemap</span>
                </div>

                {/* ---------item2--------------------- */}

                <div className="flex flex-col gap-[20px] item">
                  <h2 className="text-[20px] font-bold text-[#555]">About</h2>
                  <span className="font-light">Press & News</span>
                  <span className="font-light">Partnerships</span>
                  <span className="font-light">Privacy Policy</span>
                  <span className="font-light">Terms of Service</span>
                  <span className="font-light">Intellectual Property Claims</span>
                  <span className="font-light">Investor Relations</span>
                  <span className="font-light">Contact Sales</span>
                </div>

                {/* ----------item3---------- */}

                <div className="flex flex-col gap-[20px] item">
                    <h2 className="text-[20px] font-bold text-[#555]">Support</h2>
                    <span className="font-light">Help & Support</span>
                    <span className="font-light">Trust & Safety</span>
                    <span className="font-light">Selling on Liverr</span>
                    <span className="font-light">Buying on Liverr</span>
                </div>

                {/* ---------------item4-------- */}

                <div className="flex flex-col gap-[20px] item">
                    <h2 className="text-[20px] font-bold text-[#555]">Community</h2>
                    <span className="font-light">Customer Success Stories</span>
                    <span className="font-light">Community hub</span>
                    <span className="font-light">Forum</span>
                    <span className="font-light">Events</span>
                    <span className="font-light">Blog</span>
                    <span className="font-light">Influencers</span>
                    <span className="font-light">Affiliates</span>
                    <span className="font-light">Podcast</span>
                    <span className="font-light">Invite a Friend</span>
                    <span className="font-light">Become a Seller</span>
                    <span className="font-light">Community Standards</span>
                </div>

                {/* --------------------item5----------- */}

                <div className="flex flex-col gap-[20px] item">
                    <h2 className="text-[20px] font-bold text-[#555]">More From Fiverr</h2>
                    <span className="font-light">Liverr Business</span>
                    <span className="font-light">Liverr Pro</span>
                    <span className="font-light">Liverr Logo Maker</span>
                    <span className="font-light">Liverr Guides</span>
                    <span className="font-light">Get Inspired</span>
                    <span className="font-light">Liverr Select</span>
                    <span className="font-light">ClearVoice</span>
                    <span className="font-light">Liverr Workspace</span>
                    <span className="font-light">Learn</span>
                    <span className="font-light">Working Not Working</span>
                </div>
            </div>
            <hr className="my-[50px] h-0 border border-[#ebe9e9]"/>
            {/* ----------bottom section----------- */}
            <div className="flex items-center justify-between bottom">
                <div className="flex items-center gap-[20px] w-max left">
                    <h2 className="text-[26px] font-extrabold text-[#555]">fiverr <span className="font-bold text-[#1dbf73] dot">.</span></h2>
                    <span className="text-[13px] whitespace-nowrap">© Liverr International Ltd. 2025</span>
                </div>
                <div className="flex items-center gap-[30px] w-max right">
                    <div className="social flex gap-[20px]">
                        <img className="w-[24px] h-[24px]" src="/img/twitter.png" alt="" />
                        <img className="w-[24px] h-[24px]" src="/img/facebook.png" alt="" />
                        <img className="w-[24px] h-[24px]" src="/img/linkedin.png" alt="" />
                        <img className="w-[24px] h-[24px]" src="/img/pinterest.png" alt="" />
                        <img className="w-[24px] h-[24px]" src="/img/instagram.png" alt="" />
                    </div>

                    <div className="link flex items-center gap-[10px]">
                        <img className="w-[24px] h-[24px]" src="/img/language.png" alt="" />
                        <span>English</span>
                    </div>

                    <div className="link flex items-center gap-[10px]">
                        <img className="w-[24px] h-[24px]" src="/img/coin.png" alt="" />
                        <span>USD</span>
                    </div>

                    <img className="w-[24px] h-[24px]" src="/img/accessibility.png" alt="" />
                      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer