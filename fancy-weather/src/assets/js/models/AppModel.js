export default class AppModel {
    constructor(geoLocationApi, weatherApi, imagesApi, coordinatesApi) {
        this.geoLocationApi = geoLocationApi;
        this.weatherApi = weatherApi;
        this.imagesApi = imagesApi;
        this.coordinatesApi = coordinatesApi;
    }

    async getLocations() {
        const { url } = this.geoLocationApi;

        return fetch(url)
            .then(res => res.json())
            .then(res => res.city.replace(/'/, ''));
    }

    async getWeather(currentCity) {
        let { url } = this.weatherApi;
        url = url.replace(/city/, currentCity);
        return fetch(url)
            .then(res => res.json())
            .then(res => res);
    }

    async getImage() {
        const { url } = this.imagesApi;

        return fetch(url)
            .then(res => res.json())
            .then(res => res.links.download);
    }

    async getCoordinates(currentCity) {
        let { url } = this.coordinatesApi;
        url = url.replace(/city/, currentCity);
        return fetch(url)
            .then(res => res.json())
            .then(res => res.results[0].geometry);
    }
}