import React from 'react';

const DEFAULT_AMENITIES = [
  { name: 'CCTV Camera', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/cctv-camera.jpg' },
  { name: 'Gymnasium', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/gymnasium.jpg' },
  { name: 'Jogging and Strolling Tracks', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/jogging-strolling-tracks.jpg' },
  { name: 'Kids Play Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/kids-play-area.jpg' },
  { name: 'Meditation Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/meditation-area.jpg' },
  { name: 'Sports Facility', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/sports-facility.jpg' },
];

const AmenitiesSection = ({ refProp, project }) => {
  const amenitiesList = Array.isArray(project?.amenities) && project.amenities.length > 0
    ? project.amenities
    : DEFAULT_AMENITIES;

  const isDefault = amenitiesList === DEFAULT_AMENITIES;

  return (
    <section className="scroll-mt-28 pd-sec bsas border-1 border-gray-300 p-4 mt-8" id="pdAminities" ref={refProp}>
      <div className="pd-sec-title"><h2>Amenities</h2></div>
      <ul className="grid gap-4 list-none p-0 [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] sm:[grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
        {amenitiesList.map((am) => (
          <li key={am.name} className="flex flex-col items-center gap-2">
            <img src={am.image} alt={am.name} className="w-12 h-12 object-cover rounded" />
            <div className="text-center"><p>{am.name}</p></div>
          </li>
        ))}
      </ul>


      {isDefault && (
        <p className="text-xs text-gray-500 mt-4 italic">
          *Sample amenities shown. Actual amenities may vary by project.
        </p>
      )}
    </section>
  );
};

export default AmenitiesSection;
