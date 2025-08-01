import React from 'react';
import Slider from 'infinite-react-carousel';


function Slide({children, slidesToShow, arrowsScroll}) {
  return (
    <div className="flex justify-center py-[100px] px-0 slide ">
        <div className="w-[1400px] relative container ">
            <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}  >
                {children}
            </Slider>

        </div>
    </div>
  )
}

export default Slide