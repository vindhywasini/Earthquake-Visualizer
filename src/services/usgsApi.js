// This function fetches real-time earthquake data from the USGS (United States Geological Survey) API
export async function fetchEarthquakes() {
  // Public API endpoint providing earthquake data for the past 24 hours in GeoJSON format
  const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'

  // Fetch the data asynchronously from the API
  const res = await fetch(url)

  // Error handling: if the HTTP response is not successful, throw an error
  if (!res.ok) throw new Error('Network response was not ok')

  // Parse the response body as JSON
  const data = await res.json()

  // Return the list of earthquake features (each representing an earthquake event)
  // If features are missing, return an empty array to avoid runtime errors
  return data.features || []
}
