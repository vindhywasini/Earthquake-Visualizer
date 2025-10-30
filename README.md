# 🌍 Earthquake Visualizer

## 📖 Overview
**Earthquake Visualizer** is a simple, interactive web application that displays recent earthquake activity around the world.  
It helps users (like geography students) analyze and understand global seismic patterns in real time.

The app fetches data from the **USGS Earthquake API** and plots them on a world map using **Leaflet.js** via **React-Leaflet**.

---

## 👩‍🎓 User Persona
**Name:** Casey  
**Occupation:** Geography Student  
**Need:** Casey wants to visualize recent earthquake activity around the world to understand seismic patterns.

---

## 🚀 Features
✅ Interactive world map showing recent earthquakes  
✅ Real-time data from the **USGS Earthquake API**  
✅ Color-coded markers by magnitude  
✅ Popups showing details like magnitude, location, depth, and time  
✅ Works on both desktop and mobile  
✅ Graceful error handling and loading messages  

---

## 🎨 Color Legend (Magnitude → Color)

| Magnitude Range | Color       | Meaning                     |
|------------------|-------------|------------------------------|
| < 3.0            | 🟢 Green     | Minor tremor (barely felt)   |
| 3.0 – 3.9        | 🟡 Light Green | Light earthquake           |
| 4.0 – 4.9        | 🟠 Yellow     | Moderate quake              |
| 5.0 – 5.9        | 🔴 Orange     | Strong quake                |
| ≥ 6.0            | 🔴 Dark Red   | Severe quake (major impact) |

---

## ⚙️ Tech Stack
- **React (Vite)** – Frontend Framework  
- **React-Leaflet** – Map rendering  
- **Leaflet.js** – Interactive map engine  
- **Plain CSS** – Styling  
- **USGS Earthquake API** – Public earthquake data source  

---

## 🌐 API Used
**Endpoint:**  
[https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson)

---

## 🧩 Project Structure

earthquake-visualizer-vite/
├── public/
├── src/
│ ├── components/
│ │ ├── MapView.jsx
│ │ ├── EarthquakeMarker.jsx
│ ├── services/
│ │ └── usgsApi.js
│ ├── utils/
│ │ └── colorScale.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
├── vite.config.js
└── README.md


---

## 🧠 How It Works
1. On app load, it fetches the last 24 hours of earthquake data from USGS.  
2. Each earthquake is represented by a colored circle on the map.  
3. The size and color of the circle represent the magnitude.  
4. Clicking a circle opens a popup with details.  


