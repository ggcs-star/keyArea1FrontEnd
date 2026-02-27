import React, { useEffect, useState } from "react";
import FilterPanel from "./components/FilterPanel";
import MapComponent from "./components/MapComponent";
import PropertyDetailsModal from "./components/PropertyDetailsModal";

const MIN_PRICE = 0;
const MAX_PRICE = 100000000;
const PROPERTY_TYPES = ["2BHK", "3BHK", "Villa", "Bungalow", "Plot"];

export default function FindMap() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [savedIds, setSavedIds] = useState([]);

  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedCity: "",
    priceRange: [MIN_PRICE, MAX_PRICE],
    selectedTypes: [],
    selectedAmenities: [],
    sortBy: "newest",
  });

  // ---------------------------------------------
  // SAVE / UNSAVE PROPERTY
  // ---------------------------------------------
  const toggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // ---------------------------------------------
  // BUILD QUERY PARAMS FOR API
  // ---------------------------------------------
  const buildQueryParams = () => {
    const params = new URLSearchParams();

    // 🔹 BHK TYPES → Only BHK values from selectedTypes
    const bhkValues = filters.selectedTypes.filter((t) => t.includes("BHK"));
    if (bhkValues.length > 0) params.append("bhk", bhkValues.join(","));

    // 🔹 City
    if (filters.selectedCity) params.append("city", filters.selectedCity);

    // More filters can be added here later:
    // params.append("price_min", filters.priceRange[0]);
    // params.append("price_max", filters.priceRange[1]);

    return params.toString();
  };

  // ---------------------------------------------
  // LOAD PROJECTS FROM API BASED ON FILTERS
  // ---------------------------------------------
  const loadProjects = async () => {
    try {
      const query = buildQueryParams();
      const url = query
      
        ? `https://backend.keyarea1.com/public/api/project/map?${query}`
        : `https://backend.keyarea1.com/public/api/project/map`;

      console.log("FETCHING:", url);

      const res = await fetch(url);
      const data = await res.json();

      if (data?.projects) {
        setProperties(data.projects);
      } else {
        setProperties([]);
      }
    } catch (err) {
      console.log("API Error:", err);
      setProperties([]);
    }
  };

  // ---------------------------------------------
  // INITIAL LOAD
  // ---------------------------------------------
  useEffect(() => {
    loadProjects();
  }, []);

  // ---------------------------------------------
  // RELOAD MAP DATA WHEN FILTERS CHANGE
  // ---------------------------------------------
  useEffect(() => {
    loadProjects();
  }, [filters.selectedTypes, filters.selectedCity]);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div className="flex flex-1 h-full overflow-hidden">

        {/* LEFT FILTER PANEL */}
        <FilterPanel
          filters={filters}
          setFilters={setFilters}
          properties={properties}
          totalCount={properties.length}
          isOpen={sidebarOpen}
          onPropertyClick={(p) => setSelectedProperty(p)}
          savedPropertyIds={savedIds}
          onToggleSave={toggleSave}
          onOpenDetails={(p) => setSelectedProperty(p)}
        />

        {/* RIGHT MAP */}
        <div className="flex-1 relative z-10">
          <MapComponent
            properties={properties}
            onSelectProperty={(p) => setSelectedProperty(p)}
            savedPropertyIds={savedIds}
            onToggleSave={toggleSave}
            onOpenDetails={(p) => setSelectedProperty(p)}
          />
        </div>
      </div>

      {/* PROPERTY DETAILS MODAL */}
      {selectedProperty && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isSaved={savedIds.includes(selectedProperty.id)}
          onToggleSave={toggleSave}
          landmarks={[]}
        />
      )}
    </div>
  );
}
