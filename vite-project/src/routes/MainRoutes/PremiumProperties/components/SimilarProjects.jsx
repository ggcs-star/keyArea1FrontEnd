import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { MdVerified } from 'react-icons/md'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

const similarProjects = [
  {
    id: '411745',
    name: 'Anuhar Gautami Heights',
    img: 'https://newprojects.99acres.com/projects/anuhar_homes/anuhar_gautami_heights/images/1cixnpg_1713441298_487013426_med.jpg',
    link: 'https://www.99acres.com/anuhar-gautami-heights-miyapur-hyderabad-npxid-r411745',
    config: '2, 3 BHK Apartment in Miyapur, Hyderabad',
    price: '₹ 86.28 L - 1.43 Cr',
    possession: 'Possession from Dec 2026',
    rera: true,
  },
  {
    id: '371084',
    name: 'Candeur 40',
    img: 'https://newprojects.99acres.com/projects/candeur_developers/candeur_40/images/cgy25zt5_med.jpg',
    link: 'https://www.99acres.com/candeur-40-miyapur-hyderabad-npxid-r371084',
    config: '2, 3 BHK Apartment in Miyapur, Hyderabad',
    price: '₹ 1.1 - 1.52 Cr',
    possession: 'Ready To Move',
    rera: true,
  },
  {
    id: '413683',
    name: 'Honer Signatis',
    img: 'https://newprojects.99acres.com/projects/honer_homes/honer_signatis/images/mzlnvij_1692255032_440037320_med.jpg',
    link: 'https://www.99acres.com/honer-signatis-kukatpally-hyderabad-npxid-r413683',
    config: '3, 4 BHK Apartment in Kukatpally, Hyderabad',
    price: '₹ 1.46 - 3.38 Cr',
    possession: 'Possession from Dec 2026',
    rera: true,
  },
  {
    id: '423904',
    name: 'Greater Infras IRIS',
    img: 'https://newprojects.99acres.com/projects/candeur_developers/candeur_40/images/cgy25zt5_med.jpg',
    link: 'https://www.99acres.com/candeur-40-miyapur-hyderabad-npxid-r371084',
    config: '2, 3 BHK Apartment in Miyapur, Hyderabad',
    price: '₹ 76.99 L - 1.23 Cr',
    possession: 'Possession from Aug 2025',
    rera: true,
  },
  {
    id: '381184',
    name: 'Vijay RVs Sai Vanamali',
    img: 'https://newprojects.99acres.com/projects/anuhar_homes/anuhar_gautami_heights/images/1cixnpg_1713441298_487013426_med.jpg',
    link: 'https://www.99acres.com/anuhar-gautami-heights-miyapur-hyderabad-npxid-r411745',
    config: '2, 3 BHK Apartment in Miyapur, Hyderabad',
    price: '₹ 72.15 L - 1.48 Cr',
    possession: 'Possession from Dec 2026',
    rera: true,
  },
  {
    id: '414987',
    name: 'Praneeth Pranav Ixora',
    img: 'https://newprojects.99acres.com/projects/candeur_developers/candeur_40/images/cgy25zt5_med.jpg',
    link: 'https://www.99acres.com/candeur-40-miyapur-hyderabad-npxid-r371084',
    config: '2, 3 BHK Apartment in Kukatpally, Hyderabad',
    price: '₹ 99.4 L - 2.38 Cr',
    possession: 'Possession from Dec 2026',
    rera: true,
  },
]

const SimilarProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [shortlisted, setShortlisted] = useState({})
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

  const toggleShortlist = (id, e) => {
    e.stopPropagation()
    setShortlisted((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="pageComponent my-8" data-label="SIMILAR_PROJECTS">
      <div className="flex items-center gap-2 mb-4 px-2">
        <h2 className="title_bold text-xl font-bold">Similar Projects</h2>
        <div className="relative group ml-2">
          <span className="inline-flex items-center cursor-pointer">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">i</text></svg>
          </span>
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-black text-white text-xs rounded shadow-lg px-3 py-2 opacity-0 group-hover:opacity-100 pointer-events-none z-20 transition-opacity">
            Projects similar to the current one in terms of price and other property attributes
          </div>
        </div>
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
          {similarProjects.map((proj, idx) => (
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
                {/* Shortlist heart */}
                <button
                  className="absolute top-2 right-2 cursor-pointer bg-transparent border-none p-0"
                  onClick={(e) => toggleShortlist(proj.id, e)}
                  aria-label={shortlisted[proj.id] ? 'Remove from shortlist' : 'Add to shortlist'}
                  tabIndex={0}
                  type="button"
                >
                  {shortlisted[proj.id] ? (
                    <FaHeart className="w-6 h-6 text-primary" title="Shortlisted" />
                  ) : (
                    <FaRegHeart className="w-6 h-6 text-primary" title="Shortlist" />
                  )}
                </button>
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
                <div className="text-xs text-gray-500 mb-1">{proj.config}</div>
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

export default SimilarProjects