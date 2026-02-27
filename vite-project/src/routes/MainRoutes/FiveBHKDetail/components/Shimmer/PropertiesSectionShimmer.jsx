import React from "react";

const PropertiesSectionShimmer = () => {
  return (
    <section
      className="block text-[#333] text-[12px] leading-[1.5em] font-sans bg-white border m-0 p-0 mb-5 animate-pulse"
    >
      {/* TITLE */}
      <div className="pd-sec-title px-5 pt-5">
        <div className="h-5 w-48 bg-gray-300 rounded" />
      </div>

      <div className="pds-body px-5 pb-5">
        {/* TABS */}
        <ul className="flex gap-4 mb-4 mt-3">
          <li className="h-7 w-16 bg-gray-300 rounded" />
        </ul>

        {/* Divider */}
        <div className="bg-[#f5f5f5] border-t border-[#ddd] mb-3 h-4"></div>

        {/* SLIDER AREA */}
        <div className="flex gap-4 overflow-hidden">

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1/3 bg-[#f0f6ff] border border-[#6cacff] rounded-lg shadow-lg"
              style={{ minHeight: 278 }}
            >
              {/* Image */}
              <div className="w-full h-32 bg-gray-300 rounded-t-lg" />

              {/* Body */}
              <div className="p-3 space-y-2">
                <div className="h-4 w-24 bg-gray-300 rounded" />
                <div className="h-3 w-20 bg-gray-300 rounded" />
                <div className="h-4 w-28 bg-gray-300 rounded" />

                <div className="border-t border-gray-200 my-2"></div>

                <div className="h-4 w-32 bg-gray-300 rounded" />
                <div className="h-3 w-28 bg-gray-300 rounded" />
              </div>
            </div>
          ))}

        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-6">
          <div className="h-4 w-40 bg-gray-300 rounded mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default PropertiesSectionShimmer;
