import React from 'react'
import { Container } from '../../../../components/Layout'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

const featureRatings = [
  { label: 'Connectivity', value: 4.3, color: '#0078DB', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.43 4H18.58L21 11V20H18V18H6V20H3V11L5.43 4ZM5 13.5C5 14.33 5.67 15 6.5 15C7.33 15 8 14.33 8 13.5C8 12.67 7.33 12 6.5 12C5.67 12 5 12.67 5 13.5ZM17.5 15C16.67 15 16 14.33 16 13.5C16 12.67 16.67 12 17.5 12C18.33 12 19 12.67 19 13.5C19 14.33 18.33 15 17.5 15ZM6.5 5.5L5 10H19L17.5 5.5H6.5Z" fill="#0078DB"></path></svg>
  ) },
  { label: 'Lifestyle', value: 4.2, color: '#0078DB', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M19.8496 9.93832C18.2596 11.5283 16.1096 12.0283 14.5796 11.3183L13.1096 12.7883L19.9896 19.6683L18.5796 21.0783L11.6996 14.1983L4.80958 21.0683L3.39958 19.6583L13.1596 9.89832C12.4496 8.36832 12.9496 6.21832 14.5396 4.62832C16.4596 2.71832 19.1996 2.35832 20.6596 3.81832C22.1296 5.28832 21.7596 8.02832 19.8496 9.93832ZM10.6296 10.2983L7.79958 13.1283L3.60958 8.94832C2.04958 7.37832 2.04958 4.84832 3.60958 3.28832L10.6296 10.2983Z" fill="#0078DB"></path></svg>
  ) },
  { label: 'Safety', value: 4.1, color: '#0078DB', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3 5L12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5ZM6 13L10 17L18 9L16.59 7.58L10 14.17L7.41 11.59L6 13Z" fill="#0078DB"></path></svg>
  ) },
  { label: 'Green Area', value: 4.1, color: '#0078DB', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M8.1 13.25C6.72 13.25 5.6 12.13 5.6 10.75C5.6 9.75 6.19 8.9 7.03 8.5C6.19 8.1 5.6 7.25 5.6 6.25C5.6 4.87 6.72 3.75 8.1 3.75C8.63 3.75 9.12 3.91 9.52 4.19L9.5 4C9.5 2.62 10.62 1.5 12 1.5C13.38 1.5 14.5 2.62 14.5 4L14.48 4.19C14.89 3.91 15.37 3.75 15.9 3.75C17.28 3.75 18.4 4.87 18.4 6.25C18.4 7.25 17.81 8.1 16.97 8.5C17.81 8.9 18.4 9.75 18.4 10.75C18.4 12.13 17.28 13.25 15.9 13.25C15.37 13.25 14.88 13.09 14.48 12.81L14.5 13C14.5 14.38 13.38 15.5 12 15.5C10.62 15.5 9.5 14.38 9.5 13L9.52 12.81C9.11 13.09 8.63 13.25 8.1 13.25ZM12 22.5C16.97 22.5 21 18.47 21 13.5C16.03 13.5 12 17.53 12 22.5ZM12 22.5C12 17.53 7.97 13.5 3 13.5C3 18.47 7.03 22.5 12 22.5ZM12 6C13.38 6 14.5 7.12 14.5 8.5C14.5 9.88 13.38 11 12 11C10.62 11 9.5 9.88 9.5 8.5C9.5 7.12 10.62 6 12 6Z" fill="#0078DB"></path></svg>
  ) },
]

const likes = [
  { label: 'Good Public Transport', count: 1593 },
  { label: 'Easy Cab/Auto Availability', count: 1243 },
  { label: 'Metro Connectivity nearby', count: 1021 },
  { label: 'Good Schools are nearby', count: 1007 },
  { label: 'Well-maintained Roads', count: 852 },
  { label: 'Markets at a walkable distance', count: 850 },
]
const dislikes = [
  { label: 'Frequent Traffic Jams', count: 797 },
  { label: 'Frequent Parking Issues', count: 594 },
]

