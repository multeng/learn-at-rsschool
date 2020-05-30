import AppModel from '../models/AppModel';
// eslint-disable-next-line no-unused-vars
import AppView from '../views/AppView';



export default class App {
    constructor(geoToken, weatherApiKey, imagesAccessKey, geocodingApiKey ) {
        this.geoLocation = {
            url: `https://ipinfo.io/json?token=${geoToken}`
        },
        this.weatherApi = {
             url: `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=city&days=16`
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
        const city =  await model.getLocations();
        const weather = await model.getWeather(city);
        const image = await model.getImage();
        const coordinates = await model.getCoordinates(city);
        console.log(city);
        console.log(weather);
        console.log(image);
        console.log(coordinates);


    }
}