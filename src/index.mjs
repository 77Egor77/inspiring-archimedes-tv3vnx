import "./styles.css";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const map = L.map("map").setView([55.78, 37.768473], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

var imageOverlay = L.imageOverlay([51.5, -0.08], {
  imageUrl: "https://i.imghippo.com/files/HxXz6052zI.png",
  ImageSize: [38, 38],
});

const customIcon = L.icon({
  iconUrl: "https://i.imghippo.com/files/HxXz6052zI.png",
  iconSize: [38, 38],
});

var imageUrl = "https://i.imghippo.com/files/wbkT6332JcQ.jpg";
var errorOverlayUrl = "https://i.imghippo.com/files/wbkT6332JcQ.jpg";
var altText =
  "Image of Newark, N.J. in 1922. Source: The University of Texas at Austin, UT Libraries Map Collection.";
var latLngBounds = L.latLngBounds([
  [55.78135, 37.768473],
  [55.766222, 37.78635],
]);

var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
  opacity: 0.9,
  errorOverlayUrl: errorOverlayUrl,
  alt: altText,
}).addTo(map);

var marker = L.marker([40.799311, -74.118464], { icon: customIcon }).addTo(map);
