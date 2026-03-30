const keyWeather = '8516f964fad8d42697a6897af0a2599c';
const tegucigalpaLat = '14.06';
const tegucigalpaLon = '-87.18';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherToday = `https://api.openweathermap.org/data/2.5/weather?lat=${tegucigalpaLat}&lon=${tegucigalpaLon}&units=metric&appid=${keyWeather}`;

const weatherFuture = `api.openweathermap.org/data/2.5/forecast?lat=${tegucigalpaLat}&lon=${tegucigalpaLon}&appid=${keyWeather}`;


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
            // displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    captionDesc.innerHTML = `${data.weather[0].description}`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', desc);

}

apiFetch(weatherToday);
//apiFetch(weatherFuture);



