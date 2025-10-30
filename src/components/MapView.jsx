import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import EarthquakeMarker from './EarthquakeMarker'
import 'leaflet/dist/leaflet.css'

// MapView component renders the main interactive map and all earthquake markers
export default function MapView({ earthquakes }) {
  // Default map center (latitude, longitude) — roughly centered around the equator
  const center = [20, 0]

  // Default zoom level (lower = zoomed out to show more of the world)
  const zoom = 2

  return (
    <div className="map-wrapper">
      {/* 
        MapContainer: Main Leaflet map wrapper.
        - center: sets initial map position
        - zoom: sets initial zoom level
        - scrollWheelZoom: allows users to zoom using mouse scroll
        - style: ensures the map fills the parent container
      */}
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        {/* 
          TileLayer: provides the map’s visual tiles (background images)
          - url: the tile server URL (using OpenStreetMap free tiles)
          - attribution: credits OpenStreetMap contributors (required by license)
        */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 
          Loop through all earthquake data and render a marker for each one.
          Each marker is a CircleMarker component from EarthquakeMarker.js.
          - key: unique earthquake ID (improves React rendering performance)
          - quake: passes the earthquake data as a prop
        */}
        {earthquakes.map(eq => (
          <EarthquakeMarker key={eq.id} quake={eq} />
        ))}
      </MapContainer>
    </div>
  )
}
