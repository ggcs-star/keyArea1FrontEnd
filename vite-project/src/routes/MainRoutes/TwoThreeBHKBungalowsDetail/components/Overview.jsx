import React, { useState } from "react";
import SideBySidePDFViewer from "./SideBySidePDFViewer";

const Overview = ({ project, builder, bhkUnits, refProp, totalPrice,totalSize }) => {
  const propertyName = project?.name || "M3M Antalya Hills";


  console.log('📌 Overview project data:', project);
  console.log('📌 Overview UNIT data:', bhkUnits);
  console.log('📌 Overview UNIT data:', totalPrice.price);


  const defaultProjectFeatures = [
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg",
      label: "Property Type",
      value: project?.propertyCategory || project?.type || "Builder Floor",
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg",
      label: "Configuration",
      value: project?.bhk || project?.type || "2, 2.5, 3, 3.5, 4 BHK",
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg",
      label: "Pricing",
      value: project?.price || "16 Lac - 11.11 Cr.",
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg",
      label: "Possession Date",
      value: project?.possession || "Dec 2026",
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg",
      label: "Total Units",
      value: project?.totalUnits || "795 units",
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg",
      label: "Total Area",
      value: project?.totalArea || project?.area || "8.71 acres",
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg",
      label: "Possession Status",
      value:
        project?.possessionStatus || project?.status || "Upcoming Projects",
    },
  ];

  const projectFeatures =
    Array.isArray(project?.projectFeatures) && project.projectFeatures.length > 0
      ? project.projectFeatures
      : defaultProjectFeatures;

  const isDefault = projectFeatures === defaultProjectFeatures;

  // 🟢 Brochure handling
  const rawBrochureLink = project?.brochure || "";
  const brochureLink = (() => {
    if (!rawBrochureLink) return null;

    // Match with /d/<id>/
    const fileIdMatch = rawBrochureLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/uc?export=preview&id=${fileIdMatch[1]}`;
    }

    // Match with ?id=<id>
    const ucIdMatch = rawBrochureLink.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (ucIdMatch && ucIdMatch[1]) {
      return `https://drive.google.com/uc?export=preview&id=${ucIdMatch[1]}`;
    }

    // Fallback
    return rawBrochureLink;
  })();

  // State
  const [showModal, setShowModal] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});



  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Valid email is required";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      errs.mobile = "Valid 10-digit mobile number required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setShowModal(false);
      setTimeout(() => {
        setShowPdfModal(true);
        setFormData({ name: "", email: "", mobile: "" });
        setErrors({});
      }, 300);
    }
  };

  return (
    <div id="pdOverview" ref={refProp} className="scroll-mt-28 pt-5">
      {/* Features */}
      <div className="text-[#333] text-xs font-sans m-0 p-0 border border-[#ddd] rounded overflow-hidden mb-5">
        <div className="border-b border-gray-200 overflow-hidden">
          {/* <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {projectFeatures.map((feature, index) => (
              <li key={index} className="flex items-center p-3">
                <div className="mr-3 flex-shrink-0">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={feature.icon}
                    width="27"
                    height="27"
                    alt={feature.label}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{feature.label}</p>
                  <p className="font-semibold text-sm text-gray-800">
                    {feature.value}
                  </p>
                </div>
              </li>
            ))}
          </ul> */}

          <div id="pdOverview" ref={refProp} className="pt-5">
            {/* Features */}
            <div className="text-[#333] text-xs font-sans m-0 p-0 border border-[#ddd] rounded overflow-hidden mb-5">
              <div className="border-b border-gray-200 overflow-hidden">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Manually mapping the features from the database */}
                  <li className="flex items-center p-3">
                    <div className="mr-3 flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg"
                        width="27"
                        height="27"
                        alt="Property Type"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Property Type</p>
                      <p className="font-semibold text-sm text-gray-800">{project.type}</p>
                    </div>
                  </li>

                  <li className="flex items-center p-3">
                    <div className="mr-3 flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg"
                        width="27"
                        height="27"
                        alt="Configuration"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Configuration</p>
                      <p className="font-semibold text-sm text-gray-800">
                        {Array.isArray(bhkUnits) && bhkUnits.length > 0 ? (
                          bhkUnits.map((unit, index) => (
                            <span key={index}>
                              {unit.bhkType}
                              {index < bhkUnits.length - 1 && ", "}
                            </span>
                          ))
                        ) : (
                          <span>No configurations available</span>
                        )}
                      </p>

                    </div>
                  </li>

                  <li className="flex items-center p-3">
                    <div className="mr-3 flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg"
                        width="27"
                        height="27"
                        alt="Pricing"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Pricing</p>
                      <p className="font-semibold text-sm text-gray-800">{totalPrice.price}</p>
                    </div>
                  </li>

                  <li className="flex items-center p-3">
                    <div className="mr-3 flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg"
                        width="27"
                        height="27"
                        alt="Possession Date"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Possession Date</p>
                      <p className="font-semibold text-sm text-gray-800">
                        {Array.isArray(bhkUnits) && bhkUnits.length > 0 ? (
                          <span>{bhkUnits[0].date}</span> // Displays only the first one
                        ) : (
                          <span>No configurations available</span>
                        )}

                      </p>
                    </div>
                  </li>

                  <li className="flex items-center p-3">
                    <div className="mr-3 flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg"
                        width="27"
                        height="27"
                        alt="Total Units"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Total Units</p>
                      <p className="font-semibold text-sm text-gray-800">80 units</p>
                    </div>
                  </li>

                  <li className="flex items-center p-3">
                    <div className="mr-3 flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg"
                        width="27"
                        height="27"
                        alt="Total Area"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Total Area</p>
                      <p className="font-semibold text-sm text-gray-800">{totalSize.size}</p>
                    </div>
                  </li>

                  <li className="flex items-center p-3">
                    <div className="mr-3 flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg"
                        width="27"
                        height="27"
                        alt="Possession Status"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Possession Status</p>
                      <p className="font-semibold text-sm text-gray-800">{project.phase}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>

        {/* Brochure Section */}
        <div className="flex items-center p-3 rounded bg-blue-50">
          <div className="mr-4">
            <img
              loading="lazy"
              src="https://static.realestateindia.com/rei/images/brochure_icon.jpg"
              width="34a"
              height="41"
              alt="Brochure"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="font-semibold">
              Download Brochure of
              <span className="block font-normal text-sm">{propertyName}</span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="hover:bg-red-500 hover:border-transparent border border-primary hover:text-white rounded-lg p-2 flex items-center gap-2 text-red-500 font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="54.13 48 402 402"
                className="fill-current"
              >
                <path d="M255.13 385.54a15 15 0 0 1-11.14-5L103.67 224.93a15 15 0 0 1 11.14-25H171V63a15 15 0 0 1 15-15h138.3a15 15 0 0 1 15 15v136.89h56.16a15 15 0 0 1 11.14 25L266.27 380.58a15 15 0 0 1-11.14 4.96Zm-106.6-155.65 106.6 118.25 106.61-118.25H324.3a15 15 0 0 1-15-15V78H201v136.89a15 15 0 0 1-15 15Z" />
                <path d="M390.84 450H119.43a65.37 65.37 0 0 1-65.3-65.29v-38.17a15 15 0 0 1 30 0v38.17a35.34 35.34 0 0 0 35.3 35.29h271.41a35.33 35.33 0 0 0 35.29-35.29v-38.17a15 15 0 0 1 30 0v38.17A65.37 65.37 0 0 1 390.84 450Z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>

        {isDefault && (
          <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 italic">
              *Sample project features shown. Actual details may vary by
              project.
            </p>
          </div>
        )}
      </div>

      {/* Form Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 backdrop-blur-[5px] z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-lg font-bold mb-4">
              Enter your details to download
            </h2>

            {/* Name */}
            <div className="mb-3">
              <label className="block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="block text-sm font-medium">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit & Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-[5px] z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] relative">
            <button
              onClick={() => setShowPdfModal(false)}
              className="absolute top-3 right-3 bg-gray-300 text-gray-800 hover:text-white px-3 py-1 rounded cursor-pointer hover:bg-gray-500"
            >
              ✕
            </button>

            {brochureLink ? (
              <SideBySidePDFViewer
                fileUrl={brochureLink}
                onError={() => {
                  setShowPdfModal(false);
                  window.open(brochureLink, "_blank");
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full p-6">
                <p className="text-gray-600">Brochure not available.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
