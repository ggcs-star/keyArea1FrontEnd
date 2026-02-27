import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import ShareModal from './ShareModal'
import { useState } from 'react';


const NameArea = ({ project }) => {
  if (!project) return null;

  const logo = project.images && project.images.length > 0 ? project.images[0] : project.image;

  // 🔍 Extract values from `projectFeatures`
  const getFeatureValue = (label) => {
    const feature = project.projectFeatures?.find(f => f.label === label);
    return feature?.value;
  };

  const bhk = getFeatureValue('Configuration') ?? '2, 2.5, 3, 3.5, 4 BHK';
  const category = project.propertyCategory ?? 'Builder Floor';
  const rera = project.reraNumber ?? 'RN236AA10136/211022';

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);


  return (
    <div>
      <div className="pd-heading logoIcon pt-8 flex flex-col lg:flex-row">
        <div className="pd-heading-left">
          <div className="pd-logo">
            <img src={logo} alt={project.name} />
          </div>
          <div className="pd-title">
            <h1 className="pd-name text-xl font-bold" title={project.name}>
              {project.name}
            </h1>
            {project.founderDetails && (
              <p className="text-sm text-gray-500 mt-1">By {project.founderDetails}</p>
            )}
            {project.location && (
              <p className="pd-location text-md font-semibold text-gray-700 mt-1">{project.location}</p>
            )}

          </div>
        </div>
        <div className="pd-heading-right">
          <div className="pd-price flex flex-col items-start lg:items-end text-left lg:text-right pt-4 lg:pt-0">
            <div className="flex justify-start items-center text-gray-900">
              <span className="pd-price-lbl pr-2 text-black">Price</span>
              <i className="fa fa-inr"></i> {project.price}
            </div>
            <div className="flex justify-start items-center">
              <span className="pd-price-lbl pr-2">Status:</span>
              <span>{project.status}</span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-800 text-lg cursor-pointer" onClick={() => setIsShareModalOpen(true)}
            >
              <FaShareAlt className="mr-1" />
              Share
            </button>
            {isShareModalOpen && <ShareModal onClose={() => setIsShareModalOpen(false)} />}

          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center text-left lg:text-center relative text-[12px] leading-4 text-[#666] font-sans m-0 lg:px-2.5 py-4 pr-2 gap-3 lg:gap-0">
        <div className="mr-5 text-[16px] leading-5 text-[#333] font-medium font-sans m-0 p-0">
          <div className="pd-bhk">
            {bhk} <span>{category}</span>
          </div>
        </div>
        <div className="pd-rera text-[16px] leading-5 text-[#058374] font-semibold">
          <span>Rera : </span>
          <i className="fa fa-check"></i> {rera}
        </div>
      </div>
    </div>
  );
};

export default NameArea;
