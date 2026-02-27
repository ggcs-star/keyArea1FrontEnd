import React from 'react'
import { FaCheck } from 'react-icons/fa'


const ProjectInfo = () => {
  return (
    <section className="ProjectInfo__wrapperWhole flex flex-col gap-2 relative">
      <div className="">
        <div
          qa-id="xidSummaryLayer"
          id="project-details"
          className="ProjectInfo___99DeskProjTitle pageComponent flex items-center gap-4 mt-3"
          data-label="SUMMARY_LAYER"
          topmost="true"
        >
          {/* <div className="ProjectInfo__imgBox w-[100px] h-[56px] p-2 border border-gray-200 rounded flex items-center justify-center bg-white">
            <img
              src="https://newprojects.99acres.com/projects/candeur_developers/candeur_twins/w4o8csx0.jpeg"
              alt="Candeur Twins Hyderabad"
              className="object-contain h-10 w-full"
            />
          </div> */}
          <h1 className="ProjectInfo__imgBox1 title_bold text-xl font-bold flex flex-col">
            Devkunj 80
            <span className="caption_subdued_medium ProjectInfo__imgBox1SubTxt text-base font-normal text-gray-500">
              <span>Vaishnodevi Circle, Ahmedabad</span>
            </span>
          </h1>
        </div>
        {/* Status Tags */}
        <div className="ProjectInfo__statusTags mt-2">
          <div className="text-center grid grid-cols-2 md:grid-cols-3 gap-2 py-2 rounded justify-center items-center">
            {/* RERA Tag */}
            <div className="flex items-center justify-center gap-1 px-2 py-1 rounded bg-green-100">
              <FaCheck className="text-green-600 w-3 h-3 mr-1" />
              <div className="text-green-800 font-semibold text-xs">RERA</div>
              <i className="info__infoTag iconS_Common_12 icon_infoIcn ml-1 text-gray-400" />
            </div>

            {/* No Brokerage Tag */}
            <span className="text-xs text-green-800 font-semibold px-2 py-1 rounded bg-green-100">
              No Brokerage
            </span>

            {/* 3D Floor Plans Available Tag */}
            <span className="text-xs font-semibold text-green-800 px-2 py-1 rounded flex justify-center items-center gap-1 bg-green-100">
              <i className="iconS_Common_12 icon_3dFloorPlanIcon" />
              3D Floor Plans Available
            </span>

            {/* +50 Top Facilities Tag */}
            <span className="text-xs font-semibold text-green-800 px-2 py-1 rounded bg-green-100">
              +50 Top Facilities
            </span>
          </div>

        </div>
        <div className="ProjectInfo__pTop pt-3" />
      </div>
    </section>
  )
}

export default ProjectInfo