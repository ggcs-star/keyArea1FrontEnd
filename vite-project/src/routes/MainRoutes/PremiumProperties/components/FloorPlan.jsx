import React from 'react'
import { FaHome, FaPhoneAlt } from 'react-icons/fa'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const floorPlans = [
  {
    area: '2430 sq.ft.',
    areaSqm: '147.73 sq.m.',
    type: 'Super Built-up Area | 3 BHK',
    img: 'https://projectcdn.99acres.com/project_data/e4ecbe/block3_105600/3D/50693_B3_1F4_3D.jpg',
    price: '₹ 1.21 Cr',
    status: 'Under Construction',
    possession: "Aug '26 possession",
  },
  // {
  //   area: '1620.43 sq.ft.',
  //   areaSqm: '150.54 sq.m.',
  //   type: 'Super Built-up Area | 3 BHK',
  //   img: 'https://projectcdn.99acres.com/project_data/e4ecbe/block3_105600/3D/50693_B3_1F5_3D.jpg',
  //   price: '₹ 1.23 Cr',
  //   status: 'Under Construction',
  //   possession: "Aug '26 possession",
  // },
  // {
  //   area: '1687.77 sq.ft.',
  //   areaSqm: '156.8 sq.m.',
  //   type: 'Super Built-up Area | 3 BHK',
  //   img: 'https://projectcdn.99acres.com/project_data/e4ecbe/block3_105600/3D/50693_B3_1F3_3D.jpg',
  //   price: '₹ 1.28 Cr',
  //   status: 'Under Construction',
  //   possession: "Aug '26 possession",
  // },
  // {
  //   area: '1711.1 sq.ft.',
  //   areaSqm: '158.97 sq.m.',
  //   type: 'Super Built-up Area | 3 BHK',
  //   img: 'https://projectcdn.99acres.com/project_data/e4ecbe/block3_105600/3D/50693_B3_1F6_3D.jpg',
  //   price: '₹ 1.3 Cr',
  //   status: 'Under Construction',
  //   possession: "Aug '26 possession",
  // },
  // {
  //   area: '1939.52 sq.ft.',
  //   areaSqm: '180.19 sq.m.',
  //   type: 'Super Built-up Area | 3 BHK',
  //   img: 'https://projectcdn.99acres.com/project_data/e4ecbe/block1_103836/3D/50693_B1_1F5_3D.jpg',
  //   price: '₹ 1.47 Cr',
  //   status: 'Under Construction',
  //   possession: "Aug '26 possession",
  // },
  // {
  //   area: '1984.64 sq.ft.',
  //   areaSqm: '184.38 sq.m.',
  //   type: 'Super Built-up Area | 3 BHK',
  //   img: 'https://projectcdn.99acres.com/project_data/e4ecbe/block1_103836/3D/50693_B1_1F6_3D.jpg',
  //   price: '₹ 1.51 Cr',
  //   status: 'Under Construction',
  //   possession: "Aug '26 possession",
  // },
  // {
  //   area: '2003.81 sq.ft.',
  //   areaSqm: '186.16 sq.m.',
  //   type: 'Super Built-up Area | 3 BHK',
  //   img: 'https://projectcdn.99acres.com/project_data/e4ecbe/block3_105600/3D/50693_B3_1F7_3D.jpg',
  //   price: '₹ 1.52 Cr',
  //   status: 'Under Construction',
  //   possession: "Aug '26 possession",
  // },
  // {
  //   area: '2060.04 sq.ft.',
  //   areaSqm: '191.38 sq.m.',
  //   type: 'Super Built-up Area | 3 BHK',
  //   img: 'https://projectcdn.99acres.com/project_data/e4ecbe/block3_105600/3D/50693_B3_1F8_3D.jpg',
  //   price: '₹ 1.57 Cr',
  //   status: 'Under Construction',
  //   possession: "Aug '26 possession",
  // },
  // {
  //   area: '2032 sq.ft.',
  //   areaSqm: '188.78 sq.m.',
  //   type: 'Super Built-up Area | 3 BHK',
  //   img: 'https://www.99acres.com/universalapp/img/floorPlanNoImage.png',
  //   price: '₹ 1.54 Cr',
  //   status: 'Under Construction',
  //   possession: "Aug '26 possession",
  // },
]

const FloorPlan = () => {
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1.2, spacing: 12 },
      },
    },
    loop: false,
  })

  return (
    <section id="floorPlans" data-label="FLOOR_PLAN" className="my-8">
      {/* Heading and 3D Link */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold leading-tight mb-1">Floor Plans & Pricing</h2>
        </div>
        {/* <a href="#" className="text-red-500 hover:underline text-sm font-medium"><em>View Homes in 3D</em></a> */}
      </div>
      {/* Tabs (static for now) */}
      <div className="flex gap-2 mb-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">3 BHK Apartment</span>
      </div>
      {/* Floor Plan Count */}
      <div className="bg-blue-50 rounded px-4 py-2 mb-4 w-fit">
        <span className="text-xs text-blue-800 font-medium">10 Floor Plans Available</span>
      </div>
      {/* Keen Slider for Floor Plan Cards */}
      <div className="relative w-[350px] lg:w-[650px]">
        {floorPlans.length > 2 && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-blue-100 transition disabled:opacity-50"
            onClick={() => slider && slider.current && slider.current.prev()}
            aria-label="Previous"
            type="button"
          >
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div ref={sliderRef} className="keen-slider">
          {floorPlans.map((plan, idx) => (
            <div key={idx} className="keen-slider__slide lg:min-w-[320px] lg:max-w-xs bg-white border border-gray-200 rounded-lg shadow p-4 flex flex-col gap-2">
              <div className="flex items-center mb-2">
                <FaHome className="text-blue-500 w-6 h-6 mr-2" />
                <div>
                  <div className="font-semibold text-base text-gray-800">{plan.area}<span className="ml-2 text-xs text-gray-500">({plan.areaSqm})</span></div>
                  <div className="text-xs text-gray-500">{plan.type}</div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <img src={plan.img} alt="Floor Plan" className="h-40 w-60 object-contain rounded bg-gray-50" />
              </div>
              <div className="font-bold text-lg text-blue-900 mt-2">{plan.price}</div>
              <div className="flex flex-col gap-1 bg-gray-100 rounded-lg p-2">
                <span className="text-xs text-gray-600">{plan.status}</span>
                <span className="text-xs text-gray-600">{plan.possession}</span>
              </div>
              <a href="#" className="mt-2 inline-flex items-center justify-between gap-2 text-red-500 px-4 py-2 rounded transition-colors text-sm font-medium w-full">
                <span>Request callback</span>
                <FaPhoneAlt className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
        {floorPlans.length > 2 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-blue-100 transition disabled:opacity-50"
            onClick={() => slider && slider.current && slider.current.next()}
            aria-label="Next"
            type="button"
          >
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}

export default FloorPlan