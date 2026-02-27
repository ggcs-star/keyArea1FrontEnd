import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Slider from '@mui/material/Slider';
import banner1 from '../../../../assets/home/herosection/ref1.png'; // Default Banner Image for 'Buy'
import banner2 from '../../../../assets/home/herosection/ref2.png'; // Banner for 'Commercial Residentials'
import banner3 from '../../../../assets/home/herosection/ref3.png'; // Banner for 'Promoters'
// import mobilebanner1 from '../../../../assets/home/herosection/banner-1.png'; // Banner for 'Promoters'
// import mobilebanner2 from '../../../../assets/home/herosection/banner-2.png'; // Banner for 'Promoters'
// import mobilebanner3 from '../../../../assets/home/herosection/banner-3.png'; // Banner for 'Promoters'
import mobilebannerimg1 from '../../../../assets/home/herosection/banner-img-1.png'; // Banner for 'Promoters'
import mobilebannerimg2 from '../../../../assets/home/herosection/banner-img-2.png'; // Banner for 'Promoters'
import mobilebannerimg3 from '../../../../assets/home/herosection/banner-img-3.png'; // Banner for 'Promoters'
import mobileref1 from '../../../../assets/home/herosection/mobile-ref-1.png'; // Default Banner Image for 'Buy'
import mobileref2 from '../../../../assets/home/herosection/mobile-ref-2.png'; // Default Banner Image for 'Buy'
import mobileref3 from '../../../../assets/home/herosection/mobile-ref-3.png'; // Default Banner Image for 'Buy'
import websiteref1 from '../../../../assets/home/herosection/website-ref-1.png'; // Default Banner Image for 'Buy'
import websiteref2 from '../../../../assets/home/herosection/website-ref-2.png'; // Default Banner Image for 'Buy'
import websiteref3 from '../../../../assets/home/herosection/website-ref-3.png'; // Default Banner Image for 'Buy'


