import React, { useState } from 'react'
import Modal from 'react-modal'
import { FaChevronRight } from 'react-icons/fa'
import garden from '../../../../assets/icons/garden.svg'
import elevator from '../../../../assets/icons/elevator.svg'
import security from '../../../../assets/icons/security.svg'
import waterconservator from '../../../../assets/icons/water-conservator.svg'
import watersupply from '../../../../assets/icons/water-supply.svg'
import conference from '../../../../assets/icons/conference.svg'
import fireextinguisher from '../../../../assets/icons/fire-extinguisher.svg'
import road from '../../../../assets/icons/road.svg'
import devkunj1 from '../../../../assets/properties/devkunj/1.jpg'
import devkunj2 from '../../../../assets/properties/devkunj/2.jpg'
import devkunj3 from '../../../../assets/properties/devkunj/3.jpg'
import devkunj4 from '../../../../assets/properties/devkunj/4.jpg'
import devkunj5 from '../../../../assets/properties/devkunj/5.jpg'

Modal.setAppElement('#root') // Adjust if your root is different

const facilities = [
  { label: 'Garden Area', img: garden },
  { label: 'Lift', img: elevator },
  { label: 'Security', img: security },
  { label: 'Water Conservation', img: waterconservator },
  { label: 'Water Supply', img: watersupply },
  { label: 'Community Hall', img: conference },
  { label: 'Fire Safety', img: fireextinguisher },
  { label: 'Road', img: road },
]

const facilityImages = [devkunj1, devkunj2, devkunj3, devkunj4, devkunj5]

const descShort = `Devkunj 80 Ahmedabad offers a perfect blend of luxury and comfort with thoughtfully designed 3 BHK homes...`
const descFull = `Devkunj 80 Ahmedabad offers a perfect blend of luxury and comfort with thoughtfully designed 3 BHK builder floors located near Vaishnodevi Circle. This project includes premium amenities such as landscaped gardens, a children's play area, and secure parking. Designed to elevate your living experience, Devkunj 80 provides a peaceful residential atmosphere while ensuring proximity to key city conveniences. Whether for families or individuals, it offers a lifestyle that combines modern aesthetics with everyday functionality.`

const TopFacilities = () => {
  const [showMore, setShowMore] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(facilityImages[0])

  return (
    // <Container>
    <section
      id="uniqueFacility"
      qa-id="xidUniqueFacilities"
      className="pageComponent my-8 overflow-x-auto"
      data-label="FACILITIES"
      topmost="true"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold">Top Facilities</h2>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4 text-sm text-gray-700">
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

      {/* Facilities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {facilities.map((facility, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:bg-blue-50 transition"
          >
            <img src={facility.img} alt={facility.label} className="w-12 h-12 mb-2" />
            <div className="text-xs font-medium text-gray-800 text-center">
              {facility.label}
            </div>
          </div>
        ))}
      </div>

      {/* View Photos Button */}
      <div className="mt-6">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center text-red-500 hover:underline font-semibold text-base"
        >
          <span>View Facility Photos</span>
          <FaChevronRight className="ml-2 mt-[3px] w-5 h-5" />
        </button>
      </div>

      {/* React Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Facility Images"
        className="fixed inset-0 z-50 flex items-center justify-center outline-none px-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-40"
      >
        <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-lg shadow-lg relative flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold z-10"
          >
            &times;
          </button>

          {/* Main Image */}
          <div className="w-full flex-1 bg-black flex items-center justify-center max-h-[60vh]">
            <img
              src={activeImage}
              alt="Main View"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="w-full bg-white px-4 py-3 overflow-x-auto flex gap-4 border-t">
            {facilityImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`h-20 w-32 object-cover rounded cursor-pointer transition border-2 ${img === activeImage ? 'border-blue-600' : 'border-transparent'
                  }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
      </Modal>
    </section>

    // </Container>
  )
}

export default TopFacilities
