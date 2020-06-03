export function renderBackground(image) {
    const background = document.querySelector('.background');
    try {
        background.style.backgroundImage = `url(${image})`;
    } catch (error) {
        background.style.backgroundImage = `url(assets/images/baikal-background.jpg)`;
        console.log("Не удалось установить background");
    }
}

export function renderCity(city) {
    const cityElement = document.querySelector('.weather-today__city')
    cityElement.innerHTML = city;
}

export function renderDataTime(dataset) {
    const { timezone, country_code } = dataset;
    var options = {
        timeZone: timezone,
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }
    const date = new Date();
    const dataTimeElement = document.querySelector('.weather-today__data');
    dataTimeElement.innerHTML = date.toLocaleTimeString(`${country_code}`, options);

}

export function renderCoordinates(dataset) {
    const { DMS } = dataset;
    const latitude = document.querySelector('.latitude');
    const longitude = document.querySelector('.longitude');
    latitude.innerHTML = `Широта: ${DMS.lat}`;
    longitude.innerHTML = `Долгота: ${DMS.lng}`;
}

export function renderWeather(dataset) {
    const { timezone, country_code, data } = dataset;
    var options = {
        timeZone: timezone,
        weekday: 'long',
    }
    const temperatureTodayBlock = document.querySelector('.weather-today__info');
    const weatherFutureBlock = document.querySelector('.weather-in-future');
    weatherFutureBlock.innerHTML = '';
    data.forEach((day, index) => {
        const { temp, app_max_temp, app_min_temp, wind_spd, rh, weather, datetime } = day;
        if (index === 0) {
            temperatureTodayBlock.innerHTML = ` <div class="weather-today__temperature">${Math.round(temp)}°</div>
                                                <img src="https://www.weatherbit.io/static/img/icons/${weather.icon}.png" class="weather-today__icon" alt="iconWeatherToday">
                                                <div class="weather-today__additional-info">
                                                    <p class="temperature-property">${weather.description}</p>
                                                    <p class="temperature-property">FEELS LIKE: ${Math.round((app_max_temp + app_min_temp) / 2)}°</p>
                                                    <p class="temperature-property">WIND: ${Math.round(wind_spd)} м/с</p>
                                                    <p class="temperature-property">HUMIDITY: ${rh}%</p>
                                                </div>`;
        } else {
            let date = new Date(datetime);
            const weatherInFutureDay = document.createElement('div');
            weatherInFutureDay.classList.add('day-block');
            weatherInFutureDay.innerHTML = `    <div class="day">${date.toLocaleDateString(`${country_code}`, options)}</div>
                                                <div class="day-temperature">${Math.round(temp)}°</div>
                                                <img src="https://www.weatherbit.io/static/img/icons/${weather.icon}.png" alt="weather-icon__future">`;
            weatherFutureBlock.appendChild(weatherInFutureDay);
        }
    });
}