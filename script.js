"use strict";

// Mobile navigation
const navLinks = document.querySelector(".nav__links");
const mobileMenu = document.querySelector(".nav__mobile");

mobileMenu.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Message on submitting form
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.innerText = "Form submitted!";
});

// Rendering map API
var map = L.map("map").setView([50.71983, -1.88786], 14);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Using customer marker
var mapIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Adding marker to map
L.marker([50.71983, -1.88786], {icon: mapIcon}).addTo(map);
