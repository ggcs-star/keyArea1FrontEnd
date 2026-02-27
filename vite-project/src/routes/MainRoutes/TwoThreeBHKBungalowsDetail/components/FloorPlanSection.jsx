import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const FALLBACK_IMAGE =
  "https://via.placeholder.com/800x500?text=No+Image";

const FloorPlanSection = ({ refProp, floorPlans = [], showThumbnails = true }) => {
  const hasPlans = Array.isArray(floorPlans) && floorPlans.length > 0;

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      className="pd-sec bsas border border-gray-300 p-4 mt-8 rounded-lg"
      id="pdFloorPlan"
      ref={refProp}
    >
      <div className="pd-sec-title mb-3">
        <h2 className="text-xl font-semibold">Floor Plan</h2>
      </div>

      <div className="pds-body">
        {showThumbnails && hasPlans ? (
          <ul className="fp-img-list grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {floorPlans.map((plan, index) => {
              const img = plan?.imgFull || FALLBACK_IMAGE;

              return (
                <li key={index}>
                  <div className="fp-img mb-2">
                    <img
                      src={img}
                      alt={plan.title || `Floor Plan ${index + 1}`}
                      className="w-full h-auto rounded shadow cursor-pointer"
                      loading="lazy"
                      onClick={() => setOpenIndex(index)}
                    />
                  </div>

                  {plan.title && (
                    <p className="text-sm text-gray-700">{plan.title}</p>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-xs text-gray-500 italic mt-4">
            *No floor plans available for this project.
          </p>
        )}
      </div>

      <Lightbox
        open={openIndex !== -1}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={floorPlans.map((plan, i) => ({
          src: plan.imgFull || FALLBACK_IMAGE,
          title: plan.title || `Floor Plan ${i + 1}`,
        }))}
      />
    </section>
  );
};

export default FloorPlanSection;
