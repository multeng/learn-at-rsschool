import AppModel from '../models/AppModel';
import AppView from '../views/AppView';


export default class App {
    constructor(geoToken, weatherApiKey, imagesAccessKey, geocodingApiKey) {
        this.geoLocation = {
            url: `https://ipinfo.io/json?token=${geoToken}`
        }
        this.weatherApi = {
            url: `https://api.weatherbit.io/v2.0/forecast/dailyGET/forecast/daily?lat=latitude&lon=longitude&days=4&lang=en&key=${weatherApiKey}`
        }
        this.imagesApi = {
            url: `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${imagesAccessKey}`
        }
        this.coordinatesApi = {
            url: `https://api.opencagedata.com/geocode/v1/json?q=city&key=${geocodingApiKey}&pretty=1&no_annotations=1`
        }
    }


    async start() {
        const model = new AppModel(this.geoLocation, this.weatherApi, this.imagesApi, this.coordinatesApi);
        const city = await model.getLocations();
        const coordinates = await model.getCoordinates(city);
        const weather = await model.getWeather(coordinates);
        const image = await model.getImage();
        console.log(city);
        console.log(image);
        console.log(weather);
        console.log(coordinates);

        const view = new AppView(city, weather, image, coordinates);
        view.renderOnLoad(coordinates);
    }
}