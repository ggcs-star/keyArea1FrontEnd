import React, { useState, useEffect } from "react";
import { Container } from "../../../../components/Layout";
import { GradientText } from "../../../../components/Button/GradientText";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../../../../components/Button";
import { getBudgetProjects } from "../../../../../api"; // ✅ Import API
import ShimmerCard from "../../../../components/ShimmerCard";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Previous project"
  >
    <ChevronLeft size={28} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
    aria-label="Next project"
  >
    <ChevronRight size={28} />
  </button>
);

const Budgetwise = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getBudgetProjects();
        console.log("API Budget Projects:", data);
        if (data.status === "success") {
          setProjects(data.data || []);
        }
      } catch (err) {
        console.error("Error fetching budget projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleClick = () => {
    console.log('Navigating to /budgetwise');
    navigate("/budgetwise");
  };

  const handleProjectClick = (id) => {
    navigate(`/budgetwise/${id}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white">
      <Container>
        <div className="flex justify-between text-center lg:text-start mb-4">
          <GradientText>Properties in Budget: 50 Lac - 1 Cr</GradientText>
          <PrimaryBtn className="hidden lg:flex" onClick={handleClick}>View All</PrimaryBtn>
        </div>

        <div className="relative px-4 lg:px-8 my-4">
          {loading ? (
            <Slider {...settings}>
              {Array(5).fill(null).map((_, index) => (
                <div key={index} className="px-2 py-8">
                  <ShimmerCard />
                </div>
              ))}
            </Slider>
          ) : projects.length === 0 ? (
            <div className="text-center py-12 w-full">
              <p className="text-lg text-gray-500">
                No properties found in this budget range.
              </p>
            </div>
          ) : (
            <Slider {...settings}>
              {projects.map((project) => (
                <div key={project.id} className="px-2 py-8">
                  <div
                    className="group cursor-pointer transform transition-all duration-300 h-full"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 hover:border-blue-200">
                      <div className="relative overflow-hidden">
                        <img
                          src={
                            project.project.logo_image_url ||
                            "https://via.placeholder.com/300x200?text=No+Image"
                          }
                          alt={project.project.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <div className="block">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {project.project.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                            {project.project.location.area},{" "}
                            {project.project.location.city}
                          </p>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 mb-1 line-clamp-1">
                            {project.project.type}
                          </p>
                          <p className="text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors duration-300">
                            {project.configuration.price}
                          </p>
                          <p className="text-xs text-gray-500">
                            {project.configuration.size}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}

          <div className="flex justify-center">
            <PrimaryBtn
              className="flex lg:hidden justify-center"
              onClick={handleClick}
            >
              View All
            </PrimaryBtn>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Budgetwise;
