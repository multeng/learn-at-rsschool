import './styles/main.scss';
import App from './assets/js/controllers/App';


const geoToken = '9dcc2819d465e5';
const weatherApiKey = 'd066ba18045f4731912185251202905';
const imagesAccessKey = 'igHhk7MBbRzjgkDW3Kjq4Q3EH8S_5UJiclhqEH7yAk0';
const geocodingApiKey = 'cea860d989bd448999f4b4581e1216cd';


const app = new App(geoToken, weatherApiKey, imagesAccessKey, geocodingApiKey);
app.start();