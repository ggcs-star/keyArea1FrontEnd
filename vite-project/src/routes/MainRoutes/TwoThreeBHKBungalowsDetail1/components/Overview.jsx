import React, { useState } from "react";

const Overview = ({ project, refProp }) => {
  const propertyName = project?.name || "M3M Antalya Hills";

  const defaultProjectFeatures = [
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img1.jpg",
      label: "Property Type",
      value: project?.propertyCategory || project?.type || "Builder Floor"
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img2.jpg",
      label: "Configuration",
      value: project?.bhk || project?.type || "2, 2.5, 3, 3.5, 4 BHK"
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img3.jpg",
      label: "Pricing",
      value: project?.price || "16 Lac - 11.11 Cr."
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img4.jpg",
      label: "Possession Date",
      value: project?.possession || "Dec 2026"
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img5.jpg",
      label: "Total Units",
      value: project?.totalUnits || "795 units"
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img7.jpg",
      label: "Total Area",
      value: project?.totalArea || project?.area || "8.71 acres"
    },
    {
      icon: "https://static.realestateindia.com/rei/mobile-images/pf-img9.jpg",
      label: "Possession Status",
      value: project?.possessionStatus || project?.status || "Upcoming Projects"
    }
  ];

  const projectFeatures =
    Array.isArray(project?.projectFeatures) && project.projectFeatures.length > 0
      ? project.projectFeatures
      : defaultProjectFeatures;

  const isDefault = projectFeatures === defaultProjectFeatures;
  const brochureLink = project?.brochure || "#";

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [errors, setErrors] = useState({});

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
        window.open(brochureLink, "_blank");
        // Optionally reset form
        setFormData({ name: "", email: "", mobile: "" });
        setErrors({});
      }, 300);
    }
  };

  return (
    <div id="pdOverview" ref={refProp} className="pt-5">
      <div className="text-[#333] text-xs font-sans m-0 p-0 border border-[#ddd] rounded overflow-hidden mb-5">
        <div className="border-b border-gray-200 overflow-hidden">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
          </ul>
        </div>

        <div className="flex items-center p-3 rounded bg-blue-50">
          <div className="mr-4">
            <img
              loading="lazy"
              src="https://static.realestateindia.com/rei/images/brochure_icon.jpg"
              width="34"
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

      {/* Modal */}
      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 backdrop-blur-[5px] z-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
      <h2 className="text-lg font-bold mb-4">
        Enter your details to download
      </h2>

      {/* Name Field */}
      <div className="mb-3">
        <label className="block text-sm font-medium">Name <span className="text-red-500">*</span></label>
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

      {/* Email Field */}
      <div className="mb-3">
        <label className="block text-sm font-medium">Email ID <span className="text-red-500">*</span></label>
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

      {/* Mobile Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Mobile Number <span className="text-red-500">*</span></label>
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

    </div>
  );
};

export default Overview;
