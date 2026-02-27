import React, { useState } from 'react';

const AboutBuilderSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="pd-sec bsas border-1 border-gray-300 p-4" id="pdAboutBuilder">
      <div className="pd-sec-title">
        <h2>About M3M Antalya Hills</h2>
      </div>
      <div className="d-height relative">
        <div className="about-p">
          <p>
            One of the most reputable multinational real estate companies, M3M has worked in this industry for more than a decade. When it comes to successfully delivering high-quality real estate projects in a v
            {!expanded && (
              <button
                className="btn-dhrm goal_set_project_more text-primary underline ml-1"
                onClick={() => setExpanded(true)}
                type="button"
              >
                ...read more
              </button>
            )}
          </p>
        </div>
        {expanded && (
          <>
            <div className="dhm-overlay fixed inset-0 bg-black/50 z-40" onClick={() => setExpanded(false)}></div>
            <div
              className={`dhm-sec fixed top-0 right-0 h-full w-full max-w-4xl z-50 bg-white shadow-lg transition-transform duration-500 ease-in-out ${expanded ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <div className="dhm-inner h-full flex flex-col p-6 relative">
                <div className="dhm-heading flex items-center justify-between mb-4">
                  <h3 className="dhm-title text-lg font-bold">About M3M Antalya Hills</h3>
                  <button className="dhm-close text-2xl font-bold text-gray-500 hover:text-primary" onClick={() => setExpanded(false)}>&times;</button>
                </div>
                <div className="dhm-body flex-1 overflow-y-auto scrollbar-none hide-scrollbar">
                  <p className="strong font-semibold mb-2">About M3M Antalya Hills</p>
                  <div className="taj">
                    <p style={{ textAlign: 'justify' }}>
                      One of the most reputable multinational real estate companies, M3M has worked in this industry for more than a decade. When it comes to successfully delivering high-quality real estate projects in a variety of locations across the nation, the Group has an excellent track record. Residential, commercial, IT/SEZ, educational, and entertainment areas make up the majority of its projects. M3M India offers fully developed projects like M3M Antalya Hills in Sector 79, Gurgaon, which are benchmarks in the Indian residential real estate market.<br /><br />
                      <strong>Highlights</strong><br /><br />
                      <strong>Help yourself with the amenities you deserve</strong><br /><br />
                      It is offered for sale in a variety of layouts, including a low-rise apartment with two or three bedrooms and ultramodern, opulent amenities for everyone.<br /><br />
                      <strong>Location Advantages</strong>
                    </p>
                    <ul className="default list-disc pl-5 mt-2">
                      <li>Educational Institutions like L.S. Convent School, Navyug Little Pride, UCSKM Public School, Ryan International School, The Plenum School, Jai Bharti Sr. Secondary School, Matri Kiran, etc. are nearby.</li>
                      <li>Easy and smooth connectivity from NH-8, Southern Peripheral Road, Dwarka Expressway, KMP Expressway and IGI Airport.</li>
                      <li>Surrounded by the Aravalli foothills.</li>
                      <li>Next to huge commercial hubs (Sector-74A and 75A, Gurugram).</li>
                      <li>30 minutes from IGI Airport.</li>
                      <li>Upcoming ISBT is nearby (Kherki Daula).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AboutBuilderSection; 