const ReviewSection = () => {
  return (
    <Container>
      <section className="my-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 review__headingWrap">
          {/* Title and subtitle */}
          <div className="ComponentHeading__PageHeadingwrap">
            <div>
              <div className="title_bold">
                <h2>
                  <div className="truncate text-2xl font-bold text-gray-800">Locality Reviews</div>
                </h2>
                <div className="caption_subdued_medium ComponentHeading__headingGap ComponentHeading__subHeadingWrap ComponentHeading__subHeadingWrapCustomWidth text-gray-500 text-base mt-1">
                  for Vaishnodevi Circle, Ahmedabad
                </div>
              </div>
            </div>
          </div>
          {/* CTA Button */}
          <div className="review__ctaBtnWrap flex items-center" data-label="WRITE_A_REVIEW">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-5 py-2 text-base shadow buttons__primaryRegular"
              type="button"
            >
              Review your Society / Locality
            </button>
          </div>
        </div>

        {/* Review summary */}
        <div className="review__topWrapper flex flex-col lg:flex-row gap-8 mt-8">
          {/* Left: Rating summary */}
          <div className="review__leftWrap flex-1 min-w-[320px]">
            <div className="review__wrapComp review__frontLayer bg-white rounded-xl shadow p-6">
              <div className="review__ratingArea flex flex-col items-center gap-2">
                {/* Average rating and stars */}
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-semibold text-gray-800">4.2</span>
                  <span className="text-gray-400 text-lg">/5</span>
                </div>
                <div className="flex items-center mt-1" style={{ fontSize: 16, width: 100 }}>
                  {/* 4 full stars, 1 partial */}
                  {[1,2,3,4].map(i => (
                    <svg key={i} viewBox="0 0 51 48" width="20" height="20" className="text-yellow-400" fill="currentColor"><path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" /></svg>
                  ))}
                  {/* Partial star: width 4px of 20px (20%) */}
                  <svg viewBox="0 0 51 48" width="20" height="20" className="text-yellow-400" fill="currentColor" style={{ clipPath: 'inset(0 80% 0 0)' }}><path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" /></svg>
                </div>
                <div className="labels_semiBold text-base mt-2">Average Rating</div>
                <div className="caption_subdued_medium text-gray-500">(2556 Total Reviews)</div>
              </div>
              {/* Star breakdown */}
              <div className="review__ratingWrap mt-6 w-full">
                {[
                  { star: 5, width: '33.7%' },
                  { star: 4, width: '56.5%' },
                  { star: 3, width: '9.5%' },
                  { star: 2, width: '0.3%' },
                  { star: 1, width: '0%' },
                ].map(({ star, width }, idx) => (
                  <div key={star} className={`flex items-center gap-2 mb-1 ${star === 1 ? 'opacity-60' : ''}`} data-label={`RATING_LEVEL_${star}_STARS`}>
                    <div className="flex items-center w-8">
                      <span className="text-gray-500 text-sm">{star}</span>
                      <span className="text-yellow-400 ml-1">★</span>
                    </div>
                    <div className="bg-gray-200 rounded h-2 flex-1 relative">
                      <div className="bg-yellow-400 h-2 rounded" style={{ width }}></div>
                    </div>
                  </div>
                ))}
                <div className="text-blue-700 text-xs mt-2 cursor-pointer hover:underline" id="RATING_CALCULATION">See how ratings are calculated</div>
              </div>
            </div>
          </div>
          {/* Right: Ratings by features and mentions */}
          <div className="review__rightSide flex-1 min-w-[320px]">
            <div className="review__ratingsMargin">
              <div className="list_header_semiBold text-lg mb-2 flex items-center gap-2">Ratings by features
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
              </div>
              <ul className="flex flex-wrap gap-4 mb-6">
                {featureRatings.map((f, idx) => {
                  // Circle progress: circumference = 2 * pi * r = 2*3.14*18.5 = ~116.2
                  // Value: 4.3/5 = 86%, so offset = 116.2 - (116.2*0.86) = ~16.2
                  const percent = f.value / 5
                  const circumference = 116.2
                  const offset = circumference - (circumference * percent)
                  return (
                    <li key={f.label} className="flex items-center gap-2">
                      <div className="relative">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                          <circle cx="20" cy="20" r="18.5" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                          <circle cx="20" cy="20" r="18.5" stroke={f.color} strokeWidth="3" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 20 20)" />
                        </svg>
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{f.icon}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{f.label}</div>
                        <div className="text-xs text-gray-500">{f.value} out of 5</div>
                      </div>
                    </li>
                  )
                })}
              </ul>
              {/* Popular Mentions */}
              <div className="list_header_semiBold text-lg mb-2">Popular Mentions</div>
              {/* Positive/Negative bar */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 h-3 bg-pink-100 rounded relative">
                  <div className="bg-green-500 h-3 rounded absolute left-0 top-0" style={{ width: '100%' }} title="2548 Positive Mentions"></div>
                  <div className="bg-green-300 h-3 rounded absolute left-0 top-0" style={{ width: '0%' }} title="8 Negative Mentions"></div>
                </div>
                <div className="text-green-700 font-semibold text-xs">100% Positive Mentions</div>
              </div>
              {/* Likes */}
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1 text-green-600"><FaThumbsUp className="w-5 h-5" />Likes</span>
                <ul className="flex flex-wrap gap-2">
                  {likes.map(like => (
                    <li key={like.label} className="bg-green-50 text-green-700 px-3 py-1 rounded text-xs flex items-center gap-1">{like.label} <span className="text-gray-400">({like.count})</span></li>
                  ))}
                </ul>
              </div>
              {/* Dislikes */}
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1 text-red-600"><FaThumbsDown className="w-5 h-5" />Dislikes</span>
                <ul className="flex flex-wrap gap-2">
                  {dislikes.map(dislike => (
                    <li key={dislike.label} className="bg-red-50 text-red-700 px-3 py-1 rounded text-xs flex items-center gap-1">{dislike.label} <span className="text-gray-400">({dislike.count})</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default ReviewSection