import createMap from './mapbox';


export default class AppView {
    constructor(city, weatherData, image, coordinates) {
        this.city = city;
        this.weather = weatherData;
        this.image = image;
        this.coordinates = coordinates;
    }

    set City(newCity) {
        this.city = newCity;
    }
    set Coordinates(newCoordinates) {
        this.coordinates = newCoordinates;
    }

    async renderOnLoad() {
        createMap(this.coordinates);
    }
}