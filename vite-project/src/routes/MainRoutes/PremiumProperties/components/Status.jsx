import React, { useState } from 'react';
import { FaRegBuilding, FaChevronDown } from 'react-icons/fa';

const Status = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className=''>
    <section className="bg-blue-50 rounded-lg px-4 py-3 my-4 lg:w-full">
      <div className="w-full">
        {/* Collapsed Card */}
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <div className="flex flex-col gap-1">
            <div className="text-xs font-semibold text-blue-900 uppercase">Construction Status</div>
            <div className="text-lg font-bold text-blue-800">Under Construction</div>
          </div>
          <span className="ml-4">
            <FaChevronDown
              className={`w-6 h-6 text-blue-500 transition-transform duration-200 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </span>
        </div>

        {/* Expandable content */}
        {expanded && (
          <div className="mt-4">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
                <div className="flex items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-full sm:min-w-[250px]">
                  <FaRegBuilding className="text-blue-500 w-6 h-6 mr-3 shrink-0" />
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-800 font-semibold">
                      <div>1 Phase</div>
                      <div className="font-normal text-gray-600">is Under Construction</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Completion in Dec, 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </div>
  );
};

export default Status;
