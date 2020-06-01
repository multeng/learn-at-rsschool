export default class AppView {
    constructor(city, weatherData, image, coordinates) {
        this.city = city;
        this.weather = weatherData;
        this.image = image;
        this.coordinates = coordinates;
    }


    async renderOnLoad() {

    }
}