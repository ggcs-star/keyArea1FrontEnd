import React, { useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import devkunj13 from '../../../../assets/properties/devkunj/13.png';

const UnitBookingStatusSection = ({ blockName, units = [], submittedOn = "N/A" }) => {
  const bookedCount = units.filter(u => (u.status || '').toLowerCase() === "booked").length;
  const unbookedCount = units.filter(u => (u.status || '').toLowerCase() !== "booked").length;

  return (
    <>
      {/* Custom tooltip style */}
  <style>
  {`
    .tippy-box[data-theme~='purple-tooltip'] {
      background-color: #7e22ce; /* Tailwind purple-600 */
      color: white;
      padding: 0; /* Remove default padding */
    }

    /* Optional: remove padding from content wrapper too */
    .tippy-box[data-theme~='purple-tooltip'] .tippy-content {
      padding: 0; /* Remove padding inside content */
    }
  `}
</style>


      <section className="mt-8 w-full">
        <h3 className="text-white bg-red-500 px-4 py-2 rounded-t-md font-semibold text-lg">
          Unit Wise Booking Status{blockName ? ` for Block ${blockName}` : ''}{" "}
          <span className="text-sm font-normal">
            (Submitted On - {submittedOn})
          </span>
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-50 border border-purple-200 rounded-b-md">
          {units.length > 0 ? (
            units.map((unit, idx) => {
              const status = (unit.status || '').toLowerCase();
              const colorClass = status === "booked" ? "bg-red-600" : "bg-green-600";

              return (
                <Tippy
                  key={idx}
                  animation="scale"
                  placement="bottom"
                  theme="purple-tooltip"
                  content={
                    <div className="w-44">
                      <img
                        src={devkunj13}
                        alt="unit plan"
                        className="w-full h-auto mb-2 rounded"
                      />
                      <div className="pb-1 px-1 text-center text-white">Carpet Area: {unit.carpetArea}</div>
                    </div>
                  }
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-md text-white font-semibold text-sm shadow ${colorClass}`}
                  >
                    {unit.unitNumber}
                  </div>
                </Tippy>
              );
            })
          ) : (
            <p className="text-gray-600">No units available.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default UnitBookingStatusSection;
