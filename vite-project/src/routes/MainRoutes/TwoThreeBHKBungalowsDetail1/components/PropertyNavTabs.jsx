import React from 'react';

const navTabs = [
  { id: 'overview', label: 'Overview', href: '#pdOverview' },
  { id: 'sale', label: 'Property for Sale / Rent', href: '#pdPropertiesforSale' },
  { id: 'price', label: 'Price Range', href: '#pdPriceRange' },
  { id: 'floorPlan', label: 'Floor Plan', href: '#pdFloorPlan' },
  { id: 'amenities', label: 'Amenities', href: '#pdAminities' },
  { id: 'promoterdetails', label: 'Promoter Details', href: '#pdPromoterDetails' },
];

const PropertyNavTabs = ({ activeTab, handleTabClick }) => (
  <div className="pdp-nav-sec bg-[#ececec] px-5 rounded border border-[#ccc] mb-[15px] transition-all duration-300 ease-in-out text-[#333] text-[12px] leading-[1.5em] font-sans">
    <div className="fw">
      <ul className="pdp-nav flex flex-nowrap lg:flex-wrap items-center gap-2 lg:gap-4 text-[15px] list-none p-0 m-0 overflow-x-auto whitespace-nowrap -mx-4 px-4 hide-scrollbar">
        {navTabs.map(tab => (
          <li key={tab.id} className={activeTab === tab.id ? 'active font-bold' : ''}>
            <a
              href={tab.href}
              onClick={() => handleTabClick(tab.id)}
              className="py-2 px-0 lg:px-4 block"
            >
              {tab.label}
            </a>
          </li>
        ))}
        {/* <li className="relative group">
          <a href="javascript:void(0);" className="py-2 px-3 block flex items-center">More <i className="fa fa-angle-down ml-1"></i></a>
          <ul className="pdp-d-menu absolute left-0 top-full mt-1 bg-white border border-[#ccc] rounded shadow-lg hidden group-hover:block z-10 min-w-[180px]">
            <li><a href="#pdTopAdvertiser" className="block px-4 py-2 hover:bg-[#ececec]">Top Advertisers</a></li>
            <li><a href="#pdAboutBuilder" className="block px-4 py-2 hover:bg-[#ececec]">About Builder</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
);

export default PropertyNavTabs; 