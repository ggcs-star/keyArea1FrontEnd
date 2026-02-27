import React from 'react';
import { Line } from 'react-chartjs-2';

const PriceRange = ({ priceGrowthData, refProp, localityData }) => {
  return (
    <section className="pd-sec bsas" id="pdPriceRange" ref={refProp}>
      <div className="my-8 bg-white p-4 border-1 border-gray-300 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Year-wise Price Growth</h3>

        <Line
          data={{
            labels: priceGrowthData.map(d => d.year),
            datasets: [
              {
                label: 'Price (Cr.)',
                data: priceGrowthData.map(d => d.price),
                borderColor: '#A44CEE',
                backgroundColor: 'rgba(164,76,238,0.1)',
                tension: 0.4,
                fill: true,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: false },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: value => `₹ ${value} Cr.`
                }
              }
            }
          }}
        />

        <div className="w-fit border border-gray-200 p-4 mt-4 rounded-lg shadow-sm">
          <div className="text-sm font-semibold mb-2">
            {localityData?.name}
          </div>
          <div className="flex justify-between gap-4 text-sm">
            <div>
              <div className="text-green-600 font-semibold">{localityData?.growth}</div>
              <div className="text-gray-500 text-xs">{localityData?.growthPeriod}</div>
            </div>
            <div>
              <div className="text-black font-semibold">{localityData?.avgRate}</div>
              <div className="text-gray-500 text-xs">Avg. Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceRange;
