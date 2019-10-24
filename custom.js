
function success(position) {
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
function error(error) {
    console.log(error);
}

if (navigator.geolocation) {
    console.log("ok");
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    console.log("not ok");
}