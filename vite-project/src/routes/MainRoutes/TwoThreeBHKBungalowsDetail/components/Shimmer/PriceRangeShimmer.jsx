import React from "react";

const PriceRangeShimmer = () => {
  return (
    <section className="pd-sec bsas border border-gray-300 p-4 my-8 rounded-lg animate-pulse">
      
      {/* Title */}
      <div className="pd-sec-title mb-4">
        <div className="h-6 w-40 bg-gray-300 rounded"></div>
      </div>

      {/* Chart Shimmer */}
      <div className="w-full h-[350px] bg-gray-300 rounded-lg mb-6"></div>

      {/* Locality Info Box */}
      <div className="w-fit border border-gray-200 p-4 rounded-lg shadow-sm">
        {/* Locality Title */}
        <div className="h-4 w-32 bg-gray-300 rounded mb-3"></div>

        <div className="flex gap-6 text-sm">
          {/* Growth Column */}
          {/* <div>
            <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
          </div> */}

          {/* Growth Percent Column */}
          <div>
            <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="h-3 w-40 bg-gray-200 rounded mt-4"></div>
    </section>
  );
};

export default PriceRangeShimmer;
