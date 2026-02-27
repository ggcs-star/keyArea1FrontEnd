import React from "react";

const BlockBookingDetailsTable = ({ bookings }) => {
  if (!Array.isArray(bookings) || bookings.length === 0) return null;

  return (
    <div className="mt-10 shadow-md rounded-lg border border-gray-300">
      {/* Fixed Heading - not scrollable */}
      <h3 className="bg-red-500 text-white px-5 py-3 text-lg font-semibold rounded-t-md">
        Block Booking Details
      </h3>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left bg-white">
          <thead className="bg-purple-100 text-gray-800">
            <tr className="text-xs sm:text-sm">
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">Sr.No.</th>
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">BLOCK NAME</th>
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">FLAT / OFFICE / PLOT NO.</th>
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">USAGE</th>
              {/* <th className="border px-3 py-2 font-semibold whitespace-nowrap">CARPET AREA<br />(Sq. Mts.)</th> */}
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">BALCONY / VERANDA / TERRACE<br />(Sq. Mts.)</th>
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">STATUS</th>
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">AGREEMENT DATE</th>
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">ENCUMBRANCE</th>
              <th className="border px-3 py-2 font-semibold whitespace-nowrap">REDEVELOPMENT</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="border px-3 py-2">{row.srNo || idx + 1}</td>
                <td className="border px-3 py-2">{row.block}</td>
                <td className="border px-3 py-2">{row.unitNumber}</td>
                <td className="border px-3 py-2">{row.usage}</td>
                {/* <td className="border px-3 py-2">{row.carpetArea}</td> */}
                <td className="border px-3 py-2">{row.balconyArea}</td>
                <td className="border px-3 py-2 font-semibold text-center">
                  <span className={row.status === "BOOKED" ? "text-red-600" : "text-green-600"}>
                    {row.status}
                  </span>
                </td>
                <td className="border px-3 py-2">{row.agreementDate || "-"}</td>
                <td className="border px-3 py-2">{row.encumbrance}</td>
                <td className="border px-3 py-2">{row.redevelopment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default BlockBookingDetailsTable;
