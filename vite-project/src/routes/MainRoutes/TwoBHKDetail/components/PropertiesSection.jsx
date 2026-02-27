import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';

const PropertiesSection = ({ project, refProp, bhkUnits = [], propertyName, totalSize }) => {
  const [activeTab, setActiveTab] = useState('buy');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInstanceRef, setSliderInstanceRef] = useState(null);

  // ✅ FIX: Always ensure bhkUnits is an array
  const properties = Array.isArray(bhkUnits) ? bhkUnits : [];

  const [sliderContainerRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 12 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      setSliderInstanceRef(s);
    },
  });

  const handlePrev = () => slideInstanceRef?.prev();
  const handleNext = () => slideInstanceRef?.next();

  return (
    <section
      id="pdPropertiesforSale"
      ref={refProp}
      className="scroll-mt-28 block text-[#333] text-[12px] leading-[1.5em] font-sans m-0 p-0 bg-white border-1 border-gray-300 mb-5"
    >
      <div className="pd-sec-title px-5 pt-5">
        <h2 className="text-lg font-semibold">
          Properties in <span className="font-bold">{propertyName || 'Project'}</span>
        </h2>
      </div>

      <div className="pds-body px-5 pb-5">
        <div className="pdpfs-tabs">
          <ul className="tabs-list flex gap-4 mb-4">
            <li
              className={`cursor-pointer px-4 py-2 rounded-t font-semibold ${
                activeTab === 'buy'
                  ? 'bg-white border-b-2 border-red-500 text-red-500'
                  : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => setActiveTab('buy')}
            >
              Buy
            </li>
          </ul>

          <div className="pdpfsr-container relative">
            <div className="pdpfs-tabs-content active" id="pdsTabContent">
              <div className="bg-[#f5f5f5] border-t border-[#ddd] mb-2"></div>

              {/* Show message if no properties */}
              {properties.length === 0 ? (
                <div className="text-center w-full py-8 text-gray-500">
                  No properties available for Buy.
                </div>
              ) : (
                <div className="relative flex items-center">

                  {/* Prev arrow */}
                  {properties.length > 3 && (
                    <button
                      onClick={handlePrev}
                      className="absolute left-[-12px] top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-primary hover:bg-primary hover:text-white rounded-full p-2 shadow-md transition"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  )}

                  <div ref={sliderContainerRef} className="keen-slider w-full">
                    {properties.map((unit, idx) => (
                      <div key={idx} className="keen-slider__slide px-2 py-4">
                        <div
                          className="bg-[#f0f6ff] border border-[#6cacff] rounded-lg shadow-lg mb-2"
                          style={{ minHeight: 278 }}
                        >
                          <div className="relative">
                            <img
                              src={project?.logo_image_id || 'https://via.placeholder.com/200'}
                              alt={unit.bhkType || 'Unit'}
                              className="rounded-t-lg w-full"
                              loading="lazy"
                            />
                            <div className="absolute top-2 right-2 bg-white/80 text-xs px-2 py-1 rounded">
                              {project.phase || 'N/A'}
                            </div>
                          </div>

                          <div className="p-3">
                            <p className="font-semibold text-sm">{unit.bhkType}</p>
                            {totalSize?.size && (
                              <p className="text-xs text-gray-500 mb-1">Size: {totalSize.size}</p>
                            )}
                            {unit.price && (
                              <p className="font-bold mb-2 text-gray-700">₹ {unit.price}</p>
                            )}

                            <div className="border-t border-gray-200 my-2"></div>

                            {project?.name && (
                              <p className="text-sm font-medium text-indigo-500 mb-1">{project.name}</p>
                            )}

                            <p className="text-gray-800 mb-2">
                              {project.location?.area && project.location.city
                                ? `${project.location.area}, ${project.location.city}`
                                : project.location?.area ||
                                  project.location?.city ||
                                  ''}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Next arrow */}
                  {properties.length > 3 && (
                    <button
                      onClick={handleNext}
                      className="absolute right-[-12px] top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-primary hover:bg-primary hover:text-white rounded-full p-2 shadow-md transition"
                      aria-label="Next Slide"
                    >
                      <ChevronRight size={20} />
                    </button>
                  )}
                </div>
              )}

              <div className="text-center mt-4">
                <a className="text-red-500 font-semibold hover:underline" href="#">
                  View all Properties for Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
