export default class AppView {
    constructor(city, weather, image, coordinates) {
        this.city = city;
        this.weather = weather;
        this.image = image;
        this.coordinates = coordinates;
    }


    async renderOnLoad(city, weather, image, coordinates){
        const weatherTodayContainer = document.querySelector('.weather-today__info');
        const { temp_c , feelslike_c , wind_kph } = this.weather;
        weatherTodayContainer.innerHTML = `погода в городе ${this.city} ${temp_c} градусов цельсия, чувствуется как ${feelslike_c}, ветер ${wind_kph} км в час`
        console.log(image, coordinates);
    }
}