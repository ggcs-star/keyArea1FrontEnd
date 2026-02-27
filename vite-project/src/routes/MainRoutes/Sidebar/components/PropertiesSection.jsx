import React, { useState, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';

const PropertiesSection = ({ refProp, buyProperties = [], rentProperties = [] }) => {
  const [activeTab, setActiveTab] = useState('buy');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInstanceRef, setSliderInstanceRef] = useState(null);

  const properties = activeTab === 'buy' ? buyProperties : rentProperties;

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

  const handlePrev = () => {
    if (sliderInstanceRef) sliderInstanceRef.prev();
  };
  const handleNext = () => {
    if (sliderInstanceRef) sliderInstanceRef.next();
  };

  return (
    <section
      className="block text-[#333] text-[12px] leading-[1.5em] font-sans m-0 p-0 bg-white border-1 border-gray-300 mb-5"
      style={{ fontFamily: "'Roboto', 'Open Sans', sans-serif" }}
      id="pdPropertiesforSale"
      ref={refProp}
    >
      <div className="pd-sec-title px-5 pt-5">
        <h2 className="text-lg font-semibold">
          Properties in <span className="font-bold">M3M Antalya Hills</span>
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
            <li
              className={`cursor-pointer px-4 py-2 rounded-t font-semibold ${
                activeTab === 'rent'
                  ? 'bg-white border-b-2 border-red-500 text-red-500'
                  : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => setActiveTab('rent')}
            >
              Rent
            </li>
          </ul>
          <div className="pdpfsr-container relative">
            <div className="pdpfs-tabs-content active" id="pdsTabContent">
              <div className="bg-[#f5f5f5] border-t border-[#ddd] mb-2"></div>
              {properties.length === 0 ? (
                <div className="text-center w-full py-8 text-gray-500">
                  No properties available for {activeTab === 'buy' ? 'Buy' : 'Rent'}.
                </div>
              ) : (
                <div className="relative flex items-center">
                  <button
                    onClick={handlePrev}
                    className="absolute left-[-12px] top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-primary hover:bg-primary hover:text-white rounded-full p-2 shadow-md transition duration-200 ease-in-out z-20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div ref={sliderContainerRef} className="keen-slider w-full">
                    {properties.map((prop, idx) => (
                      <div
                        key={idx}
                        className="keen-slider__slide px-2 py-4"
                        style={{ minWidth: 0 }}
                      >
                        <div
                          className="bg-[#f0f6ff] h-[335px] border border-[#6cacff] rounded-lg flex-shrink-0 mb-2 shadow-lg"
                          style={{ minHeight: 278 }}
                        >
                          <div className="relative">
                            <img
                              src={prop.img}
                              width={200}
                              height={112}
                              alt=""
                              className="rounded-t-lg w-full"
                              loading="lazy"
                            />
                            <div className="absolute top-2 right-2 bg-white/80 text-xs px-2 py-1 rounded">
                              {prop.date}
                            </div>
                          </div>
                          <div className="p-3">
                            <p className="font-semibold text-sm mb-1">
                              <a
                                href={prop.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {prop.title}
                              </a>
                            </p>
                            <p className="text-xs text-gray-500 mb-1">{prop.size}</p>
                            <p className="price text-gray-500 font-bold mb-2">
                              <b className="fa fa-inr"></b> <span>{prop.price}</span>
                            </p>
                            <div className="border-t border-gray-200 my-2"></div>
                            <div className="flex flex-col gap-1">
                              <a
                                href={prop.agency.url}
                                target="_blank"
                                className="text-xs font-semibold text-blue-700 hover:underline"
                              >
                                {prop.agency.name}
                              </a>
                              <p className="text-xs text-gray-500">{prop.agency.location}</p>
                            </div>
                            <a
                              href={prop.url}
                              target="_blank"
                              className="mt-2 inline-block bg-[#A44CEE] text-white text-xs font-semibold rounded px-4 py-1 hover:bg-[#7c2ae8] transition"
                            >
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className="absolute right-[-12px] top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-primary hover:bg-primary hover:text-white rounded-full p-2 shadow-md transition duration-200 ease-in-out z-20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
              <div className="text-center mt-4">
                <a
                  href="https://www.realestateindia.com/gurgaon-property/m3m-antalya-hills-for-sale-in-sector-79-gurgaon-40869-ffpp.htm"
                  target="_blank"
                  className="text-red-500 font-semibold hover:underline"
                >
                  View all Properties for Sale
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