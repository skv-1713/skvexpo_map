// 📍 Madurai Locations
const locations = {
  "Meenakshi Amman Temple": [9.9195, 78.1193],
  "Madurai Junction": [9.9174, 78.1196],
  "Periyar Bus Stand": [9.9179, 78.1230],
  "Goripalayam": [9.9320, 78.1252],
  "Anna Nagar": [9.9440, 78.1382],
  "Mattuthavani Bus Stand": [9.9508, 78.1680],
  "Thiruparankundram": [9.8810, 78.0737]
};

// 🚍🛺🚶 Routes
const routeInfo = [
  {
start: "Meenakshi Amman Temple",
end: "Madurai Junction",
busStop: "Periyar Bus Stand 🚌",
busNumber: "Bus 1A 🚍",
autoFare: "₹150 🛺",
walkingTime: "15 mins 🚶"
},
{
start: "Madurai Junction",
end: "Anna Nagar",
busStop: "Junction Stop 🚌",
busNumber: "Bus 48M 🚍",
autoFare: "₹250 🛺",
walkingTime: "60 mins 🚶"
},
{
start: "Periyar Bus Stand",
end: "Mattuthavani Bus Stand",
busStop: "Periyar Bus Stand 🚌",
busNumber: "Bus 77P 🚍",
autoFare: "₹150 🛺",
walkingTime: "3 hours 🚶"
},
{
start: "Meenakshi Amman Temple",
end: "Thiruparankundram",
busStop: "Periyar Bus Stop 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹300 🛺",
walkingTime: "2 hours 🚶"
},
{
start: "Meenakshi Amman Temple",
end: "Periyar Bus Stand",
busStop: "Thermoti Stop 🚌",
busNumber: "Bus 24C 🚍",
autoFare: "₹100 🛺",
walkingTime: "15 mins 🚶"
},
{
start: "Meenakshi Amman Temple",
end: "Goripalayam",
busStop: "Thermoti Stop 🚌",
busNumber: "Bus 42A 🚍",
autoFare: "₹200 🛺",
walkingTime: "30 mins 🚶"
},
{
start: "Meenakshi Amman Temple",
end: "Anna Nagar",
busStop: "Thermoti Stop 🚌",
busNumber: "Bus 26T 🚍",
autoFare: "₹300 🛺",
walkingTime: "45 mins 🚶"
},
{
start: "Meenakshi Amman Temple",
end: "Mattuthavani Bus Stand",
busStop: "Thermoti Stop 🚌",
busNumber: "Bus 77T 🚍",
autoFare: "₹350 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Madurai Junction",
end: "Meenakshi Amman Temple",
busStop: "Junction Stop 🚌",
busNumber: "Bus 22P 🚍",
autoFare: "₹150 🛺",
walkingTime: "19 mins 🚶"
},
{
start: "Madurai Junction",
end: "Goripalayam",
busStop: "Junction Stop 🚌",
busNumber: "Bus 40V 🚍",
autoFare: "₹200 🛺",
walkingTime: "41 mins 🚶"
},
{
start: "Madurai Junction",
end: "Mattuthavani Bus Stand",
busStop: "Junction Stop 🚌",
busNumber: "Bus 77V 🚍",
autoFare: "₹350 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Madurai Junction",
end: "Thiruparankundram",
busStop: "Junction Stop 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹180 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Periyar Bus Stand",
end: "Thiruparankundram",
busStop: "Periyar Bus Stand 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹200 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Periyar Bus Stand",
end: "Anna Nagar",
busStop: "Periyar Bus Stand 🚌",
busNumber: "Bus 4H 🚍",
autoFare: "₹280 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Periyar Bus Stand",
end: "Goripalayam",
busStop: "Periyar Bus Stand 🚌",
busNumber: "Bus 6G 🚍",
autoFare: "₹120 🛺",
walkingTime: "52 mins 🚶"
},
{
start: "Periyar Bus Stand",
end: "Madurai Junction",
busStop: "Periyar Bus Stand 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹50 🛺",
walkingTime: "7 mins 🚶"
},
{
start: "Periyar Bus Stand",
end: "Meenakshi Amman Temple",
busStop: "Periyar Bus Stand 🚌",
busNumber: "Bus 32M 🚍",
autoFare: "₹100 🛺",
walkingTime: "17 mins 🚶"
},
{
start: "Goripalayam",
end: "Meenakshi Amman Temple",
busStop: "Goripalayam Bus Stand 🚌",
busNumber: "Bus 22G 🚍",
autoFare: "₹150 🛺",
walkingTime: "28 mins 🚶"
},
{
start: "Goripalayam",
end: "Madurai Junction",
busStop: "Goripalayam Bus Stand 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹200 🛺",
walkingTime: "38 mins 🚶"
},
{
start: "Goripalayam",
end: "Anna Nagar",
busStop: "Goripalayam Bus Stand 🚌",
busNumber: "Bus 33B 🚍",
autoFare: "₹100 🛺",
walkingTime: "37 mins 🚶"
},
{
start: "Goripalayam",
end: "Mattuthavani Bus Stand",
busStop: "Goripalayam Bus Stand 🚌",
busNumber: "Bus 66A 🚍",
autoFare: "₹150 🛺",
walkingTime: "53 mins 🚶"
},
{
start: "Goripalayam",
end: "Thiruparankundram",
busStop: "Goripalayam Bus Stand 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹300 🛺",
walkingTime: "2 hours 🚶"
},
{
start: "Anna Nagar",
end: "Thiruparankundram",
busStop: "Anna Bus Stand 🚌",
busNumber: "Bus 45P 🚍",
autoFare: "₹100 🛺",
walkingTime: "2 hours 🚶"
},
{
start: "Anna Nagar",
end: "Mattuthavani Bus Stand",
busStop: "Anna Bus Stand 🚌",
busNumber: "Bus 77P 🚍",
autoFare: "₹100 🛺",
walkingTime: "48 mins 🚶"
},
{
start: "Anna Nagar",
end: "Goripalayam",
busStop: "Anna Bus Stand 🚌",
busNumber: "Bus 55C 🚍",
autoFare: "₹100 🛺",
walkingTime: "37 mins 🚶"
},
{
start: "Anna Nagar",
end: "Madurai Junction",
busStop: "Anna Bus Stand 🚌",
busNumber: "Bus 23A 🚍",
autoFare: "₹150 🛺",
walkingTime: "59 mins 🚶"
},
{
start: "Anna Nagar",
end: "Meenakshi Amman Temple",
busStop: "Anna Bus Stand 🚌",
busNumber: "Bus 32T 🚍",
autoFare: "₹150 🛺",
walkingTime: "45 mins 🚶"
},
{
start: "Mattuthavani Bus Stand",
end: "Meenakshi Amman Temple",
busStop: "Mattuthavani Bus Stand 🚌",
busNumber: "Bus 77T 🚍",
autoFare: "₹350 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Mattuthavani Bus Stand",
end: "Periyar Bus Stand",
busStop: "Mattuthavani Bus Stand 🚌",
busNumber: "Bus 77P 🚍",
autoFare: "₹250 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Mattuthavani Bus Stand",
end: "Goripalayam",
busStop: "Mattuthavani Bus Stand 🚌",
busNumber: "Bus 77M 🚍",
autoFare: "₹350 🛺",
walkingTime: "3 hours 🚶"
},
{
start: "Thiruparankundram",
end: "Meenakshi Amman Temple",
busStop:"Thiruparankundram Bus Stop 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹150 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Thiruparankundram",
end: "Madurai Junction",
busStop: "Thiruparankundram Bus Stop 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹150 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Thiruparankundram",
end: "Periyar Bus Stand",
busStop: "Thiruparankundram Bus Stop 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹150 🛺",
walkingTime: "1 hour 🚶"
},
{
start: "Thiruparankundram",
end: "Goripalayam",
busStop: "Thiruparankundram Bus Stop 🚌",
busNumber: "Bus 48U 🚍",
autoFare: "₹200 🛺",
walkingTime: "2 hours 🚶"
},
{
start: "Thiruparankundram",
end: "Anna Nagar",
busStop: "Thiruparankundram Bus Stop 🚌",
busNumber: "Bus 23A 🚍",
autoFare: "₹200 🛺",
walkingTime: "2 hours 🚶"
},
{
start: "Thiruparankundram",
end: "Mattuthavani Bus Stand",
busStop: "Thiruparankundram Bus Stop 🚌",
busNumber: "Bus 77C 🚍",
autoFare: "₹250 🛺",
walkingTime: "3 hours 🚶"
},
{
start: "Madurai Junction",
end: "Periyar Bus Stand",
busStop: "Junction Stop 🚌",
busNumber: "Bus 48P 🚍",
autoFare: "₹50 🛺",
walkingTime: "7 mins 🚶"
},
{
start: "Goripalayam",
end: "Mattuthavani Bus Stand",
busStop: "Goripalayam Bus Stop 🚌",
busNumber: "Bus 77D 🚍",
autoFare: "₹150 🛺",
walkingTime: "3 hours 🚶"
}
];

