import React from "react";

const OverviewShimmer = () => {
  return (
    <div className="pt-5 animate-pulse">
      {/* FEATURES BOX */}
      <div className="border border-gray-300 rounded overflow-hidden mb-5">

        <div className="border-b border-gray-200">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            
            {[...Array(7)].map((_, i) => (
              <li key={i} className="flex items-center p-3">
                {/* Icon Skeleton */}
                <div className="mr-3 flex-shrink-0">
                  <div className="w-[27px] h-[27px] bg-gray-300 rounded" />
                </div>

                {/* Text Skeleton */}
                <div className="flex flex-col gap-1 w-full">
                  <div className="h-3 w-20 bg-gray-300 rounded" />
                  <div className="h-4 w-28 bg-gray-300 rounded" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BROCHURE ROW */}
      <div className="flex items-center p-3 rounded bg-blue-50 mb-4">

        {/* Brochure icon */}
        <div className="mr-4">
          <div className="w-10 h-12 bg-gray-300 rounded" />
        </div>

        <div className="flex justify-between items-center w-full">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="h-3 w-40 bg-gray-300 rounded" />
          </div>

          {/* Button */}
          <div className="h-10 w-28 bg-gray-300 rounded-lg" />
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="px-3 py-2">
        <div className="h-3 w-56 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default OverviewShimmer;
