// create map
// coords = -30.031966,-51.197669
const map = L.map("mapid").setView([-30.031966,-51.197669], 13);

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

// created popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
})
.setContent('Pão dos pobres <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./images/arrow-white.svg"/></a>');

// Popup Mark
L
.marker([-30.031966,-51.197669], { icon })
.addTo(map)
.bindPopup(popup);

