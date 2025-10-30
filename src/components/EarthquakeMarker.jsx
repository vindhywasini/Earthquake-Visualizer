import React from 'react'
import { CircleMarker, Popup } from 'react-leaflet'
import { getColor } from '../utils/colorScale'

// This component renders a single earthquake marker on the map
// Each marker’s color and size represent the earthquake’s magnitude
export default function EarthquakeMarker({ quake }) {
  // Defensive check: if the quake data is missing or incomplete, render nothing
  if (!quake || !quake.geometry || !quake.properties) return null

  // Destructure required fields from the earthquake's properties
  const { mag, place, time } = quake.properties

  // Extract coordinates safely from the geometry array [longitude, latitude, depth]
  const coords = quake.geometry.coordinates || []
  const lon = coords[0] ?? 0   // Longitude (default 0 if missing)
  const lat = coords[1] ?? 0   // Latitude (default 0 if missing)
  const depth = coords[2] ?? 0 // Depth in kilometers (default 0)

  // Define marker radius proportional to magnitude, with a minimum visible size
  const radius = Math.max(4, (mag || 0) * 4)

  return (
    // CircleMarker: renders a circular marker on the Leaflet map
    <CircleMarker
      center={[lat, lon]}                 // Marker position on map
      radius={radius}                     // Circle size based on magnitude
      pathOptions={{ color: '#000', weight: 0.5 }} // Thin black border for visibility
      fillColor={getColor(mag)}           // Fill color based on magnitude scale
      fillOpacity={0.8}                   // Slight transparency for clarity
    >
      {/* Popup appears when user clicks on a marker */}
      <Popup>
        <div className="popup">
          <strong>{place}</strong> {/* Location name */}
          <div>Magnitude: {mag ?? 'N/A'}</div> {/* Earthquake strength */}
          <div>Depth: {depth} km</div> {/* How deep it occurred */}
          <div>Time: {time ? new Date(time).toLocaleString() : 'N/A'}</div> {/* Localized time */}
        </div>
      </Popup>
    </CircleMarker>
  )
}
