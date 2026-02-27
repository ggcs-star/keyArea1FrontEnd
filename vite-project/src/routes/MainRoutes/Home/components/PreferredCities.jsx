import React, { useEffect, useState } from "react";
import { Container } from "../../../../components/Layout";
import { GradientText } from "../../../../components/Button/GradientText";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrimaryBtn } from "../../../../components/Button";
import ad1 from "../../../../assets/home/preferredCities/ad1.png";
import ad2 from "../../../../assets/home/preferredCities/ad2.png";

// 🔹 Import API + BASE_URL
import { getPreferredCities, BASE_URL } from "../../../../../api";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Previous city"
  >
    <ChevronLeft size={28} className="lg:block hidden" />
    <ChevronLeft size={18} className="lg:hidden block" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Next city"
  >
    <ChevronRight size={28} className="lg:block hidden" />
    <ChevronRight size={18} className="lg:hidden block" />
  </button>
);

const PreferredCities = () => {
  const [showModal, setShowModal] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const { data } = await getPreferredCities();
        if (data.success) {
          setCities(data.data.areas); // ✅ API returns `areas`
        }
      } catch (err) {
        console.error("Error fetching cities:", err);
      }
    };
    fetchCities();
  }, []);

//   useEffect(() => {
//   const fetchCities = async () => {
//     try {
//       const { data } = await getPreferredCities();
//       if (data.success) {
//         console.log("Fetched cities:", data.data.areas); // full data
//         data.data.areas.forEach(city => {
//           console.log("Image path:", `${BASE_URL}${city.img}`);
//         });
//         setCities(data.data.areas);
//       }
//     } catch (err) {
//       console.error("Error fetching cities:", err);
//     }
//   };
//   fetchCities();
// }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="lg:mt-20 py-8 bg-white">
      <Container>
        <div className="text-center lg:text-start lg:mb-8">
          <GradientText>Find Property</GradientText>
        </div>

        <div className="relative px-4 lg:px-8 lg:my-4">
          <Slider {...settings}>
            {cities.map((city, index) => (
              <div key={index} className="px-2 py-4">
                <a
                  href={`/buy/${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group block bg-white overflow-hidden transition-shadow duration-300 flex flex-col items-center"
                >
                  <div className="relative w-36 h-36 flex items-center justify-center hover:overflow-hidden">
                    <img
                      src={`${city.img}`} // ✅ Use BASE_URL from api.js
                      alt={`${city.name} Properties`}
                      className="h-28 w-28 lg:w-32 lg:h-32 object-contain group-hover:scale-105 hover:overflow-hidden transition-transform duration-300 rounded-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <h3 className="text-sm lg:text-lg font-semibold text-gray-800 mb-1">
                      {city.name}
                    </h3>
                    <p className="text-[12px] lg:text-sm text-gray-600">
                      <span className="font-bold">
                        {city.total_projects}
                      </span>{" "}
                      + Properties
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center">
          <PrimaryBtn onClick={() => setShowModal(true)}>View More Cities</PrimaryBtn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 mx-auto">
            <img src={ad1} alt="ad1" className="w-[100%] object-contain h-full" />
            <img src={ad2} alt="ad2" className="w-[100%] object-cover h-full" />
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl lg:w-[50vw] max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Explore Buy / Sell Property in Ahmedabad
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap gap-4">
                  {cities.map((city, index) => (
                    <a
                      key={index}
                      href={`/${city.name.toLowerCase().replace(/\s+/g, "-")}-property/`}
                      className="inline-block border-1 border-gray-300 shadow-2xl hover:border-red-500 rounded-full px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                    >
                      {city.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default PreferredCities;
