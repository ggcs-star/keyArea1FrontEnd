import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { MdVerified } from 'react-icons/md'

const newlyLaunchedProjects = [
  {
    id: '501001',
    name: 'ASBL Broadway',
    img: 'https://newprojects.99acres.com/projects/asbl/asbl_broadway/images/bbdxsnq_1749018476_603517289_med.jpg',
    link: 'https://www.99acres.com/asbl-broadway-financial-district-hyderabad-npxid-r501001',
    config: '3 BHK Apartment',
    location: 'Financial District, Hyderabad',
    price: '₹2.5 - 2.87 Cr',
    possession: '11.9% price increase in last 1 year',
    rera: true,
  },
  {
    id: '501002',
    name: 'Prestige Clairemont',
    img: 'https://newprojects.99acres.com/projects/asbl/asbl_broadway/images/bbdxsnq_1749018476_603517289_med.jpg',
    link: 'https://www.99acres.com/asbl-broadway-financial-district-hyderabad-npxid-r501001',
    config: '3, 4 BHK Apartment',
    location: 'Kokapet, Hyderabad',
    price: '₹2.2 - 3.5 Cr',
    possession: 'Possession from Dec 2027',
    rera: true,
  },
  {
    id: '501003',
    name: 'My Home Apas',
    img: 'https://newprojects.99acres.com/projects/asbl/asbl_broadway/images/bbdxsnq_1749018476_603517289_med.jpg',
    link: 'https://www.99acres.com/asbl-broadway-financial-district-hyderabad-npxid-r501001',
    config: '3, 4 BHK Apartment',
    location: 'Nanakramguda, Hyderabad',
    price: '₹3.1 - 4.8 Cr',
    possession: 'Possession from Mar 2028',
    rera: true,
  },
  {
    id: '501004',
    name: 'Aparna Zenon',
    img: 'https://newprojects.99acres.com/projects/asbl/asbl_broadway/images/bbdxsnq_1749018476_603517289_med.jpg',
    link: 'https://www.99acres.com/asbl-broadway-financial-district-hyderabad-npxid-r501001',
    config: '2, 3 BHK Apartment',
    location: 'Miyapur, Hyderabad',
    price: '₹1.1 - 1.8 Cr',
    possession: 'Possession from Jun 2027',
    rera: true,
  },
]

const NewlyLaunched = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, slider] = useKeenSlider({
    slides: { perView: 2.2, spacing: 20 },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 1.2, spacing: 12 },
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
    <section className="pageComponent my-8" data-label="NEWLY_LAUNCHED_PROJECTS">
      <div className="flex items-center gap-2 mb-4 px-2">
        <h2 className="title_bold text-xl font-bold">Newly Launched Projects</h2>
      </div>
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
          {newlyLaunchedProjects.map((proj) => (
            <div key={proj.id} className="keen-slider__slide my-2 bg-white rounded-2xl shadow border border-gray-100 p-0 min-w-[260px] max-w-xs flex flex-col overflow-hidden relative">
              {/* Image and badges */}
              <div className="relative h-[150px] w-full border-b border-gray-100 rounded-t-2xl overflow-hidden">
                <img src={proj.img} alt={proj.name} className="object-cover w-full h-full" />
                {/* RERA badge */}
                {proj.rera && (
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-white/90 px-2 py-1 rounded text-green-700 text-xs font-semibold shadow">
                    <MdVerified className="ml-2 text-blue-500 w-5 h-5" title="Verified" />
                    <span>RERA</span>
                  </div>
                )}
                {/* Possession tag */}
                <div className="absolute bottom-2 left-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded shadow">
                  {proj.possession}
                </div>
              </div>
              {/* Card content */}
              <div className="p-4 flex flex-col gap-1">
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-blue-700 hover:underline mb-1 flex items-center">
                  {proj.name}
                </a>
                <div className="text-xs text-gray-500 mb-1">{proj.config} | {proj.location}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{proj.price}</div>
              </div>
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

export default NewlyLaunched