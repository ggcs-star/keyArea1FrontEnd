import React from "react";

const ShimmerCard = () => {
  return (
    <div className="px-2 py-8">
      <div className="animate-pulse bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col border border-gray-100">
        {/* Image placeholder */}
        <div className="bg-gray-200 h-48 w-full"></div>

        <div className="p-4 flex-1 flex flex-col space-y-3">
          {/* Title */}
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          {/* Location */}
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          {/* Type */}
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          {/* Price */}
          <div className="h-5 bg-gray-300 rounded w-2/4"></div>
          {/* Size */}
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