// Twitter-style search CSS
const searchStyles = `
  .form {
    --input-text-color: #000;
    --input-bg-color: #ffffff;
    --focus-input-bg-color: #ffffff;
    --text-color: #666;
    --active-color: #1b9bee;
    --width-of-input: 95%;
    --inline-padding-of-input: 1.2em;
    --gap: 0.9rem;
  }
  .form {
    font-size: 0.9rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: var(--width-of-input);
    position: relative;
    isolation: isolate;
  }
  .fancy-bg {
    position: absolute;
    width: 100%;
    inset: 0;
    background: var(--input-bg-color);
    border-radius: 30px;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border: 1px solid #000;
  }
  .search-label {
    width: 100%;
    padding: 0.8em;
    height: 40px;
    padding-inline: var(--inline-padding-of-input);
    display: flex;
    align-items: center;
  }
  .search-icon, .close-btn {
    position: absolute;
  }
  .search-icon {
    fill: var(--text-color);
    left: var(--inline-padding-of-input);
  }
  .search-icon svg {
    width: 17px;
    display: block;
  }
  .close-btn {
    border: none;
    right: var(--inline-padding-of-input);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0.1em;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--active-color);
    opacity: 0;
    visibility: hidden;
  }
  .search-input {
    color: var(--input-text-color);
    width: 100%;
    margin-inline: min(2em, calc(var(--inline-padding-of-input) + var(--gap)));
    background: none;
    border: none;
  }
  .search-input:focus {
    outline: none;
  }
  .search-input::placeholder {
    color: var(--text-color)
  }
  .search-input:focus ~ .fancy-bg {
    border: 1px solid var(--active-color);
    background: var(--focus-input-bg-color);
  }
  .search-input:focus ~ .search-icon {
    fill: var(--active-color);
  }
  .search-input:valid ~ .close-btn {
    opacity: 1;
    visibility: visible;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const propertyTypes = [
  { id: 'flats', value: '8', label: 'Flats/Apartments' },
  { id: 'house', value: '9', label: 'House/Villas' },
  { id: 'builder', value: '11', label: 'Builder Floors' },
  { id: 'farm', value: '12', label: 'Farm House' },
  { id: 'plots', value: '25', label: 'Residential Plots' },
  { id: 'penthouse', value: '54', label: 'Penthouse' },
  { id: 'studio', value: '55', label: 'Studio Apartments' }
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [city, setCity] = useState('');
  const [priceRange, setPriceRange] = useState([4000000, 100000000]);

  // Background images for different tabs
  const backgroundImages = {
    buy: websiteref1,
    commercial: websiteref2,
    promoters: websiteref3
  };

  const mobilebackgroundImages = {
    buy: mobileref1,
    commercial: mobileref2,
    promoters: mobileref3
  };

  //   const mobilebackgroundoverlayImages = {
  //   buy: mobilebannerimg1,
  //   commercial: mobilebannerimg2,
  //   promoters: mobilebannerimg3
  // };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const formatPrice = (value) => {
    if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `${(value / 100000).toFixed(2)} Lac`;
    if (value >= 1000) return `${(value / 1000).toFixed(2)} K`;
    return value.toString();
  };

  return (
    <div className="relative w-full h-auto lg:h-[400px]">
      <style>{searchStyles}</style>

      <div className="hidden lg:flex absolute top-0 left-0 w-full h-full z-0 m-0 p-0 justify-center">
        <img
          src={backgroundImages[activeTab]} 
          alt="Banner"
          className="w-8xl h-full object-cover object-center"
        />
      </div>

      {/* Mobile Banner */}
      <div className="flex lg:hidden absolute top-0 left-0 w-full h-64 z-0">
        <img
          src={mobilebackgroundImages[activeTab]}
          alt="Mobile Banner"
          className="h-fit w-fit object-cover"
        />

        {/* Overlay image */}
        {/* <img
          src={mobilebackgroundoverlayImages[activeTab]} 
          alt="Overlay Image"
          className="absolute -top-2 right-0 w-40 h-40 object-contain z-10"
        /> */}
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end -bottom-18 justify-center">
        <div className="w-full md:block hidden">
          {/* Search Tabs */}
          <div className="flex justify-start items-center w-[60%]">
            <div className="w-[60vw] bg-transparent">
              <div className="flex gap-1 mb-4 relative w-[83%]">
                {['Buy', 'Commercial Residentials', 'Promoters'].map((tab) => (
                  <button
                    key={tab}
                    className={`text-md flex-1 px-2 py-2 relative ${activeTab === tab.toLowerCase().split(' ')[0]
                      // ? 'bg-red-300 text-black font-semibold shadow-md scale-105 after:content-[""] after:absolute after:-bottom-[14px] after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white after:transition-all after:duration-300 after:ease-in-out'
                      ? 'bg-[#ffcad5] text-black font-semibold'
                      : 'text-black bg-gray-200 font-semibold'
                      }`}
                    onClick={() => handleTabChange(tab.toLowerCase().split(' ')[0])}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search Form */}
              <form className="space-y-4 bg-white">
                <div className="flex border-1 border-red-500">
                  {/* Property Type Dropdown */}
                  <div className="relative w-[180px]">
                    <button
                      type="button"
                      className="w-full font-semibold px-4 py-2 flex justify-between items-center"
                    >
                      <span>All Residential</span>
                      <IoIosArrowDown />
                    </button>
                  </div>

                  {/* City Input */}
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2 border-l border-red-500"
                    />
                  </div>

                  {/* Search Button */}
                  <button
                    type="submit"
                    className="px-6 py-2 bg-red-500 text-white flex items-center gap-2 cursor-pointer"
                  >
                    <FaSearch />
                    SEARCH
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content - positioned at bottom of image */}
      <div className="w-[100%] md:hidden block relative h-40 flex flex-col justify-end mt-18 lg:mt-20">
        <div className="flex justify-center items-center w-full mb-2">
          <div className="flex gap-6">
            {['Buy', 'Commercial', 'Promoters'].map((tab) => (
              <span
                key={tab}
                className={`font-medium cursor-pointer ${activeTab === tab.toLowerCase().split(' ')[0]
                  ? 'bg-transparent text-black border-b-2 border-red-500'
                  : 'bg-transparent text-black hover:bg-gray-300'
                  }`}
                onClick={() => handleTabChange(tab.toLowerCase().split(' ')[0])}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        {/* Twitter-style City Input */}
        <div className="w-full flex justify-center">
          <form className="form">
            <label htmlFor="search" className="search-label">
              <input
                className="search-input"
                type="text"
                required=""
                placeholder="Search City"
                id="search"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <div className="fancy-bg"></div>
              <div className="search-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7
                    " />
                  </g>
                </svg>
              </div>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
