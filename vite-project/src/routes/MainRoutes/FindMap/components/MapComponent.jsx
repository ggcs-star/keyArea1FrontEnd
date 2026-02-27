// MapComponent.jsx
import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DEFAULT_CENTER = [23.0225, 72.5714];
const DEFAULT_ZOOM = 12;

const formatPrice = (price) => price || "—";

/* CUSTOM PRICE MARKER */
const createCustomPriceMarkerIcon = (price, id) =>
  L.divIcon({
    html: `
      <div class="custom-marker-pin marker-${id}">
        <div class="flex flex-col items-center justify-center">
          <div class="price-label">${price}</div>
          <div class="price-triangle"></div>
          <div class="price-shadow"></div>
        </div>
      </div>
    `,
    className: "",
    iconSize: [80, 60],
    iconAnchor: [40, 55],
  });

/* CLUSTER ICON */
const createClusterIcon = (cluster) =>
  L.divIcon({
    html: `<div class="cluster-marker-inner">${cluster.getChildCount()}</div>`,
    className: "",
    iconSize: [46, 46],
    iconAnchor: [23, 23],
  });

export default function MapComponent({ properties = [], onSelectProperty }) {
  const validProps = useMemo(
    () => (properties || []).filter((p) => p.latitude && p.longitude),
    [properties]
  );

  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup
        spiderfyOnMaxZoom
        showCoverageOnHover={false}
        chunkedLoading
        iconCreateFunction={createClusterIcon}
      >
        {validProps.map((p) => (
          <Marker
            key={p.id}
            position={[p.latitude, p.longitude]}
            icon={createCustomPriceMarkerIcon(formatPrice(p.price), p.id)}
            eventHandlers={{ click: () => onSelectProperty(p) }}
          />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
