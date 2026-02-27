// FilterPanel.jsx
import React, { useState, useEffect, useMemo, useRef } from "react";
import Icons from "./Icons";

const CITIES = ["Ahmedabad", "Mumbai", "Bengaluru", "Delhi", "Pune"];

const PROPERTY_TYPES = {
  apartments: ["2BHK", "3BHK", "4BHK", "5BHK"],
  houses: ["Bungalow", "Villa", "Duplex", "Penthouse"],
  others: ["Plot", "Commercial"],
};

export default function FilterPanel({
  filters,
  setFilters,
  totalCount,
  isOpen,
  properties,
  onPropertyClick,
  savedPropertyIds,
  onToggleSave,
  onOpenDetails
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  /* Close suggestions on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Update Filter */
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  /* Suggestions */
  const suggestions = useMemo(() => {
    if (!filters.searchQuery) return [];

    const q = filters.searchQuery.toLowerCase();

    const typeList = [
      ...PROPERTY_TYPES.apartments,
      ...PROPERTY_TYPES.houses,
      ...PROPERTY_TYPES.others
    ];

    const cityMatches = CITIES.filter((c) =>
      c.toLowerCase().includes(q)
    ).map((c) => ({ type: "City", value: c }));

    const typeMatches = typeList
      .filter((t) => t.toLowerCase().includes(q))
      .map((t) => ({ type: "Type", value: t }));

    return [...cityMatches, ...typeMatches].slice(0, 6);
  }, [filters.searchQuery]);

  return (
    <div
      className={`
        w-full md:w-[420px]
        h-full overflow-hidden
        bg-white border-r
        flex flex-col shadow-xl
        fixed md:static inset-y-0 left-0
       
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* ---------------- SEARCH + FILTER HEADER ---------------- */}
      <div ref={searchRef} className="p-5 border-b bg-white">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search City, 3BHK, Villa..."
            value={filters.searchQuery}
            onChange={(e) => updateFilter("searchQuery", e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            className="w-full pl-12 pr-10 py-3.5 bg-gray-100 border rounded-xl font-medium"
          />

          <Icons.Search className="absolute left-4 top-4 text-gray-400" />

          {filters.searchQuery && (
            <button
              onClick={() => updateFilter("searchQuery", "")}
              className="absolute right-4 top-3 text-gray-400"
            >
              ✕
            </button>
          )}

          {/* Suggestions dropdown */}
          {isSearchFocused && suggestions.length > 0 && (
            <div className="absolute top-[105%] left-0 right-0 bg-white border rounded-xl shadow-lg z-50">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => updateFilter("searchQuery", s.value)}
                  className="w-full px-4 py-3 flex justify-between hover:bg-gray-50"
                >
                  <span className="font-semibold">{s.value}</span>
                  <span className="text-xs text-gray-500">{s.type}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* QUICK FILTER CHIPS */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {[{ label: "50L Budget", value: "50L" }, { label: "Villa", value: "Villa" }, { label: "3BHK", value: "3BHK" }].map(
            (chip, i) => (
              <button
                key={i}
                onClick={() => updateFilter("searchQuery", chip.value)}
                className="px-3 py-1.5 border rounded-lg bg-white text-xs font-semibold"
              >
                {chip.label}
              </button>
            )
          )}
        </div>

        <div className="flex justify-between mt-3">
          <span className="text-xs font-bold">{totalCount} Properties</span>
          <button
            onClick={() =>
              setFilters({
                searchQuery: "",
                selectedCity: "",
                selectedTypes: [],
                selectedAmenities: [],
                sortBy: "newest"
              })
            }
            className="text-xs text-blue-600 font-bold"
          >
            RESET
          </button>
        </div>
      </div>

      {/* ---------------- FILTER BODY ---------------- */}
      <div className="flex-1 p-5 overflow-y-auto">

        {/* CITIES */}
        <p className="text-xs font-bold text-gray-500 uppercase">Location</p>
        <select
          className="w-full mt-2 bg-gray-100 border rounded-xl py-3 px-3"
          value={filters.selectedCity}
          onChange={(e) => updateFilter("selectedCity", e.target.value)}
        >
          <option value="">All Cities</option>
          {CITIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* BHK FILTER */}
        <p className="mt-6 text-xs font-bold text-gray-500 uppercase">Unit Type</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {PROPERTY_TYPES.apartments.map((t) => (
            <button
              key={t}
              onClick={() =>
                updateFilter(
                  "selectedTypes",
                  filters.selectedTypes.includes(t)
                    ? filters.selectedTypes.filter((x) => x !== t)
                    : [...filters.selectedTypes, t]
                )
              }
              className={`px-3 py-1.5 text-xs rounded-lg border ${
                filters.selectedTypes.includes(t)
                  ? "bg-blue-100 border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
