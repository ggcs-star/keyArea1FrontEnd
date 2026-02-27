import React, { useState } from 'react';

const DEFAULT_ABOUT_BUILDER = `One of the most reputable multinational real estate companies, M3M has worked in this industry for more than a decade. When it comes to successfully delivering high-quality real estate projects in a variety of locations across the nation, the Group has an excellent track record. Residential, commercial, IT/SEZ, educational, and entertainment areas make up the majority of its projects. {propertyname} offers fully developed projects like {propertyname} in Sector 79, Gurgaon, which are benchmarks in the Indian residential real estate market.

Highlights

Help yourself with the amenities you deserve

It is offered for sale in a variety of layouts, including a low-rise apartment with two or three bedrooms and ultramodern, opulent amenities for everyone.

Location Advantages

- Educational Institutions like L.S. Convent School, Navyug Little Pride, UCSKM Public School, Ryan International School, The Plenum School, Jai Bharti Sr. Secondary School, Matri Kiran, etc. are nearby.
- Easy and smooth connectivity from NH-8, Southern Peripheral Road, Dwarka Expressway, KMP Expressway and IGI Airport.
- Surrounded by the Aravalli foothills.
- Next to huge commercial hubs (Sector-74A and 75A, Gurugram).
- 30 minutes from IGI Airport.
- Upcoming ISBT is nearby (Kherki Daula).`;

const AboutBuilderSection = ({ project = {}, refProp }) => {
  const [expanded, setExpanded] = useState(false);
  const propertyName = project?.name || 'M3M Antalya Hills';
  const founderDetails = project?.founderDetails || 'M3M Antalya Hills';
  const aboutBuilderRaw = project?.aboutBuilder || DEFAULT_ABOUT_BUILDER;
  const aboutBuilder = aboutBuilderRaw.replace(/\{propertyname\}/g, propertyName);

  const isDefault = aboutBuilderRaw === DEFAULT_ABOUT_BUILDER;

  // Section headings to make bold
  const boldHeadings = [
    'Highlights',
    'Location Advantages',
    'Project Highlights',
    'Premium Location & Connectivity',
    'Modern Amenities & Features',
    'Investment Opportunity',
    'Help yourself with the amenities you deserve',
  ];

  const renderFormattedParagraph = (text) => {
    const trimmed = text.trim();
    if (boldHeadings.includes(trimmed)) {
      return (
        <p className="font-bold mb-2" style={{ textAlign: 'justify' }}>
          {trimmed}
        </p>
      );
    }
    return (
      <p className="mb-2" style={{ textAlign: 'justify' }}>
        {text}
      </p>
    );
  };

  return (
    <section className="pd-sec bsas border-1 border-gray-300 p-4" id="pdAboutBuilder" ref={refProp}>
      <div className="pd-sec-title">
        <h2>About {propertyName}</h2>
      </div>
      <div className="d-height relative">
        <div className="about-p">
          <p>
            {aboutBuilder.split('\n\n')[0]}
            {!expanded && aboutBuilder.split('\n\n').length > 1 && (
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
                  <div className="flex gap-2 items-center">
                    <h3 className="dhm-title text-lg font-bold">About {propertyName}</h3>
                    <button className="border-1 border-black p-2 rounded-lg">{founderDetails}</button>
                  </div>
                  <button
                    className="dhm-close text-2xl font-bold text-gray-500 hover:text-primary"
                    onClick={() => setExpanded(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="dhm-body flex-1 overflow-y-auto scrollbar-none hide-scrollbar">
                  <p className="text-xs uppercase">DEVELOPED BY</p>
                  <p className="text-lg mb-2 font-semibold">{founderDetails}</p>
                  <div className="taj">
                    {aboutBuilder.split('\n\n').map((para, idx) => (
                      <div key={idx}>{renderFormattedParagraph(para)}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {isDefault && (
        <p className="text-xs text-gray-500 mt-4 italic">
          *Sample project information shown. Actual details may vary by project.
        </p>
      )}
    </section>
  );
};

export default AboutBuilderSection;