// 🌍 Map
const map = L.map('map').setView([9.9195, 78.1193], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

// 📍 Markers
for (let place in locations) {
  L.marker(locations[place]).addTo(map).bindPopup(`<b>${place}</b>`);
}

// 📝 Fill dropdowns
const startSelect = document.getElementById("start");
const endSelect = document.getElementById("end");
Object.keys(locations).forEach(loc => {
  startSelect.innerHTML += `<option value="${loc}">${loc}</option>`;
  endSelect.innerHTML += `<option value="${loc}">${loc}</option>`;
});

// ⭐ Recommended Routes (left panel)
const recommendedDiv = document.getElementById("recommended-list");
routeInfo.forEach(route => {
  recommendedDiv.innerHTML += `
    <div class="route-card">
      <strong>${route.start} ➝ ${route.end}</strong><br>
      ${route.busStop}<br>
      ${route.busNumber}<br>
      ${route.autoFare}<br>
      ${route.walkingTime}
    </div>`;
});

// 🔎 Search Route (right panel)
document.getElementById("search-form").addEventListener("submit", function(e){
  e.preventDefault();
  const start = startSelect.value;
  const end = endSelect.value;
  const resultDiv = document.getElementById("search-result");
  resultDiv.innerHTML = "";

  const foundRoutes = routeInfo.filter(r => r.start === start && r.end === end);
  if(foundRoutes.length){
    foundRoutes.forEach(route => {
      resultDiv.innerHTML += `
        <div class="route-card">
          <strong>${route.start} ➝ ${route.end}</strong><br>
          ${route.busStop}<br>
          ${route.busNumber}<br>
          ${route.autoFare}<br>
          ${route.walkingTime}
        </div>`;
      // Draw line
      L.polyline([locations[route.start], locations[route.end]], {color:'red'}).addTo(map);
    });
  } else {
    resultDiv.innerHTML = "<p>No route found 🚫</p>";
  }
});
