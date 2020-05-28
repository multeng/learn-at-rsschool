import './styles/main.scss';
import App from './assets/js/controllers/App';


const geoToken = '9dcc2819d465e5';
const app = new App(geoToken);
app.start();