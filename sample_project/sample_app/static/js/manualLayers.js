
  // Initialize the map centered on Egypt
  var map = L.map('map').setView([26.8206, 30.8025], 6); // Centered on Egypt

  // Add a basemap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Define sample data for layers representing locations in Egypt
  var cairoPoint = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444] // Coordinates for Cairo, Egypt
    }
  };

  var alexandriaLine = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [29.9511, 31.2001], // Alexandria
        [31.2357, 30.0444]  // Cairo
      ]
    }
  };

  var aswanPolygon = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [32.8908, 24.0889], // Aswan
          [32.8765, 24.0123], // Aswan
          [32.6443, 24.0790], // Aswan
          [32.6539, 24.1926], // Aswan
          [32.8908, 24.0889]  // Aswan
        ]
      ]
    }
  };

  // Define styles for each layer
  var pointStyle = {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.8
  };

  var lineStyle = {
    color: 'blue',
    weight: 3
  };

  var polygonStyle = {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5
  };

  // Add vector layers with styles
  //L.geoJSON(sample, {style: pointStyle}).addTo(map);
  L.geoJSON(alexandriaLine, {style: lineStyle}).addTo(map);
  L.geoJSON(aswanPolygon, {style: polygonStyle}).addTo(map);