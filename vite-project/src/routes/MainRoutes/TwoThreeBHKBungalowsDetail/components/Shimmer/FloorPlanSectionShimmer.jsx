import React from "react";

const FloorPlanSectionShimmer = () => {
  return (
    <section className="pd-sec bsas border border-gray-300 p-4 my-8 rounded-lg animate-pulse">
      
      {/* Title */}
      <div className="pd-sec-title mb-3">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>

      {/* Grid shimmer */}
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <li key={i}>
            <div className="fp-img mb-2">
              <div className="w-full h-40 bg-gray-300 rounded shadow"></div>
            </div>

            {/* Image title shimmer */}
            <div className="h-4 w-24 bg-gray-300 rounded mt-1"></div>
          </li>
        ))}
      </ul>
      
    </section>
  );
};

export default FloorPlanSectionShimmer;
