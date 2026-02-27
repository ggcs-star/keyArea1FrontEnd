import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PropertyImageSlider = ({ images, imageRera }) => {
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const mainSliderRef = useRef();

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: true,
    dots: true,
    beforeChange: (oldIndex, newIndex) => setMainImgIdx(newIndex),
  };

  return (
    <div className="mb-4 relative w-[850px] h-[350px]">
      <Slider
        {...mainSettings}
        afterChange={setMainImgIdx}
        slickGoTo={mainImgIdx}
        ref={mainSliderRef}
        className='rounded-lg'
      >
        {images.map((img, idx) => (
          <div key={img} className="relative w-full h-[350px] rounded-lg">
            <img
              src={img}
              alt={`Main ${idx + 1}`}
              className="rounded-lg shadow object-contain"
            />

            {imageRera && (
              <img
                src={imageRera}
                alt="Verified"
                className="absolute top-2 left-2 w-8 h-8 lg:w-18 lg:h-18 -rotate-30 object-contain z-10"
              />
            )}

            {/* Fixed Text */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <p className="opacity-20 text-white px-3 py-1  text-5xl font-semibold">
                KEY AREA 1
              </p>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default PropertyImageSlider;
