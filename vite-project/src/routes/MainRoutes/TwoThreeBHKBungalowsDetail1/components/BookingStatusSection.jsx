import React, { useState } from 'react';
import UnitBookingStatusSection from './UnitBookingStatusSection';

const STATUS_COLORS = {
  booked: 'bg-red-600 text-white',
  unbooked: 'bg-green-600 text-white',
};

// Helper to group flat blockBookingDetails array by block
function groupByBlock(blockBookingDetails) {
  if (!Array.isArray(blockBookingDetails)) return [];
  const groups = {};
  blockBookingDetails.forEach(unit => {
    const block = unit.block;
    if (!groups[block]) {
      groups[block] = {
        name: block,
        highlight: false,
        slots: [],
      };
    }
    groups[block].slots.push({
      number: unit.unitNumber,
      status: unit.status ? unit.status.toLowerCase() : 'unbooked',
      ...unit,
    });
  });
  return Object.values(groups);
}

// Helper to count booked/unbooked
function getBookingTotals(blockBookingDetails) {
  let booked = 0,
    unbooked = 0;
  if (Array.isArray(blockBookingDetails)) {
    blockBookingDetails.forEach(unit => {
      const status = (unit.status || '').toLowerCase();
      if (status === 'booked') booked++;
      else unbooked++;
    });
  }
  return { booked, unbooked };
}

// Helper to count booked/unbooked for a group
function getGroupTotals(slots) {
  let booked = 0,
    unbooked = 0;
  slots.forEach(slot => {
    if (slot.status === 'BOOKED') booked++;
    else unbooked++;
  });
  return { booked, unbooked };
}

const BookingStatusSection = ({ project, units = [] }) => {
  const blockBookingDetails = project?.blockBookingDetails || [];
  const submittedOn = project?.unitBookingStatus?.submittedOn || 'N/A';
  const unitsOfA = project?.unitBookingStatus?.unitsOfA || 'N/A';
  const unitsOfB = project?.unitBookingStatus?.unitsOfB || 'N/A';

  const grouped = groupByBlock(blockBookingDetails);
  const totals = getBookingTotals(blockBookingDetails);

  const bookedCount = units.filter(u => (u.status || '').toLowerCase() === "booked").length;
  const unbookedCount = units.filter(u => (u.status || '').toLowerCase() !== "booked").length;

  // ✅ Safe lazy initializer for selected block
  const [selectedBlock, setSelectedBlock] = useState(() =>
    grouped.length > 0 ? grouped[0].name : null
  );

  // ✅ Protect against empty data
  if (!grouped.length) return null;

  const selectedGroup = grouped.find(g => g.name === selectedBlock);

  return (
    <section className="my-8">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">Unit Wise Booking at {project.name}</h2>
      </div>

      {/* Legend */}
      {/* <div className="flex justify-center gap-6 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-600 inline-block" />
          <span>Unbooked</span>
        </div>
      </div> */}

      {/* Totals */}
      {/* <div className="flex justify-center gap-8 mb-4 text-base font-semibold">
        <span className="flex items-center gap-2 text-red-700">
          <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
          Total Booked: {totals.booked}
        </span>
        <span className="flex items-center gap-2 text-green-700">
          <span className="w-3 h-3 rounded-full bg-green-600 inline-block" />
          Total Unbooked: {totals.unbooked}
        </span>
      </div> */}

      {/* <div className="flex justify-center gap-8 mb-4 text-base font-semibold">
        <span className="flex items-center gap-2 text-red-700">
          <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
          Total Booked: {totals.booked}
        </span>
        <span className="flex items-center gap-2 text-green-700">
          <span className="w-3 h-3 rounded-full bg-green-600 inline-block" />
          Total Unbooked: {totals.unbooked}
        </span>
      </div> */}

      {/* Block Selector Grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {grouped.map((group, index) => {
          const groupTotals = getGroupTotals(group.slots);
          const isSelected = selectedBlock === group.name;
          return (
            <div
              key={index}
              className={`rounded-xl px-4 py-4 w-40 text-center shadow cursor-pointer transition 
                ${group.highlight ? 'bg-orange-300' : 'bg-gray-200'} 
                ${isSelected ? 'ring-2 ring-purple-500' : ''}`}
              onClick={() => setSelectedBlock(group.name)}
            >
              <h3 className="font-medium mb-3 text-lg">{group.name}</h3>
              <div className="flex justify-center gap-2 mb-2 text-xs font-semibold">
                {/* <span className="flex items-center gap-1 text-white bg-red-700 text-xl w-8 h-8 text-center justify-center rounded-xl">
                  {groupTotals.booked}
                </span> */}
                <span className="flex items-center gap-1 text-white bg-green-700 text-xl w-8 h-8 text-center justify-center rounded-xl">
                  {groupTotals.unbooked}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Block's Units */}
      {selectedGroup && (
        <div className="mt-8">
          <UnitBookingStatusSection
            blockName={selectedGroup.name}
            units={selectedGroup.slots}
            submittedOn={submittedOn}
            unitsOfA={unitsOfA}
            unitsOfB={unitsOfB}
          />
        </div>
      )}
    </section>
  );
};

export default BookingStatusSection;
