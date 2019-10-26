// Map

const displayMap = (lon, lat, zoom) => {

    document.querySelector("#map").innerHTML = "";

    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: zoom
        })
    });
}

const lon = 20;
const lat = 40;
const zoom = 6;

displayMap(lon, lat, zoom);



// AJAX


function handleResponse(response) {
    return response.json();
};

const success = (data) => {

    const countrydata = data[0];
    const name = document.querySelector("#name");
    const capital = document.querySelector("#capital");
    const population = document.querySelector("#population");
    const flag = document.querySelector("#flag");
    const btn = document.querySelector("#btn");

    name.textContent = "Name: " + countrydata.name;
    capital.textContent = "Capital: " + countrydata.capital;
    population.textContent = "Population: " + countrydata.population;
    flag.src = countrydata.flag;
    const lat = countrydata.latlng[0];
    const lon = countrydata.latlng[1];
    displayMap(lon, lat, 5);

};

const error = (error) => {
    console.error("Fetch error", error);
};



const ajaxCall = () => {

    const country = document.querySelector("#country").value;
    console.log(country);

    const URL = `https://restcountries.eu/rest/v2/name/${country}`;

    fetch(URL)
        .then(handleResponse)
        .then(success)
        .catch(error);
}

btn.addEventListener("click", ajaxCall);


