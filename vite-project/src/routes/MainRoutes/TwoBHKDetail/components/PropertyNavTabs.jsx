import React from 'react';

const navTabs = [
  { id: 'overview', label: 'Overview', href: '#pdOverview' },
  { id: 'sale', label: 'Property for Sale / Rent', href: '#pdPropertiesforSale' },
    { id: 'floorplan', label: 'Floor Plan', href: '#pdFloorPlan' },       // FIXED
  { id: 'pricerange', label: 'Price Range', href: '#pdPriceRange' },   // FIXED
  { id: 'amenities', label: 'Amenities', href: '#pdAminities' },
  { id: 'promoterDetails', label: 'Promoter Details', href: '#pdPromoterDetails' }, // FIXED
];


const PropertyNavTabs = ({ activeTab, handleTabClick }) => (
  <div
    className="
      sticky top-18           /* Stick inside parent */
      z-30
      bg-[#ececec]
      px-5 lg:px-2 rounded border border-[#ccc] mb-[15px]
      transition-all duration-300 ease-in-out
      text-[#333] text-[12px] leading-[1.5em] font-sans
    "
  >
    <div className="fw">
      <ul className="
        pdp-nav flex flex-nowrap lg:flex-wrap items-center 
        gap-2 text-[15px]
        list-none p-0 m-0
        overflow-x-auto whitespace-nowrap 
        -mx-4 px-4 hide-scrollbar
      ">
        {navTabs.map(tab => (
          <li key={tab.id} className={activeTab === tab.id ? 'active' : ''}>
            <a
              href={tab.href}
              onClick={() => handleTabClick(tab.id)}
              className="py-2 px-0 lg:px-3 block"
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PropertyNavTabs;
