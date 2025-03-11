// Loading area function
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#loading").style.visibility = "visible";
  } else {
      document.querySelector(
        "#loading").style.visibility = "hidden";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
      document.querySelector('.active-link')?.classList.remove('active-link');
      this.classList.add('active-link');
  });
});


document.addEventListener('slide.bs.carousel', function(event){
    var activeSlide = event.to;
switch (activeSlide) {
    case 0:
    document.getElementById("place").textContent = 'TOKYO';
    document.getElementById("jpplace").textContent = '東京 (とうきょう)';
    break;
    case 1:
    document.getElementById("place").textContent = 'KYOTO';
    document.getElementById("jpplace").textContent = '京都 (きょうと)';
    break;
    case 2:
    document.getElementById("place").textContent = 'OSAKA';
    document.getElementById("jpplace").textContent = '大阪 (おおさか)';
    break;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the map
  if (document.getElementById('japan-map')) {
    try {
      // Center of Japan
      const map = L.map('japan-map').setView([36.2048, 138.2529], 5);

      // Add dark mode map tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19
      }).addTo(map);
      
      // Add Japan outline
      fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/JPN.geo.json')
        .then(response => response.json())
        .then(data => {
          L.geoJSON(data, {
            style: {
              color: "#ff0000",
              weight: 2,
              opacity: 0.8,
              fillColor: "#ff0000",
              fillOpacity: 0.1
            }
          }).addTo(map);
        })
        .catch(error => {
          console.error('Error loading Japan GeoJSON:', error);
        });
      
      // Create custom icon - use your logo SVG
      const japanIcon = L.icon({
        iconUrl: 'images/icons/map-pin.svg', 
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });
      
      // Add markers for popular destinations
      const destinations = [
        { name: "Tokyo", lat: 35.6762, lng: 139.6503, desc: "Japan's bustling capital with a mix of ultramodern and traditional." },
        { name: "Kyoto", lat: 35.0116, lng: 135.7681, desc: "Former capital known for its numerous temples and gardens." },
        { name: "Osaka", lat: 34.6937, lng: 135.5023, desc: "Known for its modern architecture, street food and nightlife." },
        { name: "Sapporo", lat: 43.0618, lng: 141.3545, desc: "Capital of Hokkaido, famous for snow festivals and beer." },
        { name: "Fukuoka", lat: 33.5904, lng: 130.4017, desc: "Coastal city on Kyushu Island, known for ancient temples and delicious ramen." },
        { name: "Hiroshima", lat: 34.3853, lng: 132.4553, desc: "Modern city known for its Peace Memorial Park and historical significance." }
      ];
      
      // Add markers to map
      destinations.forEach(dest => {
        const marker = L.marker([dest.lat, dest.lng], {icon: japanIcon}).addTo(map);
        
        marker.bindPopup(`
          <div class="map-popup-content">
            <h4>${dest.name}</h4>
            <p>${dest.desc}</p>
          </div>
        `);
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }
});


