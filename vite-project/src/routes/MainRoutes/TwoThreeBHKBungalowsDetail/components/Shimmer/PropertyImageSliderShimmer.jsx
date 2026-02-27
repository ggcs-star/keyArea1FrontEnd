const PropertyImageSliderShimmer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 mb-4 animate-pulse">
      
      {/* Main Image Skeleton */}
      <div className="w-full lg:w-[65%] relative">
        <div className="w-full h-[400px] bg-gray-300 rounded-lg"></div>
      </div>

      {/* Thumbnails Skeleton */}
      <div className="w-full lg:w-[35%] flex flex-col gap-2">
        <div className="w-full h-[195px] bg-gray-300 rounded-lg"></div>
        <div className="w-full h-[195px] bg-gray-300 rounded-lg"></div>
      </div>

    </div>
  );
};

export default PropertyImageSliderShimmer;
