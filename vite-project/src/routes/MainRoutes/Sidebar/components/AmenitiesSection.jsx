import React from 'react';

const AmenitiesSection = ({ refProp, showAllAmenities, setShowAllAmenities }) => (
  <section className="pd-sec bsas border-1 border-gray-300 p-4 my-8" id="pdAminities" ref={refProp}>
    <div className="pd-sec-title"><h2>Amenities</h2></div>
    <ul className="pd-Aamenities-list">
      <li><div className="aminities"><p>CCTV Camera</p></div></li>
      <li><div className="aminities"><p>Gymnasium</p></div></li>
      <li><div className="aminities"><p>Jogging and Strolling Tracks</p></div></li>
      {showAllAmenities && (
        <>
          <li><div className="aminities"><p>Kids Play Area</p></div></li>
          <li><div className="aminities"><p>Meditation Area</p></div></li>
          <li><div className="aminities"><p>Sports Facility</p></div></li>
        </>
      )}
    </ul>
    <button onClick={() => setShowAllAmenities(!showAllAmenities)} className="btn-vmo-logn">
      {showAllAmenities ? 'Show Less' : 'Show All'}
    </button>
  </section>
);

export default AmenitiesSection; 