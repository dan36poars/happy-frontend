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

// marker
let marker =
  // create and add markers
  map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    //clean marker icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
  });

// galery manager (select photos)
function addPhotoField() {
  // get container images in #images
  const container = document.querySelector("#images");
  // get container to duplicate .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realize clone from last image add
  const newFieldContainer =
    fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  // check if field is empty
  const input = newFieldContainer.children[0];

  if (input.value === "" || container.children.length > 9) {
    return;
  }

  // clear field before add images container
  newFieldContainer.children[0].value = "";

  // add image clone to container #images
  container.appendChild(newFieldContainer);
}

// delete field
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.previousElementSibling.value = ""; // clean field value
    return;
  }

  span.parentNode.remove(); // remove field
}

// select button yes or not
function toggleSelect(event) {
  const buttonClicked = event.currentTarget;

  // remove active class from other button
  const buttonRemove = document.querySelectorAll(".button-select button");
  buttonRemove.forEach((button) => button.classList.remove("active"));

  // add active class in button clicked
  buttonClicked.classList.add("active");

  // update input hidden from open on weekends
  const toggleValue = document.querySelector('[name="open-on-weekends"]');
  
  // get input and update dataset
  toggleValue.value = buttonClicked.dataset.value;

}
