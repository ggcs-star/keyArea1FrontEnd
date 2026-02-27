import React from 'react'
import { FaPlay } from 'react-icons/fa'
import devkunj1 from '../../../../assets/properties/devkunj/1.jpg'
import devkunj3 from '../../../../assets/properties/devkunj/3.jpg'
import devkunj5 from '../../../../assets/properties/devkunj/5.jpg'

const tourCards = [
  {
    label: 'All Photos & Videos',
    count: 18,
    img: devkunj1,
    alt: 'Devkunj 80',
    type: 'all',
  },
  {
    label: 'Videos',
    count: 3,
    img: devkunj3,
    alt: '',
    type: 'video',
  },
  {
    label: 'Outdoors',
    count: 6,
    img: devkunj5,
    alt: 'Devkunj 80',
    type: 'photo',
  },
]

const Tour = () => {
  return (
    <section className="NewLaunchGallery__photonWrap pageComponent my-8" data-label="GALLERY">
      <h1 className="title_bold text-xl font-bold mb-4">Tour this project</h1>

      {/* Grid on md and up, horizontal scroll on small devices */}
      <div className="w-full">
        {/* Grid for medium and above */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {tourCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative">
                <img
                  alt={card.alt}
                  src={card.img}
                  className="w-full h-64 object-cover"
                />
                {card.type === 'video' && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <FaPlay className="text-white text-3xl bg-black bg-opacity-50 rounded-full p-2" />
                  </span>
                )}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2 flex flex-col">
                  <span className="text-white font-semibold">{card.label}</span>
                  <span className="text-white text-xs">({card.count})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal scroll on mobile */}
        <div className="md:hidden flex overflow-x-auto gap-4 pb-2">
          {tourCards.map((card, idx) => (
            <div key={idx} className="min-w-[45%] bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative">
                <img
                  alt={card.alt}
                  src={card.img}
                  className="w-full h-48 object-cover"
                />
                {card.type === 'video' && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <FaPlay className="text-white text-2xl bg-black bg-opacity-50 rounded-full p-2" />
                  </span>
                )}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2 flex flex-col">
                  <span className="text-white font-semibold">{card.label}</span>
                  <span className="text-white text-xs">({card.count})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tour
