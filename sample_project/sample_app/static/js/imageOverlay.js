// Initialize the Leaflet map
var map = L.map('map').setView([29.9773, 31.1325], 15); // Centered on the Pyramids of Giza

// Add a base map layer (optional)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Array of image URLs and bounds
var imageOverlays = [
    {
        url: 'path/to/your/first/image.jpg',
        bounds: [[29.9777, 31.1283], [29.9751, 31.1383]],
        data: 'Image 1 data' // Additional data for the image
    },
    {
        url: '../data/pyramids.jpg',
        bounds: [[29.98, 31.13], [29.975, 31.14]],
        data: 'Image 2 data' // Additional data for the image
    },
    // Add more image URLs, bounds, and data as needed...
];

// Loop through the array and add image overlays
imageOverlays.forEach(function(imageOverlay) {
    var overlay = L.imageOverlay(imageOverlay.url, imageOverlay.bounds, {interactive: true}).addTo(map);

    // Hover action
    overlay.on('mouseover', function(event) {
        var popup = L.popup()
            .setLatLng(event.latlng)
            .setContent(imageOverlay.data)
            .openOn(map);
    });

    // Remove popup when mouse leaves the image
    overlay.on('mouseout', function(event) {
        map.closePopup();
    });
});
