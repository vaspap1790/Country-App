// Map
function successMap(position) {
    console.log(position);
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]),
            zoom: 5
        })
    });
}

function errorMap(error) {
    console.log(error);
}

if (navigator.geolocation) {
    console.log("ok");
    navigator.geolocation.getCurrentPosition(successMap, errorMap);
} else {
    console.log("not ok");
}


// AJAX

const URL = "";

function handleResponse(response) {
    return response.json();
};

function successAPI(data) {
    console.log(data);

};

function errorAPI(error) {
    console.log(error);
};

fetch(URL)
    .then(handleResponse)
    .then(successAPI)
    .catch(errorAPI);