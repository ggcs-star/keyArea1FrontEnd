import React from "react";

const AmenitiesSectionShimmer = () => {
  return (
    <section className="pd-sec bsas border-1 border-gray-300 p-4 mt-8 animate-pulse">
      {/* Title */}
      <div className="pd-sec-title mb-3">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>

      {/* Grid Skeleton */}
      <ul className="grid gap-4 list-none p-0 [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] sm:[grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <li key={i} className="flex flex-col items-center gap-2">
            {/* Icon shimmer */}
            <div className="w-12 h-12 bg-gray-300 rounded"></div>

            {/* Text shimmer */}
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </li>
        ))}
      </ul>

      {/* Optional hint shimmer */}
      <div className="mt-4">
        <div className="h-3 w-48 bg-gray-300 rounded"></div>
      </div>
    </section>
  );
};

export default AmenitiesSectionShimmer;
