import React from "react";

/**
 * NameAreaShimmer
 * Placeholder skeleton for NameArea component
 */
const NameAreaShimmer = () => {
  return (
    <div className="pd-heading logoIcon pt-8 flex flex-col lg:flex-row animate-pulse">
      {/* Left: logo + title */}
      <div className="pd-heading-left flex items-start gap-4 w-full lg:w-2/3">
        {/* Logo */}
        <div className="pd-logo w-36 h-20 bg-gray-300 rounded-md flex-shrink-0" />

        {/* Title / Builder / Location */}
        <div className="pd-title flex-1">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
      </div>

      {/* Right: price / status / share */}
      <div className="pd-heading-right mt-4 lg:mt-0 w-full lg:w-1/3 flex justify-start lg:justify-end">
        <div className="pd-price flex flex-col items-start lg:items-end text-left lg:text-right gap-2">
          <div className="flex items-center gap-2">
            <div className="h-5 w-16 bg-gray-300 rounded" />
            <div className="h-5 w-24 bg-gray-300 rounded" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-4 w-16 bg-gray-300 rounded" />
            <div className="h-4 w-20 bg-gray-300 rounded" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-8 w-20 bg-gray-300 rounded" />
            <div className="h-6 w-12 bg-gray-200 rounded ml-2" />
          </div>
        </div>
      </div>

      {/* Bottom: configuration + rera */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center text-left lg:text-center relative text-[12px] leading-4 text-[#666] font-sans m-0 lg:px-2.5 py-4 pr-2 gap-3 lg:gap-0 w-full">
        <div className="mr-5 text-[16px] leading-5 text-[#333] font-medium font-sans m-0 p-0 w-full lg:w-2/3">
          <div className="pd-bhk">
            <div className="h-4 w-1/3 bg-gray-300 rounded" />
          </div>
        </div>

        <div className="pd-rera text-[16px] leading-5 text-[#058374] font-semibold w-full lg:w-1/3 flex items-center gap-2 justify-start lg:justify-end">
          <div className="h-4 w-20 bg-gray-300 rounded" />
          <div className="h-4 w-28 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default NameAreaShimmer;
