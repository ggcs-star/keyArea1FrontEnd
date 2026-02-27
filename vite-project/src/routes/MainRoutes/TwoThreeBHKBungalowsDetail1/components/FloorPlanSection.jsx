import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import styles for the lightbox

const DEFAULT_FLOOR_PLANS = [
  {
    imgThumb: 'https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-350x350.jpg',
    imgFull: 'https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-770x400.jpg',
    title: '2 BHK 1138 Sq.ft.'
  }
];

const FloorPlanSection = ({ refProp, project, showThumbnails = true }) => {
  const floorPlans = Array.isArray(project?.floorPlans) && project.floorPlans.length > 0
    ? project.floorPlans
    : DEFAULT_FLOOR_PLANS;

  const isDefault = floorPlans === DEFAULT_FLOOR_PLANS;

  const [openIndex, setOpenIndex] = useState(-1); // State for managing the lightbox open/close

  const handleImageClick = (index) => {
    setOpenIndex(index); // Open the lightbox with the clicked image
  };

  const closeLightbox = () => {
    setOpenIndex(-1); // Close the lightbox
  };

  return (
    <section className="pd-sec bsas border-1 border-gray-300 p-4 my-8" id="pdFloorPlan" ref={refProp}>
      <div className="pd-sec-title">
        <h2>Plan</h2>
      </div>

      <div className="pds-body">
        {showThumbnails && (
          <ul className="fp-img-list grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {floorPlans.map((plan, index) => (
              <li key={index}>
                <div className="fp-img mb-2">
                  <img
                    src={plan.imgThumb}
                    width="350"
                    height="193"
                    alt={plan.title}
                    loading="lazy"
                    style={{ cursor: 'pointer' }} // Cursor change to indicate clickable
                    onClick={() => handleImageClick(index)} // Trigger lightbox
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        {isDefault && (
          <p className="text-xs text-gray-500 mt-4 italic">
            *Sample floor plan shown. Actual plans may vary by project.
          </p>
        )}
      </div>

      {/* Lightbox for images */}
      <Lightbox
        open={openIndex !== -1} // Check if the lightbox should be open
        close={closeLightbox} // Function to close the lightbox
        slides={floorPlans.map((plan) => ({
          src: plan.imgFull, // Full image path
          thumbnail: plan.imgThumb, // Thumbnail image path
          title: plan.title // Image title
        }))} 
        index={openIndex} // Set the currently selected image in the lightbox
      />
    </section>
  );
};

export default FloorPlanSection;
