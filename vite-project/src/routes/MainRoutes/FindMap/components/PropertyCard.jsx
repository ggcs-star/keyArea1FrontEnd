import React from 'react';
import Icons from './Icons';

export default function PropertyCard({
  property,
  compact = false,
  onClick,
  selected,
  isSaved,
  onToggleSave,
  onOpenDetails
}) {
  return (
    <div
      onClick={onClick}
      className={`group bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex border ${
        selected ? 'border-blue-500' : 'border-gray-100'
      }`}
    >
      <div className={`${compact ? 'w-36 min-w-[9rem]' : 'w-full h-52'}`}>
        <img
          src={property.image_url || "/placeholder.jpg"}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h3 className="font-bold text-slate-900 line-clamp-1 text-sm">
            {property.name}
          </h3>

          <div className="flex items-center gap-1 mb-2 text-xs text-slate-500">
            <Icons.MapPin size={10} /> <span>{property.city}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Price</div>
            <div className="font-extrabold text-slate-900">
              {property.price_display || "—"}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Size</div>
            <div className="text-xs font-bold">
              {(property.area_sqft || 0) + " sq.ft"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
