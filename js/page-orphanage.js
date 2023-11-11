const config = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
// coords = -30.031966,-51.197669
const map = L.map("mapid", config).setView([-30.031966,-51.197669], 13);

// tileLayer Map added
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// created icon
const icon = L.icon({
    iconUrl: "./images/map-mark.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Popup Mark
L
.marker([-30.031966,-51.197669], { icon })
.addTo(map);

