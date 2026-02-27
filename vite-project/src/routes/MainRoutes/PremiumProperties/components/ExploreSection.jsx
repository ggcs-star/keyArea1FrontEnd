import React from 'react'
import { Container } from '../../../../components/Layout'

const greatPoints = [
  {
    icon: '🚇',
    text: 'Ahmedabad Metro connects key localities, improving intra-city travel',
  },
  {
    icon: '🏙️',
    text: 'Rapid development in areas like SG Highway, Gota, and South Bopal',
  },
  {
    icon: '🏫',
    text: 'Presence of reputed schools, colleges, and universities',
  },
  {
    icon: '🛣️',
    text: 'Well-connected via Sardar Patel Ring Road and SG Highway',
  },
  {
    icon: '🏗️',
    text: 'Multiple upcoming residential and commercial real estate projects',
  },
  {
    icon: '🛍️',
    text: 'Proximity to malls, hospitals, and lifestyle hubs for comfortable living',
  },
  {
    icon: '✈️',
    text: 'Easy access to Sardar Vallabhbhai Patel International Airport',
  },
  {
    icon: '🚉',
    text: 'Ahmedabad Junction and new bullet train project enhancing rail connectivity',
    // more: true,
  },
]


const notGreatPoints = [
  {
    icon: '🚦',
    text: 'Areas in and around Miyapur experience frequent traffic jams',
  },
  {
    icon: '🅿️',
    text: 'Vehicle owners face difficulty due to lack of parking space in the locale',
  },
  {
    icon: '💡',
    text: 'Parts of Miyapur lack adequate street lighting',
  },
  {
    icon: '🕳️',
    text: 'Open drains & manholes on roads trouble commuters... ',
    // more: true,
  },
]

const ExploreSection = () => {
  return (
    <Container>
    <section className="bg-white rounded-xl shadow p-6 my-8 w-full" id="locality-insights">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="text-xl font-bold text-gray-800">Explore Ahmedabad</h3>
        <a
          href="https://www.99acres.com/miyapur-hyderabad-overview-piffid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 text-sm font-semibold hover:underline"
        >
          Ahmedabad Overview
        </a>
      </div>
      {/* <div className="text-gray-500 text-sm mt-1">Gujarat | Pincode - 500049</div> */}
      <div className="h-2" />
      {/* Ratings/Badges */}
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="inline-flex items-center bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {/* Example icon */}
          <span className="mr-1">📉</span>16.7% YoY
        </span>
        <span className="inline-flex items-center bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          <span className="mr-1">💼</span>Proximity to IT hubs
        </span>
      </div>
      <div className="h-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* What's great here! */}
        <div>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-lg">👍</span>
            <span className="font-semibold text-gray-800">What's great here!</span>
          </div>
          <ul className="space-y-3">
            {greatPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-xl mt-0.5">{point.icon}</span>
                <span className="text-gray-700 text-sm">
                  {point.text}
                  {point.more && (
                    <span className="text-red-500 cursor-pointer ml-1 text-xs font-medium">more</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* What needs attention! */}
        <div>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-lg">⚠️</span>
            <span className="font-semibold text-gray-800">What needs attention!</span>
          </div>
          <ul className="space-y-3">
            {notGreatPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-xl mt-0.5">{point.icon}</span>
                <span className="text-gray-700 text-sm">
                  {point.text}
                  {point.more && (
                    <span className="text-red-500 cursor-pointer ml-1 text-xs font-medium">more</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </Container>
  )
}

export default ExploreSection