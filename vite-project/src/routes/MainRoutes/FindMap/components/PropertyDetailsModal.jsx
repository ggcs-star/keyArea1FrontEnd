import React, { useState, useMemo } from 'react';
import Icons from './Icons';

export default function PropertyDetailsModal({
  property,
  onClose,
  isSaved,
  onToggleSave,
  landmarks
}) {
  const [areaUnit, setAreaUnit] = useState('sqft');

  const getDistanceKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const nearby = useMemo(
    () =>
      (landmarks || [])
        .map((l) => ({
          ...l,
          dist: getDistanceKm(
            property.latitude,
            property.longitude,
            l.latitude,
            l.longitude
          )
        }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 5),
    [property, landmarks]
  );

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">

        <div className="w-full md:w-2/5 bg-slate-100 h-64">
          <img
            src={property.image_url || "/placeholder.jpg"}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{property.name}</h1>
              <p className="text-sm text-slate-500">{property.city}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onToggleSave(property.id)}
                className={`p-2 rounded-lg border ${isSaved ? 'bg-red-50' : 'hover:bg-slate-50'}`}
              >
                <Icons.Heart size={20} />
              </button>

              <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-lg">
                <Icons.X size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-3 bg-slate-50 rounded-xl border">
              <div className="text-xs text-slate-500">Price</div>
              <div className="text-xl font-bold">{property.price_display || "—"}</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border">
              <div className="text-xs text-slate-500">Area</div>

              <div className="text-xl font-bold">
                {areaUnit === 'sqft'
                  ? `${property.area_sqft || 0} sqft`
                  : `${((property.area_sqft || 0) * 0.092903).toFixed(1)} sqm`}
              </div>
            </div>
          </div>

          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase">Nearby</h3>
            <div className="mt-2 space-y-2">
              {nearby.map((n) => (
                <div key={n.id} className="flex items-center justify-between p-2 border rounded">
                  {n.name} <span className="text-xs text-slate-500">{n.dist.toFixed(1)} km</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase">Description</h3>
            <p className="mt-2 text-sm text-slate-600 bg-slate-50 p-4 rounded">
              {property.description || "No description available."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
