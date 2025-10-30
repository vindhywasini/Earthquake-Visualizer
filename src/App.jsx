import React, { useEffect, useState } from 'react'
import MapView from './components/MapView'
import { fetchEarthquakes } from './services/usgsApi'

// The main entry point of the Earthquake Visualizer application
// This component manages the overall layout, data fetching, and error handling
export default function App() {
  // State to store fetched earthquake data (array of features)
  const [data, setData] = useState([])

  // State to store error messages, if the fetch fails
  const [error, setError] = useState('')

  // State to manage loading state while data is being fetched
  const [loading, setLoading] = useState(true)

  // useEffect runs once when the component mounts (similar to componentDidMount)
  useEffect(() => {
    let mounted = true // Flag to avoid setting state after component unmount

    // Fetch earthquake data from the USGS API
    fetchEarthquakes()
      .then(features => {
        // If component is still mounted, update state with fetched data
        if (mounted) setData(features)
      })
      .catch(err => {
        // Log error in console for debugging
        console.error(err)
        // Show a user-friendly error message in the UI
        if (mounted) setError('Failed to load earthquake data.')
      })
      .finally(() => {
        // Set loading to false once fetch completes (either success or error)
        if (mounted) setLoading(false)
      })

    // Cleanup function runs when the component unmounts
    // Prevents memory leaks or state updates on unmounted components
    return () => { mounted = false }
  }, [])

  return (
    <div className="app-root">
      {/* Header section with app title and description */}
      <header className="app-header">
        <h1>🌎 Earthquake Visualizer</h1>
        <p className="subtitle">
          Recent earthquakes (last 24 hours) · Data from USGS
        </p>
      </header>

      {/* Main content area */}
      <main className="main-content">
        {/* Show loading message while fetching data */}
        {loading && <div className="message">Loading recent earthquakes...</div>}

        {/* Show error message if something went wrong */}
        {error && <div className="error">{error}</div>}

        {/* Once data is loaded successfully, render the interactive map */}
        {!loading && !error && <MapView earthquakes={data} />}
      </main>

      {/* Footer section for attribution and tech stack info */}
      <footer className="app-footer">
        Built with React + React-Leaflet · USGS feed
      </footer>
    </div>
  )
}
