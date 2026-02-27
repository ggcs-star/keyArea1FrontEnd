import React from 'react'
import { FaRupeeSign, FaDownload, FaChevronDown } from 'react-icons/fa'

const SummaryTable = () => {
  return (
    <section data-label="SUMMARY_TABLE" topmost="true" className="pageComponent configurationCards__configurationCardContainer bg-white lg:p-0 my-4">
      {/* Top Wrapper */}
      <div className="pageComponent configurationCards__configurationCardTopWrapper flex flex-col gap-2">
        <div className="flex items-center gap-4">
          
          <div className="configurationCards__priceAndCTAWrapper flex-1 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="configurationCards__cardPriceWrapper configurationCards__cardPriceWrapperExp flex items-center gap-2">
              <div className="configurationCards__iconWrapper flex items-center justify-center w-8 h-8 bg-blue-50 rounded-full">
            <FaRupeeSign className="text-red-500 w-5 h-5" />
          </div>
          <h2 className="list_header_semiBold configurationCards__configurationCardsHeading text-xl font-semibold text-gray-900">₹ 1.21 - 1.57 Cr</h2>
              <span className="caption_subdued_small configurationCards__adtnCharges text-xs text-gray-500">+ Charges</span>
            </div>
            <button
              type="button"
              className="buttons__secondaryRegular configurationCards__downloadBrochureCTA flex items-center gap-2 px-4 py-2 border border-blue-600 text-red-500 rounded hover:bg-blue-50 transition"
            >
              <FaDownload className="w-5 h-5" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
        <span className="caption_subdued_medium configurationCards__configurationCardPriceHeading text-xs text-gray-500 mt-1">PRICE RANGE</span>
        <span className="ellipsis list_header_semiBold configurationCards__configurationCardsSubHeading text-base font-semibold text-gray-800">3 BHK Apartment</span>
      </div>
      {/* Configurations Carousel */}
      <div className="pageComponent configurationCards__configurationCardsWrapper mt-4">
        <div className="carousel__CarouselContainer">
          <div className="carousel__CarouselBox">
            <div className="carousel__slidingBox flex gap-4">
              {/* Single Card Example */}
              <div id="1_3" className="configurationCards__cardContainer bg-white border border-gray-200 p-4 min-w-[280px] flex flex-col gap-2">
                <div className="configurationCards__cardConfigBand flex items-center gap-2 bg-blue-50 rounded px-2 py-1 mb-2">
                  <span className="list_header_semiBold configurationCards__configBandLabel text-sm font-semibold text-blue-900">3 BHK</span>
                  <span className="caption_subdued_medium configurationCards__configBandHeading text-xs text-gray-500">Apartment</span>
                </div>
                <span className="caption_subdued_medium configurationCards__cardAreaTypeStyle text-xs text-gray-500">Super Built-up Area</span>
                <div className="configurationCards__cardAreaHeading flex items-center gap-2 mt-1">
                  <span className="caption_subdued_medium configurationCards__cardAreaSubHeadingOne text-xs text-gray-700">2430 sq. ft. </span>
                  {/* <span className="caption_subdued_medium configurationCards__cardAreaSubHeadingTwo ellipsis text-xs text-gray-400">(147.73 - 191.38 sq.m.)</span> */}
                  <div ddtype="textDropDown" className="ml-2 cursor-pointer flex items-center justify-center w-6 h-6 bg-gray-100 rounded" data-label="SUMMARY_TABLE.AREA_UNIT_TOGGLE">
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="configurationCards__cardPriceHeadingWrapper flex items-center gap-2 mt-2">
                  <span className="list_header_semiBold configurationCards__cardPriceHeading text-base font-semibold text-gray-900">₹ 1.21 - 1.57 Cr</span>
                  <span className="caption_subdued_small configurationCards__adtnCharges text-xs text-gray-500">+ Charges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SummaryTable