import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container } from "../../../../components/Layout";
import { get5BhkProperty } from "../../../../../api"; // API for projects
import { useNavigate } from "react-router-dom";

const FiveBHKAll = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await get5BhkProperty();
        if (data.status === "success") {
          setProjects(data.data || []);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Filter + search logic
  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.project.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || p.project.type === category;
    return matchesSearch && matchesCategory;
  });

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-white">
      <Container>
        {/* ✅ Banner Carousel */}
        <Slider {...bannerSettings} className="mb-6 rounded-lg overflow-hidden shadow-md">
          <img src="/images/banner1.png" alt="Banner 1" className="w-full h-60 object-cover" />
          <img src="/images/banner2.png" alt="Banner 2" className="w-full h-60 object-cover" />
          <img src="/images/banner3.png" alt="Banner 3" className="w-full h-60 object-cover" />
        </Slider>

        <div className="flex gap-6">
          {/* ✅ Sidebar Filter */}
          <aside className="w-64 hidden lg:block border border-gray-100 rounded-lg p-4 shadow-md bg-white">
            <h3 className="font-semibold text-xl mb-4 text-gray-800">Select Category</h3>
            <ul className="space-y-3">
              <li>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="all"
                    checked={category === "all"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="text-primary focus:ring-0"
                  />
                  <span className="text-lg text-gray-700">All</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="2BHK"
                    checked={category === "2BHK"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="text-primary focus:ring-0"
                  />
                  <span className="text-lg text-gray-700">2 BHK</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="3BHK"
                    checked={category === "3BHK"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="text-primary focus:ring-0"
                  />
                  <span className="text-lg text-gray-700">3 BHK</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="4BHK"
                    checked={category === "4BHK"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="text-primary focus:ring-0"
                  />
                  <span className="text-lg text-gray-700">4 BHK</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="5BHK"
                    checked={category === "5BHK"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="text-primary focus:ring-0"
                  />
                  <span className="text-lg text-gray-700">5 BHK</span>
                </label>
              </li>
            </ul>
          </aside>

          {/* ✅ Main Content */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Search + Sort */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <input
                type="text"
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select className="border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Sort By</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>

            {/* Projects */}
            {loading ? (
              <p className="text-center py-12 text-gray-500">Loading properties...</p>
            ) : filteredProjects.length === 0 ? (
              <p className="text-center py-12 text-gray-500">
                No properties match your filters.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white cursor-pointer"
                  >
                    <div className="overflow-hidden rounded-t-md">
                      <img
                        src={project.project.logo_image_url || "https://via.placeholder.com/300"}
                        alt={project.project.name}
                        className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{project.project.name}</h3>
                      <p className="text-sm text-gray-600">{project.project.location.city}</p>
                      <p className="text-sm text-gray-500">{project.project.type}</p>
                      <p className="font-semibold text-primary">{project.configuration.price}</p>
                      <p className="text-xs text-gray-400">Size: {project.configuration.size}</p>
                    </div>
                  </div>

                ))}
              </div>
            )}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default FiveBHKAll;
