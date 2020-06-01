import './styles/main.scss';
import App from './assets/js/controllers/App';


const geoToken = '9dcc2819d465e5';
const weatherApiKey = '893ec54caf464ea1a283f875ca3cd200';
const imagesAccessKey = 'igHhk7MBbRzjgkDW3Kjq4Q3EH8S_5UJiclhqEH7yAk0';
const geocodingApiKey = 'cea860d989bd448999f4b4581e1216cd';


const app = new App(geoToken, weatherApiKey, imagesAccessKey, geocodingApiKey);
app.start();