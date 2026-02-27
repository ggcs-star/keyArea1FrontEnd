import React from "react";

const UnitSelectionDashboardShimmer = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10 animate-pulse">

      {/* Heading */}
      <div className="h-6 w-64 bg-gray-300 rounded mx-auto"></div>

      {/* Block Buttons */}
      <div className="text-center space-y-4">
        <div className="h-5 w-40 bg-gray-300 rounded mx-auto"></div>

        <div className="grid grid-cols-3 gap-4 justify-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-12 bg-gray-300 rounded-xl"
            ></div>
          ))}
        </div>
      </div>

      {/* Floor Buttons */}
      <div className="text-center space-y-4">
        <div className="h-5 w-52 bg-gray-300 rounded mx-auto"></div>

        <div className="grid grid-cols-3 gap-4 justify-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-12 bg-gray-300 rounded-xl"
            ></div>
          ))}
        </div>
      </div>

      {/* Units Grid */}
      <div className="text-center space-y-4">
        <div className="h-5 w-60 bg-gray-300 rounded mx-auto"></div>

        <div className="grid grid-cols-3 gap-4 justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-16 bg-gray-300 rounded-xl"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitSelectionDashboardShimmer;
