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
            url: `https://api.opencagedata.com/geocode/v1/json?q=city&key=${geocodingApiKey}`
        }
    }


    async start() {
        const model = new AppModel(this.geoLocation, this.weatherApi, this.imagesApi, this.coordinatesApi);
        const city = await model.getLocations();
        const fullCoordinates = await model.getCoordinates(city);
        const { annotations, formatted, geometry } = fullCoordinates;
        const weather = await model.getWeather(geometry);
        const image = await model.getImage();
        // console.log(fullCoordinates);
        // console.log(annotations);
        // console.log(formatted);
        // console.log(weather);


        const view = new AppView(formatted, weather, image, geometry, annotations);
        view.renderOnLoad();
    }

    async reload(newCity){
        const model = new AppModel(this.geoLocation, this.weatherApi, this.imagesApi, this.coordinatesApi);
        const fullCoordinates = await model.getCoordinates(newCity);
        const { annotations, formatted, geometry } = fullCoordinates;
        const weather = await model.getWeather(geometry);
        const image = await model.getImage();
        const view = new AppView(formatted, weather, image, geometry, annotations);
        view.renderOnLoad();
    }
}