// create map
// coords = -30.031966,-51.197669
const map = L.map("mapid").setView([-30.031966, -51.197669], 13);

// tileLayer Map added
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// created icon
const icon = L.icon({
  iconUrl: "./images/map-mark.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// created popup overlay
function addMarker({ id, name, lat, lng }) {
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="./orphanage?id=${id}" class="choose-orphanage"><img src="./images/arrow-white.svg"/></a>`
  );

  // Popup Mark
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".data-orphanages span");

orphanagesSpan.forEach((span) => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }

    addMarker(orphanage);
});
