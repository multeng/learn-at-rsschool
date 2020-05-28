import AppModel from '../models/AppModel';
// import AppView from '../views/AppView';



export default class App {
    constructor(geoToken) {
        this.geoLocation = {
            url: `https://ipinfo.io/json?token=${geoToken}`
        };
    }

    async start() {
        const model = new AppModel(this.geoLocation);
        // eslint-disable-next-line no-unused-vars
        const data =  await model.getLocations();
        // console.log(data);
        // const view = new AppView(data);

        // view.render();
    }
}