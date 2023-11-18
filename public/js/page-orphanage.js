const config = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
// coords = -30.031966,-51.197669

// Popup Mark

const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

const map = L.map("mapid", config).setView([lat, lng], 16);

// tileLayer Map added
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// created icon
const icon = L.icon({
  iconUrl: "./images/map-mark.svg",
  iconSize: [40, 40],
  iconAnchor: [0, 0],
  popupAnchor: [192, 65],
});

L.marker([lat, lng], { icon }).addTo(map);

// Image galery

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes active
  const buttons = document.querySelectorAll(".images button");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container da imagem selecionada
  imageContainer.src = image.src;

  // adicionar a classe active no elemento clicado
  button.classList.add("active");
}
