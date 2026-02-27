import React, { useState, useMemo, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import blockAImage from '../../../../assets/properties/devkunj/13.png';
import blockBImage from '../../../../assets/properties/devkunj/13.png';

const BLOCK_IMAGES = {
  A: blockAImage,
  B: blockBImage,
};

const STATUS_COLORS = {
  booked: 'bg-red-600',
  unbooked: 'bg-green-600',
  available: 'bg-green-600',
};

const STATUS_TEXT = {
  booked: 'Booked',
  unbooked: 'Available',
  available: 'Available',
};

function normalizeStatus(status) {
  const s = (status || '').toLowerCase();
  if (s === 'booked') return 'booked';
  return 'unbooked';
}

function getGroupTotals(units) {
  let booked = 0,
    unbooked = 0;
  units.forEach((unit) => {
    if (normalizeStatus(unit.status) === 'booked') booked++;
    else unbooked++;
  });
  return { booked, unbooked };
}

const UnitBookingDashboard = ({ apiData, projectName, isLoading = false, error = null }) => {
  // Hooks should always run — even if data is missing.
  const blocks = apiData?.blocks || [];
  const [selectedBlock, setSelectedBlock] = useState(() => blocks[0]?.block || null);

  // Memoized selection logic
  const selectedBlockData = useMemo(
    () => blocks.find((b) => b.block === selectedBlock),
    [blocks, selectedBlock]
  );

  const selectedUnits = selectedBlockData?.units || [];
  const submittedOn = selectedBlockData?.submitted_on || null;
  const block = selectedBlockData?.block || '';

  // Tooltip custom theme setup (runs only once)
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .tippy-box[data-theme~='modern-purple'] {
        background-color: #7c3aed;
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -4px rgba(0,0,0,0.2);
        padding: 0;
      }
      .tippy-box[data-theme~='modern-purple'] .tippy-content {
        padding: 0;
      }
      .tippy-box[data-theme~='modern-purple'][data-placement^='bottom'] > .tippy-arrow::before {
        border-bottom-color: #7c3aed;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // ✅ Return logic AFTER all hooks
  if (isLoading) {
    return (
      <section className="my-8 text-center text-gray-600">
        <p>Loading unit booking data...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-8 text-center text-red-600">
        <p>Error: {error}</p>
      </section>
    );
  }

  if (!blocks.length) {
    return (
      <section className="my-8 text-center text-gray-600">
        <p>No blocks or units found.</p>
      </section>
    );
  }

  return (
    <section className="my-8 px-2 sm:px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Unit Wise Booking Status at <span className="text-purple-600">{projectName}</span>
        </h2>
      </div>

      {/* Block Selector Grid */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {blocks.map((blockData) => {
          const { block: name, total_units, units } = blockData;
          const { booked, unbooked } = getGroupTotals(units);
          const isSelected = selectedBlock === name;

          return (
            <div
              key={name}
              className={`relative rounded-xl px-5 py-4 w-40 text-center shadow-md cursor-pointer transition-all transform hover:scale-105 ${
                isSelected ? 'ring-4 ring-purple-400 bg-purple-50' : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => setSelectedBlock(name)}
            >
              <h3 className="font-semibold text-lg mb-1">{name}</h3>
              <div className="text-xs text-gray-500 mb-2">Units: {total_units}</div>
              <div className="flex justify-center items-center gap-2">
                <span
                  className={`${STATUS_COLORS.unbooked} text-white w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold shadow-sm`}
                  title="Available Units"
                >
                  {unbooked}
                </span>
                {/* <span
                  className={`${STATUS_COLORS.booked} text-white w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold shadow-sm`}
                  title="Booked Units"
                >
                  {booked}
                </span> */}
              </div>
              {isSelected && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white font-bold shadow">
                  ✓
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Block Units */}
      {selectedUnits.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-t-lg text-white px-5 py-3 flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Block {block} - {selectedUnits.length} Units
            </h3>
            {submittedOn && (
              <span className="text-sm font-medium opacity-90">
                Submitted On: {new Date(submittedOn).toLocaleDateString()}
              </span>
            )}
          </div>

          <div className="bg-gray-50 border border-purple-100 rounded-b-lg p-4 flex flex-wrap gap-3 justify-center shadow-inner">
            {selectedUnits.map((unit, idx) => {
              const status = normalizeStatus(unit.status);
              const colorClass = STATUS_COLORS[status];
              const tooltipTitle = STATUS_TEXT[status];
              const imageSrc = BLOCK_IMAGES[block] || Object.values(BLOCK_IMAGES)[0];

              return (
                <Tippy
                  key={idx}
                  animation="scale"
                  placement="top"
                  theme="modern-purple"
                  content={
                    <div className="w-52">
                      <img
                        src={imageSrc}
                        alt={`${block} Unit ${unit.number}`}
                        className="w-full h-36 object-cover rounded-t"
                      />
                      <div className="p-2 bg-purple-700 text-white text-center text-sm font-medium">
                        Unit {unit.number} • {tooltipTitle}
                      </div>
                    </div>
                  }
                >
                  <div
                    className={`${colorClass} w-12 h-12 flex items-center justify-center rounded-lg text-white font-bold text-sm shadow cursor-pointer hover:shadow-md transition-all`}
                    title={`Unit ${unit.number} - ${tooltipTitle}`}
                  >
                    {unit.number}
                  </div>
                </Tippy>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-6">
          <p>No units found for selected block.</p>
        </div>
      )}
    </section>
  );
};

export default UnitBookingDashboard;
