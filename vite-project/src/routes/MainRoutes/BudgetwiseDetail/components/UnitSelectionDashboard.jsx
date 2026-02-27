import React, { useState, useEffect } from "react";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const STATUS_TEXT = {
    booked: "Booked",
    unbooked: "Available",
    available: "Available",
};

const STATUS_COLORS = {
    booked: "bg-red-100 text-red-700 border-red-300",
    unbooked: "bg-green-100 text-green-700 border-green-300",
    available: "bg-green-100 text-green-700 border-green-300",
};

// ⭐ Reusable shimmer tile
const ShimmerTile = () => (
    <div className="animate-pulse p-3 rounded-xl min-w-[100px] h-12 bg-gray-200 border border-gray-300"></div>
);

const UnitSelectionDashboard = ({ projectId = 30 }) => {
    const [blocks, setBlocks] = useState([]);
    const [floors, setFloors] = useState([]);
    const [units, setUnits] = useState([]);

    const [selectedBlock, setSelectedBlock] = useState("");
    const [selectedFloor, setSelectedFloor] = useState("");

    const [projectLogo, setProjectLogo] = useState(null);
    const [sizeRange, setSizeRange] = useState(null);
    const [error, setError] = useState("");

    // ⭐ Loading states
    const [loadingBlocks, setLoadingBlocks] = useState(false);
    const [loadingFloors, setLoadingFloors] = useState(false);
    const [loadingUnits, setLoadingUnits] = useState(false);

    const BASE_URL = `https://backend.keyarea1.com/public/api/projects/${projectId}/units`;

    useEffect(() => {
        fetchData("blocks");

        const style = document.createElement("style");
        style.textContent = `
      .tippy-box[data-theme~='modern-purple'] {
        background-color: #7c3aed;
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2),
                    0 4px 6px -4px rgba(0,0,0,0.2);
        padding: 0;
      }
      .tippy-box[data-theme~='modern-purple'] .tippy-content {
        padding: 0;
      }
      .tippy-box[data-theme~='modern-purple'][data-placement^='bottom'] 
        > .tippy-arrow::before {
        border-bottom-color: #7c3aed;
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const fetchData = async (type, blockName = "", floorName = "") => {
        try {
            setError("");

            if (type === "blocks") setLoadingBlocks(true);
            if (type === "floors") setLoadingFloors(true);
            if (type === "units") setLoadingUnits(true);

            let url = BASE_URL;
            if (type === "floors") url += `?block=${blockName}`;
            if (type === "units") url += `?block=${blockName}&floor=${floorName}`;

            const response = await axios.get(url);

            if (response.data.status) {
                const items = response.data.data;

                if (response.data.project_logo) setProjectLogo(response.data.project_logo);
                if (response.data.size_range) setSizeRange(response.data.size_range);

                if (type === "blocks") setBlocks(items);
                if (type === "floors") setFloors(items);
                if (type === "units") setUnits(items);
            } else {
                setError("No data available");
            }
        } catch (err) {
            setError("Error fetching data");
        } finally {
            if (type === "blocks") setLoadingBlocks(false);
            if (type === "floors") setLoadingFloors(false);
            if (type === "units") setLoadingUnits(false);
        }
    };

    const handleBlockSelect = (block) => {
        setSelectedBlock(block);
        setSelectedFloor("");
        setFloors([]);
        setUnits([]);
        fetchData("floors", block);
    };

    const handleFloorSelect = (floor) => {
        setSelectedFloor(floor);
        setUnits([]);
        fetchData("units", selectedBlock, floor);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
                🏗️ Unit Booking Flow
            </h2>

            {error && <p className="text-center text-red-500">{error}</p>}

            {/* BLOCKS */}
            <div className="text-center">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    Select Block
                </h3>

                <div
                    className={`grid justify-center gap-4 ${
                        blocks.length >= 3
                            ? "grid-cols-3"
                            : blocks.length === 2
                            ? "grid-cols-2"
                            : "grid-cols-1"
                    }`}
                >
                    {loadingBlocks
                        ? [...Array(3)].map((_, i) => <ShimmerTile key={i} />)
                        : blocks.map((block) => (
                              <button
                                  key={block}
                                  onClick={() => handleBlockSelect(block)}
                                  className={`py-3 px-6 rounded-xl font-medium transition min-w-[100px] ${
                                      selectedBlock === block
                                          ? "bg-purple-600 text-white"
                                          : "bg-purple-100 hover:bg-purple-200 text-purple-700"
                                  }`}
                              >
                                  {block}
                              </button>
                          ))}
                </div>
            </div>

            {/* FLOORS */}
            {selectedBlock && (
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">
                        Select Floor in Block {selectedBlock}
                    </h3>

                    <div
                        className={`grid justify-center gap-4 ${
                            floors.length >= 3
                                ? "grid-cols-3"
                                : floors.length === 2
                                ? "grid-cols-2"
                                : "grid-cols-1"
                        }`}
                    >
                        {loadingFloors
                            ? [...Array(3)].map((_, i) => <ShimmerTile key={i} />)
                            : floors.map((floor) => (
                                  <button
                                      key={floor}
                                      onClick={() => handleFloorSelect(floor)}
                                      className={`py-3 px-6 rounded-xl font-medium transition min-w-[100px] ${
                                          selectedFloor === floor
                                              ? "bg-blue-600 text-white"
                                              : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                                      }`}
                                  >
                                      Floor {floor}
                                  </button>
                              ))}
                    </div>
                </div>
            )}

            {/* UNITS */}
            {selectedFloor && (
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">
                        Units in Block {selectedBlock} - Floor {selectedFloor}
                    </h3>

                    <div
                        className={`grid justify-center gap-4 ${
                            units.length >= 3
                                ? "grid-cols-3"
                                : units.length === 2
                                ? "grid-cols-2"
                                : "grid-cols-1"
                        }`}
                    >
                        {loadingUnits
                            ? [...Array(6)].map((_, i) => <ShimmerTile key={i} />)
                            : units.map((unit) => {
                                  const status = (unit.status || "").toLowerCase();
                                  const colorClass =
                                      STATUS_COLORS[status] || STATUS_COLORS.unbooked;

                                  return (
                                      <Tippy
                                          key={unit.number}
                                          animation="scale"
                                          placement="top"
                                          theme="modern-purple"
                                          content={
                                              <div className="w-52">
                                                  {projectLogo && (
                                                      <img
                                                          src={projectLogo}
                                                          alt={`Project logo ${unit.number}`}
                                                          className="w-fit h-fit object-contain bg-white rounded-t"
                                                      />
                                                  )}
                                                  <div className="p-2 bg-purple-700 text-white text-center text-sm font-medium">
                                                      {unit.number}
                                                      {sizeRange ? ` • ${sizeRange}` : ""}
                                                  </div>
                                              </div>
                                          }
                                      >
                                          <div
                                              className={`p-3 rounded-xl border text-center font-medium transition min-w-[100px] cursor-pointer ${colorClass}`}
                                          >
                                              Unit {unit.number}
                                          </div>
                                      </Tippy>
                                  );
                              })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UnitSelectionDashboard;
