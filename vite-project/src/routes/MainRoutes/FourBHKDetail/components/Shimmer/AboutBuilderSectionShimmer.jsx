import React from "react";

const AboutBuilderSectionShimmer = () => {
  return (
    <section className="pd-sec bsas border border-gray-300 p-4 animate-pulse">
      {/* Title */}
      <div className="pd-sec-title mb-3">
        <div className="h-6 w-40 bg-gray-300 rounded"></div>
      </div>

      {/* First paragraph */}
      <div className="space-y-2 mb-3">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>

      {/* "Read More" button shimmer */}
      <div className="h-4 w-24 bg-gray-300 rounded mt-2"></div>

      {/* Default note shimmer */}
      <div className="mt-4">
        <div className="h-3 w-48 bg-gray-200 rounded"></div>
      </div>
    </section>
  );
};

export default AboutBuilderSectionShimmer;
