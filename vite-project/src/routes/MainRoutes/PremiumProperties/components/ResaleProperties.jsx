import React, { useState } from 'react'
import { FaChevronDown, FaExternalLinkAlt, FaPhoneAlt } from 'react-icons/fa'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import devkunj1 from '../../../../assets/properties/devkunj/1.jpg'
import devkunj3 from '../../../../assets/properties/devkunj/3.jpg'
import devkunj5 from '../../../../assets/properties/devkunj/5.jpg'  

const resaleOptions = [
  'All Options',
  '3 BHK Residential Apartment',
]

const resaleProperties = [
  {
    img: devkunj1,
    price: '₹ 2.75 Cr',
    by: 'By Owner',
    date: 'Posted on 18th Jun, 2025',
  },
  {
    img: devkunj3,
    price: '₹ 2.85 Cr',
    by: 'By Owner',
    date: 'Posted on 28th May, 2025',
  },
  {
    img: devkunj5,
    price: '₹ 1.21 Cr',
    by: 'By Dealer',
    date: 'Posted on 04th Jun, 2025',
  },

]

const ResaleProperties = () => {
  const [selected, setSelected] = useState(resaleOptions[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, slider] = useKeenSlider({
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.2, spacing: 24 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <section className="pageComponent my-8">
      {/* Heading and Dropdown */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold">Resale Properties in this project</h3>
          <div className="text-gray-500 text-sm flex items-center gap-2 mt-1">
            <em>Showing for</em>
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded border border-gray-300 hover:bg-gray-200 transition text-gray-700"
                onClick={() => setDropdownOpen((o) => !o)}
              >
                <span>{selected}</span>
                <FaChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded shadow z-10">
                  {resaleOptions.map((opt) => (
                    <div
                      key={opt}
                      className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${selected === opt ? 'font-semibold text-red-500' : ''}`}
                      onClick={() => { setSelected(opt); setDropdownOpen(false); }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <em className="text-blue-700 cursor-pointer hover:underline">View all 4 Properties&nbsp;</em>
          <span className="text-gray-500">in</span>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-700 hover:underline"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <b className="text-sm">Devkunj 80 for Resale</b>
          </a>
        </div>
      </div>
      {/* Keen Slider Carousel - match LocationAdvantages width */}
      <div className="relative max-w-4xl mx-auto">
        {/* Left Arrow */}
        {loaded && slider.current && (
          <button
            className="hidden md:flex cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 hover:bg-blue-100 transition disabled:opacity-50"
            onClick={() => slider.current?.prev()}
            aria-label="Previous"
            type="button"
            disabled={currentSlide === 0}
          >
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}
        <div ref={sliderRef} className="keen-slider px-8">
          {resaleProperties.map((prop, idx) => (
            <div key={idx} className="my-2 keen-slider__slide bg-white rounded-lg shadow p-4 min-w-[260px] flex flex-col items-start relative">
              <div className="w-full h-36 bg-gray-100 rounded mb-3 flex items-center justify-center overflow-hidden">
                {prop.img ? (
                  <img src={prop.img} alt="Candeur Twins Building" className="object-cover w-full h-full" />
                ) : (
                  <div className="text-gray-400 text-lg">No Image</div>
                )}
              </div>
              <a
                href="#"
                target="_blank"
                className="text-lg font-bold text-blue-700 hover:underline mb-1"
              >
                {prop.price}
              </a>
              <div className="text-gray-600 text-sm mb-1">{prop.by}</div>
              <div className="text-gray-400 text-xs mb-2">{prop.date}</div>
              <button
                className="absolute top-4 right-4 bg-white border border-blue-600 text-red-500 rounded-full p-2 shadow hover:bg-blue-50 transition"
                title="Call"
              >
                <FaPhoneAlt className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        {loaded && slider.current && (
          <button
            className="hidden md:flex cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 hover:bg-blue-100 transition disabled:opacity-50"
            onClick={() => slider.current?.next()}
            aria-label="Next"
            type="button"
            disabled={
              slider.current.track.details.rel ===
              slider.current.track.details.slides.length - slider.current.options.slides.perView
            }
          >
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        )}
      </div>
    </section>
  )
}

export default ResaleProperties