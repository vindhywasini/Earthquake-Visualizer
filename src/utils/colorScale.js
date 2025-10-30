// This utility function assigns a color to an earthquake marker based on its magnitude.
// Higher magnitudes are represented with warmer (red/orange) colors,
// while lower magnitudes use cooler (yellow/green) shades for visual clarity.

export function getColor(mag) {
  // If magnitude is 6.0 or higher → strong earthquake → dark red
  if (mag >= 6) return '#d73027'

  // If magnitude is between 5.0 and 5.9 → moderate to strong → orange-red
  if (mag >= 5) return '#fc8d59'

  // If magnitude is between 4.0 and 4.9 → light to moderate → yellow
  if (mag >= 4) return '#fee08b'

  // If magnitude is between 3.0 and 3.9 → minor → light green
  if (mag >= 3) return '#d9ef8b'

  // If magnitude is below 3.0 → very minor → darker green
  return '#91cf60'
}
