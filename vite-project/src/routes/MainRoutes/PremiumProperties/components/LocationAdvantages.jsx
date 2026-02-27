import React, { useState } from 'react'
import {
  FaRoad,
  FaTrain,
  FaSchool,
  FaHospital,
  FaShoppingBag,
  FaUniversity,
  FaNetworkWired,
  FaPlane,
  FaBuilding,
  FaChevronRight
} from 'react-icons/fa'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const locations = [
  { icon: <FaRoad className="text-red-500 w-8 h-8" />, label: 'S.G. Highway', distance: '0.5 Km' },
  { icon: <FaTrain className="text-red-500 w-8 h-8" />, label: 'Sabarmati Railway Station', distance: '7.5 Km' },
  { icon: <FaSchool className="text-red-500 w-8 h-8" />, label: 'Delhi Public School Bopal', distance: '9.2 Km' },
  { icon: <FaHospital className="text-red-500 w-8 h-8" />, label: 'Apollo Hospital', distance: '6.3 Km' },
  { icon: <FaShoppingBag className="text-red-500 w-8 h-8" />, label: 'Zion Zudio Mall', distance: '3.8 Km' },
  { icon: <FaUniversity className="text-red-500 w-8 h-8" />, label: 'Nirma University', distance: '4.0 Km' },
  { icon: <FaNetworkWired className="text-red-500 w-8 h-8" />, label: 'GIFT City', distance: '17.0 Km' },
  { icon: <FaPlane className="text-red-500 w-8 h-8" />, label: 'Sardar Vallabhbhai Patel International Airport', distance: '13.5 Km' },
  { icon: <FaBuilding className="text-red-500 w-8 h-8" />, label: 'Infocity Gandhinagar', distance: '14.2 Km' },
  { icon: <FaHospital className="text-red-500 w-8 h-8" />, label: 'Civil Hospital Ahmedabad', distance: '10.0 Km' },
]

const descShort = `Vaishnodevi Circle is emerging as a prominent residential hub in Ahmedabad. Its strategic location on SG Highway makes it ideal for...`
const descFull = `Vaishnodevi Circle is emerging as a prominent residential hub in Ahmedabad. Its strategic location on SG Highway makes it ideal for both working professionals and families. The area offers close proximity to reputed educational institutions like Nirma University, healthcare centers like Apollo Hospital, shopping destinations such as Zion Zudio Mall, and major business zones including GIFT City and Infocity Gandhinagar. Excellent connectivity to the airport and public transport makes it an ideal choice for homebuyers.`

const LocationAdvantages = () => {
  const [showMore, setShowMore] = useState(false)
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 3.2,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2.2, spacing: 12 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1.2, spacing: 8 },
      },
    },
    loop: false,
  })

  return (
    <section className="pageComponent my-8" topmost="true" data-label="LOCATION_HIGHLIGHTS">
      <div className="flex items-center justify-between mb-2">
        <h2 className="title_bold text-xl font-bold">Location Advantages</h2>
        <a href="#" className="text-red-500 hover:underline text-sm font-medium" data-label="VIEW_ALL">
          <em>View All (10)</em>
        </a>
      </div>

      {/* Description */}
      <div className="mb-4 text-gray-700 text-sm">
        {!showMore ? (
          <>
            <span>{descShort}</span>
            <button
              className="ml-2 text-red-500 hover:underline text-xs font-medium"
              onClick={() => setShowMore(true)}
            >
              Read more
            </button>
          </>
        ) : (
          <>
            <span>{descFull}</span>
            <button
              className="ml-2 text-red-500 hover:underline text-xs font-medium"
              onClick={() => setShowMore(false)}
            >
              Read less
            </button>
          </>
        )}
      </div>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 hover:bg-blue-100 transition disabled:opacity-50"
          onClick={() => slider?.current?.prev()}
          aria-label="Previous"
        >
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div ref={sliderRef} className="keen-slider px-8">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="keen-slider__slide min-w-[220px] max-w-xs bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-4"
            >
              {loc.icon}
              <div>
                <div className="text-base font-semibold text-gray-800 mb-1">{loc.label}</div>
                <div className="text-xs text-gray-500">{loc.distance}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 hover:bg-blue-100 transition disabled:opacity-50"
          onClick={() => slider?.current?.next()}
          aria-label="Next"
        >
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-6">
        <a href="#" className="flex items-center text-red-500 hover:underline font-semibold text-base">
          <span>View All Location Photos</span>
          <FaChevronRight className="ml-2 mt-[3px] w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default LocationAdvantages
