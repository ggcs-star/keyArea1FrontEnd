import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { IoCall } from 'react-icons/io5';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { infiniteVideos } from '../../../db';
import { projects } from '../../MainRoutes/BudgetwiseDetail/budgetwiseData';
import DropdownArrow from './DropdownArrow';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const locations = [
  'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar',
  'Jamnagar', 'Junagadh', 'Anand', 'Nadiad', 'Bharuch', 'Mehsana',
  'Valsad', 'Navsari', 'Patan', 'Porbandar', 'Amreli', 'Morbi', 'Palanpur'
];

const FilterModal = ({ onClose, currentReelIndex = 0 }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [budgetRange, setBudgetRange] = useState([0, 50000000]);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const modalRef = useRef(null);

  const currentReel = infiniteVideos[currentReelIndex] || infiniteVideos[0];

  // Find the corresponding project based on reel ID
  const project = projects.find(p => p.reel === currentReel.videoUrl) || projects[0];

  const filteredLocations = query === ''
    ? locations
    : locations.filter((location) =>
      location.toLowerCase().includes(query.toLowerCase())
    );

  const priceGrowthData = [
    { year: 2025, price: 0.85 },
    { year: 2026, price: 0.98 },
    { year: 2027, price: 1.10 },
    { year: 2028, price: 1.25 },
    { year: 2029, price: 1.38 },
    { year: 2030, price: 1.50 },
  ];

  const defaultAmenitiesList = [
    { name: 'CCTV Camera', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/cctv-camera.jpg' },
    { name: 'Gymnasium', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/gymnasium.jpg' },
    { name: 'Jogging and Strolling Tracks', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/jogging-strolling-tracks.jpg' },
    { name: 'Kids Play Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/kids-play-area.jpg' },
    { name: 'Meditation Area', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/meditation-area.jpg' },
    { name: 'Sports Facility', image: 'https://static.realestateindia.com/rei/mobile-images/aminities/sports-facility.jpg' },
  ];

  // Use project amenities if available, otherwise fall back to default
  const amenitiesList = Array.isArray(project?.amenities) && project.amenities.length > 0
    ? project.amenities
    : defaultAmenitiesList;

  const defaultProjectFeatures = [
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg", label: "Property Type", value: project?.type || "Builder Floor" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg", label: "Configuration", value: project?.type || "2, 2.5, 3, 3.5, 4 BHK" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg", label: "Pricing", value: project?.price || "16 Lac - 11.11 Cr." },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg", label: "Possession", value: "Dec 2026" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg", label: "Total Units", value: "795 units" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg", label: "Total Area", value: project?.area || "8.71 acres" },
    { icon: "https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg", label: "Possession Status", value: project?.status || "Upcoming Projects" }
  ];

  // Use project features if available, otherwise fall back to default
  const projectFeatures = Array.isArray(project?.projectFeatures) && project.projectFeatures.length > 0
    ? project.projectFeatures
    : defaultProjectFeatures;

  const handleWheel = (e) => {
    e.stopPropagation();
  };

  const handleBudgetChange = (event, newValue) => {
    setBudgetRange(newValue);
  };

  const formatBudget = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} L`;
    }
    return `₹${value}`;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setCurrentY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentY(e.clientY);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = currentY - startY;
    if (dragDistance > 100) { // If dragged down more than 100px
      handleClose();
    } else {
      setCurrentY(startY); // Reset position
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Prevent background scroll when modal is open
    document.body.style.overflow = 'hidden';

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Restore background scroll when modal is closed
      document.body.style.overflow = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDragging, currentY, startY]);

  const translateY = isDragging ? currentY - startY : 0;

  const navTabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'properties', label: 'Properties' },
    { id: 'price', label: 'Price Range' },
    { id: 'floorplan', label: 'Floor Plan' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'about', label: 'About Builder' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <div
      className="absolute inset-0 z-[9999] flex items-end justify-center"
      onWheel={e => { e.stopPropagation(); e.preventDefault(); }}
      onTouchMove={e => { e.stopPropagation(); e.preventDefault(); }}
    >
      <div
        ref={modalRef}
        className={`lg:my-8 relative w-full sm:w-[400px] inset-x-0 bottom-0 z-[10000] overflow-hidden rounded-t-3xl bg-white shadow-md transition-all duration-300 ease-in-out ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}
        style={{
          transform: isClosing ? 'translateY(100%)' : `translateY(${translateY}px)`,
          transition: isDragging ? 'none' : 'transform 300ms ease-in-out',
          height: '85vh'
        }}
      >
        <div
          className="flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <button className="mb-1 mt-2 h-2 w-12 rounded-md bg-primary"></button>
        </div>
        <div
          className="h-full max-h-[85dvh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-y"
          onWheel={e => { e.stopPropagation(); e.preventDefault(); }}
          onTouchMove={e => { e.stopPropagation(); e.preventDefault(); }}
        >
          <div className="mb-4 mt-1 rounded-t-2xl bg-primary px-2 pt-3 text-white">
            <div className="mx-4 flex flex-col items-start justify-start">
              <div className=" tracking-[120%] text-white justify-start text-start">
                <span className='text-xl font-axiSemiBold'>Project : </span>
                <span className='text-xl font-axiformaMedium'>{project?.name || currentReel?.product}</span>
              </div>
              <div className="text-md tracking-[120%] text-white py-3">
                <span className='text-xl font-axiSemiBold'>Location :</span> <br /> {project?.location || currentReel?.location}</div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="px-4 py-2 bg-gray-100">
            <div className="flex overflow-x-auto gap-2 hide-scrollbar">
              {navTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`whitespace-nowrap px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pb-9 px-4">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="pt-4">
                <div className="text-xl mb-4 font-axiSemiBold tracking-[140%] text-black">Project Overview</div>
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <ul className="grid grid-cols-1 gap-3 p-4">
                    {projectFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <img loading="lazy" decoding="async" src={feature.icon} width="24" height="24" alt={feature.label} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500">{feature.label}</p>
                          <p className="font-semibold text-sm text-gray-800">{feature.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {projectFeatures === defaultProjectFeatures && (
                  <p className="text-xs text-gray-500 mt-4 italic">
                    *Sample project features shown. Actual details may vary by project.
                  </p>
                )}
              </div>
            )}

            {/* Properties Tab */}
            {activeTab === 'properties' && (
              <div className="pt-4">
                <div className="text-xl mb-4 font-axiSemiBold tracking-[140%] text-black">
                  Properties in {project?.name || 'Project'}
                </div>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">{project?.type || '2, 3, 4 BHK Flats'}</h4>
                        <p className="text-sm text-gray-600">{project?.area || '1000 - 2000 Sq.ft.'}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{project?.price || '₹80 Lac - 1 Cr.'}</p>
                        <p className="text-xs text-gray-500">{project?.status || 'Upcoming Projects'}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Location: {project?.location}</span>
                      <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Price Range Tab */}
            {activeTab === 'price' && (
              <div className="pt-4">
                <div className="text-xl mb-4 font-axiSemiBold tracking-[140%] text-black">Price Range</div>
                <div className="bg-white p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Year-wise Price Growth</h3>
                  <div className="h-64">
                    <Line
                      data={{
                        labels: priceGrowthData.map(d => d.year),
                        datasets: [
                          {
                            label: 'Price (Cr.)',
                            data: priceGrowthData.map(d => d.price),
                            borderColor: '#3980db',
                            backgroundColor: 'rgba(255, 115, 72, 0.15)',
                            tension: 0.4,
                            fill: true,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: false },
                          title: { display: false },
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            ticks: {
                              callback: value => `₹ ${value} Cr.`
                            }
                          }
                        }
                      }}
                    />
                   
                  </div>

                </div>
              </div>
            )}

            {/* Floor Plan Tab */}
            {activeTab === 'floorplan' && (
              <div className="pt-4">
                <div className="text-xl mb-4 font-axiSemiBold tracking-[140%] text-black">Floor Plan</div>
                <div className="space-y-4">
                  {(project?.floorPlans || [{ imgThumb: 'https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-350x350.jpg', title: '2 BHK 1138 Sq.ft.' }]).map((plan, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={plan.imgThumb}
                        alt={plan.title}
                        className="w-full h-auto"
                      />
                      <div className="p-4">
                        <p className="font-semibold text-gray-800">{plan.title}</p>
                        <p className="text-sm text-gray-600">Super Built-up Area</p>
                      </div>
                    </div>
                  ))}
                  {(!project?.floorPlans || project.floorPlans.length === 0) && (
                    <p className="text-xs text-gray-500 mt-4 italic">
                      *Sample floor plan shown. Actual plans may vary by project.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <div className="pt-4">
                <div className="text-xl mb-4 font-axiSemiBold tracking-[140%] text-black">Amenities</div>
                <div className="grid grid-cols-2 gap-4">
                  {amenitiesList.slice(0, showAllAmenities ? amenitiesList.length : 6).map((amenity, idx) => (
                    <div key={amenity.name} className="flex flex-col items-center gap-2 p-3 border border-gray-200 rounded-lg">
                      <img src={amenity.image} alt={amenity.name} className="w-12 h-12 object-cover rounded" />
                      <p className="text-sm text-center font-medium">{amenity.name}</p>
                    </div>
                  ))}
                </div>
                {amenitiesList.length > 6 && (
                  <button
                    onClick={() => setShowAllAmenities(!showAllAmenities)}
                    className="mt-4 w-full bg-primary text-white py-2 rounded-lg font-medium"
                  >
                    {showAllAmenities ? 'Show Less' : 'Show All Amenities'}
                  </button>
                )}
                {amenitiesList === defaultAmenitiesList && (
                  <p className="text-xs text-gray-500 mt-4 italic">
                    *Sample amenities shown. Actual amenities may vary by project.
                  </p>
                )}
              </div>
            )}

            {/* About Builder Tab */}
            {activeTab === 'about' && (
              <div className="pt-4">
                <div className="text-xl mb-4 font-axiSemiBold tracking-[140%] text-black">About Builder</div>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">About {project?.name || 'Project'}</h3>
                    {(() => {
                      const defaultAbout = `One of the most reputable multinational real estate companies, M3M has worked in this industry for more than a decade. When it comes to successfully delivering high-quality real estate projects in a variety of locations across the nation, the Group has an excellent track record. Residential, commercial, IT/SEZ, educational, and entertainment areas make up the majority of its projects.`;

                      const aboutContent = project?.aboutBuilder || defaultAbout;
                      const processedContent = aboutContent.replace(/\{propertyname\}/g, project?.name || 'Project');
                      const isDefault = !project?.aboutBuilder;

                      // Split content into paragraphs and render
                      const paragraphs = processedContent.split('\n\n');

                      return (
                        <>
                          {paragraphs.slice(0, 2).map((paragraph, index) => (
                            <p key={index} className="text-sm text-gray-600 leading-relaxed mb-3">
                              {paragraph}
                            </p>
                          ))}
                          {paragraphs.length > 2 && (
                            <div className="mt-4">
                              <h4 className="font-semibold text-gray-800 mb-2">
                                {paragraphs[2] || 'Highlights'}
                              </h4>
                              {paragraphs.slice(3).map((paragraph, index) => (
                                <div key={index} className="text-sm text-gray-600 mb-2">
                                  {paragraph.split('\n').map((line, lineIndex) => (
                                    <div key={lineIndex}>
                                      {line.startsWith('- ') ? (
                                        <div className="ml-2">• {line.substring(2)}</div>
                                      ) : line ? (
                                        <div className={lineIndex === 0 ? 'font-medium mb-1' : ''}>{line}</div>
                                      ) : null}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                          {isDefault && (
                            <p className="text-xs text-gray-500 mt-4 italic">
                              *Sample project information shown. Actual details may vary by project.
                            </p>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )}

            {/* Location Tab */}
            {activeTab === 'location' && (
              <div className="pt-4">
                <div className="text-xl mb-4 font-axiSemiBold tracking-[140%] text-black">
                  Location Map of {project?.name || 'Project'}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    loading="lazy"
                    style={{ border: 'none' }}
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAN_m_CqOOtgmiF9crPBw9oSbiFBPNwn5o&q=${encodeURIComponent((project?.name || 'Project') + ', ' + (project?.location || 'Gujarat, India'))}`}
                    width="100%"
                    height="250"
                    frameBorder="0"
                    allowFullScreen=""
                    title={`Location Map of ${project?.name || 'Project'}`}
                  ></iframe>
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Location Advantages</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Educational Institutions nearby</li>
                    <li>• Easy connectivity from major roads</li>
                    <li>• Surrounded by natural beauty</li>
                    <li>• Close to commercial hubs</li>
                    <li>• Well-connected to transportation</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Contact Us Section */}
            <div className="mt-6 mb-14">
              <div className="text-xl font-axiSemiBold tracking-[140%] text-text-black mb-2">Contact Us</div>
              <div className="text-md font-axiformaMedium flex items-center gap-2 text-gray-600">
                <IoCall className="text-lg text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors duration-200">
                  <span>+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="absolute inset-x-0 bottom-2 mx-4 rounded-lg bg-primary px-5 py-3 text-sm font-bold tracking-[150%] text-white cursor-pointer">
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default FilterModal; 