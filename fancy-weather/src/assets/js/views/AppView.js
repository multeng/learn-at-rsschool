import createMap from './mapbox';
import { renderBackground, renderCity, renderDataTime, renderCoordinates, renderWeather } from './renderFunctions';


export default class AppView {
    constructor(city, weatherData, image, coordinates, dataSet) {
        this.city = city;
        this.weather = weatherData;
        this.image = image;
        this.coordinates = coordinates;
        this.dataSet = dataSet;
    }

    async renderOnLoad() {
        createMap(this.coordinates);
        renderBackground(this.image);
        renderCity(this.city);
        renderDataTime(this.weather);
        renderCoordinates(this.dataSet);
        renderWeather(this.weather);
    }
}