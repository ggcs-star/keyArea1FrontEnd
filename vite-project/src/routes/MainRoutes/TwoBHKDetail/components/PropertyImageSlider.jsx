import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PropertyImageSlider = ({ images = [], imageRera }) => {
  // Convert API structure [{image:""}] → ["", ""]
  const imageUrls = images.map(item => item.image);

  const mainImage = imageUrls[0];
  const thumbnails = imageUrls.slice(1, 3);
  const remainingCount = imageUrls.length - 3;

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const splideRef = useRef(null);

  const openCarousel = (index) => {
    setStartIndex(index);
    setIsCarouselOpen(true);
  };

  const goPrev = () => {
    const splide = splideRef.current?.splide;
    if (splide) splide.go("<");
  };

  const goNext = () => {
    const splide = splideRef.current?.splide;
    if (splide) splide.go(">");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 mb-4">
      {/* Left - Main Image */}
      <div className="w-full lg:w-[65%] relative">
        {mainImage && (
          <div
            className="relative cursor-pointer"
            onClick={() => openCarousel(0)}
          >
            <img
              src={mainImage}
              alt="Main"
              className="w-full h-[400px] object-cover rounded-lg shadow"
            />

            {imageRera && (
              <img
                src={imageRera}
                alt="Verified"
                className="absolute top-2 left-2 w-8 h-8 lg:w-12 lg:h-12 -rotate-12 object-contain z-10"
              />
            )}

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <p className="opacity-20 text-white px-3 py-1 text-5xl font-semibold">
                KEY AREA 1
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right - Thumbnails */}
      <div className="w-full lg:w-[35%] flex flex-col gap-2">
        {thumbnails.map((img, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer"
            onClick={() => openCarousel(idx + 1)}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 2}`}
              className="w-full h-[195px] object-cover rounded-lg shadow"
            />

            {idx === 1 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
                <span className="text-white text-2xl font-bold">
                  +{remainingCount} more
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Splide Carousel */}
      {isCarouselOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsCarouselOpen(false)}
            className="text-white text-2xl absolute top-4 right-6 z-50"
            type="button"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="relative w-full h-full max-h-screen">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                start: startIndex,
                perPage: 3,
                focus: "center",
                gap: "1rem",
                pagination: true,
                arrows: false,
                autoHeight: true,
                autoWidth: true,
              }}
              className="h-full flex items-center justify-center"
            >
              {imageUrls.map((src, idx) => (
                <SplideSlide
                  key={idx}
                  className="flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`Slide ${idx}`}
                    className="h-[470px] object-cover rounded-lg transition-all duration-500"
                  />
                </SplideSlide>
              ))}
            </Splide>

            {/* Prev Arrow */}
            <button
              type="button"
              aria-label="Previous"
              onClick={goPrev}
              className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black transition z-50"
            >
              <FiChevronLeft className="text-2xl" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              aria-label="Next"
              onClick={goNext}
              className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black transition z-50"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyImageSlider;
