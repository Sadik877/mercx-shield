function initMap() {
  const driverLocation = { lat: 12.0022, lng: 8.5919 }; // Kano coords
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: driverLocation,
  });
  new google.maps.Marker({ position: driverLocation, map: map });
}
window.onload = initMap;

