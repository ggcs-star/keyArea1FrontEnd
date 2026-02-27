import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const FALLBACK_LOCALITY = {
  name: "Locality",
  growth: "N/A",
  growthPeriod: "Last 5 years",
  growth_percent: 0,
};

const PriceRange = ({ refProp, localityData = FALLBACK_LOCALITY, id }) => {
  const [priceGrowthData, setPriceGrowthData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiGrowthPercent, setApiGrowthPercent] = useState(0); // NEW STATE

  // Normalize locality values
  const safeLocality = {
    name:
      localityData?.name ||
      localityData?.city ||
      localityData?.area ||
      localityData?.address ||
      "Locality",

    growth: localityData?.growth || "N/A",
    growthPeriod: localityData?.growthPeriod || "Last 5 years",

    // FINAL OVERRIDE = API GROWTH PERCENT
    growth_percent: apiGrowthPercent || localityData?.growth_percent || 0,
  };

  useEffect(() => {
    const fetchPriceProjection = async () => {
      try {
        const res = await fetch(
          `https://backend.keyarea1.com/public/api/projects/${id}/price-projection`
        );

        const data = await res.json();

        // ⭐ Save API GROWTH PERCENT
        setApiGrowthPercent(data?.growth_percent || 0);

        if (data?.status && Array.isArray(data.projection)) {
          const formatted = data.projection.map((item) => ({
            year: item?.label || "Year",
            price: Number(item?.price / 100000).toFixed(2),
            display: item?.display || "",
          }));

          setPriceGrowthData(formatted);
        }
      } catch (err) {
        console.error("❌ Price Projection Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPriceProjection();
  }, [id]);

  const hasData =
    Array.isArray(priceGrowthData) && priceGrowthData.length > 0;

  return (
    <section
  id="pdPriceRange"
  ref={refProp}
  data-section="pricerange"
  className="scroll-mt-28 pd-sec bsas border border-gray-300 p-4 mt-8 rounded-lg"
>

      <div className="pd-sec-title mb-4">
        <h2 className="text-xl font-semibold">Year-wise Price Growth</h2>
      </div>

      {/* Chart */}
      <div className="pds-body">
        {loading ? (
          <p className="text-sm text-gray-500">Loading chart...</p>
        ) : hasData ? (
          <div className="w-full h-[350px]">
            <Line
              data={{
                labels: priceGrowthData.map((d) => d.year),
                datasets: [
                  {
                    label: "Price (Lac)",
                    data: priceGrowthData.map((d) => d.price),
                    borderColor: "#A44CEE",
                    backgroundColor: "rgba(164, 76, 238, 0.15)",
                    tension: 0.4,
                    fill: true,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { callback: (value) => `₹ ${value} Lac` },
                  },
                },
              }}
            />
          </div>
        ) : (
          <p className="text-xs text-gray-500 italic">
            *Price projection data is not available.
          </p>
        )}
      </div>

      {/* Locality Info */}
      <div className="w-fit border border-gray-200 p-4 mt-4 rounded-lg shadow-sm">
        <div className="text-sm font-semibold mb-2">{safeLocality.name}</div>

        <div className="flex justify-between gap-6 text-sm">
          {/* <div>
            <div className="text-green-600 font-semibold">
              {safeLocality.growth}
            </div>
            <div className="text-gray-500 text-xs">
              {safeLocality.growthPeriod}
            </div>
          </div> */}

          <div>
            <div className="text-black font-semibold">
              {safeLocality.growth_percent}% {/* FIXED */}
            </div>
            <div className="text-gray-500 text-xs">Avg. Growth</div>
          </div>
        </div>
      </div>

      {!hasData && (
        <p className="text-xs text-gray-500 italic mt-4">
          *Sample price projection shown. Actual values may vary.
        </p>
      )}
    </section>
  );
};

export default PriceRange;
