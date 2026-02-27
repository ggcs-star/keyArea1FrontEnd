import React, { useRef, useEffect } from 'react'
import { FaInfoCircle, FaDownload, FaExpand } from 'react-icons/fa'

const Brochure = () => {


  // Path relative to public directory
  const pdfUrl = './pdf/devkunj.pdf'
  const iframeRef = useRef(null)

  // Fullscreen handler
  const handleFullScreen = () => {
    const iframe = iframeRef.current
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen()
      } else if (iframe.mozRequestFullScreen) { /* Firefox */
        iframe.mozRequestFullScreen()
      } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        iframe.webkitRequestFullscreen()
      } else if (iframe.msRequestFullscreen) { /* IE/Edge */
        iframe.msRequestFullscreen()
      }
    }
  }

  return (
    <section className=" my-8">
      {/* Heading and Info */}
      <div className="flex items-center justify-between pb-5">
        <div>
          <h2 className="text-xl font-bold mb-1">View official brochure</h2>
          <div className=" text-gray-500">Devkunj Brochure & Payment Plan</div>
        </div>
        <FaInfoCircle className="text-blue-500 w-6 h-6 ml-4" title="Info" />
      </div>
      {/* PDF Preview and Controls */}
      <div className="bg-black rounded-lg p-4 flex flex-col items-center relative mb-6">
        <div className="flex items-center justify-between w-full mb-2">
          <a href={pdfUrl} download className=" bg-white rounded-full p-2 shadow hover:bg-blue-100 transition" title="Download Brochure">
            <FaDownload className="text-red-500 w-6 h-6" />
          </a>
          <button onClick={handleFullScreen} className=" bg-white rounded-full p-2 shadow hover:bg-blue-100 transition" title="Full Screen">
            <FaExpand className="text-red-500 w-6 h-6" />
          </button>
        </div>
        {/* PDF Preview */}
        <div className="w-full flex flex-col items-center justify-center min-h-[300px] bg-gray-900 rounded-lg">
          <iframe
            ref={iframeRef}
            src={pdfUrl}
            title="Brochure PDF"
            width="100%"
            height="600px"
            className="rounded-lg border shadow"
            allowFullScreen
          />
        </div>
      </div>
      {/* Payment Plan Download Card */}
      <div className="flex items-center bg-white rounded-lg shadow p-4 gap-4 max-w-4xl">
        <div className="flex-shrink-0">
          <img src="https://static.99acres.com/universalapp/img/downloadpriceList.png" alt="Download Payment Plan" className="w-16 h-16 object-contain" />
        </div>
        <div className="flex-1">
          <div className="list_header_bold text-base font-semibold mb-1">Download Payment Plan of Devkunj 80</div>
        </div>
        <a href={pdfUrl} download className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 font-semibold shadow">
          <FaDownload className="w-5 h-5" />
          <span>Download</span>
        </a>
      </div>
    </section>
  )
}

export default Brochure