import React from "react";

const ImageGalleryShimmer = () => {
  return (
    <section className="pd-sec bsas border-1 border-gray-300 p-4 mt-8 animate-pulse">
      
      {/* Title */}
      <div className="pd-sec-title mb-3">
        <div className="h-6 w-48 bg-gray-300 rounded"></div>
      </div>

      {/* Image Grid Skeleton */}
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <li key={i} className="group">
            <div className="fp-img-inb">
              <div className="fp-img overflow-hidden">
                <div className="w-full h-[220px] bg-gray-300 rounded"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Button Shimmer */}
      <div className="flex justify-center mt-4">
        <div className="h-8 w-32 bg-gray-300 rounded"></div>
      </div>

      {/* Note shimmer */}
      <p className="text-xs text-gray-500 mt-4 italic">
        <span className="inline-block h-3 w-48 bg-gray-300 rounded"></span>
      </p>

    </section>
  );
};

export default ImageGalleryShimmer;
