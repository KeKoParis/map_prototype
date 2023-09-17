function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function error() {
    document.write("Can't get location")
}


function success(position) {

    let element = document.getElementById("coordinates");
    let text = document.createTextNode("There's your location:\n"
        + position.coords.latitude + " "
        + position.coords.longitude);

    element.appendChild(text);

    let userLocation = position.coords.latitude + "_" + position.coords.longitude;
    fetch("/", {method: "POST", body: JSON.stringify(userLocation)},);


    let map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
    let layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    map.addLayer(layer)
    let marker = L.marker([position.coords.latitude, position.coords.longitude])
    marker.addTo(map)
}


getLocation()


