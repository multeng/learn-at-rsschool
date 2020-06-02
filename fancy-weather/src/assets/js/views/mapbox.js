import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibXVsdGVuZyIsImEiOiJja2F0bzVoNnYwODFmMnlwZ21vd2t2dnFmIn0.ZYXpZq4zYY_qgP60s2-dIg';

export default function createMap(coordinates) {
    const { lat, lng } = coordinates;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [lng, lat],
        zoom: 10,
        pitch: 30
    });
    console.log(map);

    // const maker = new mapboxgl.Maker()
    //     .setLngLat([lng, lat])
    //     .addTo(map);

    // console.log(maker);
}