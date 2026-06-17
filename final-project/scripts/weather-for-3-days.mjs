const keyWeather = '8516f964fad8d42697a6897af0a2599c';
const tegucigalpaLat = '14.06';
const tegucigalpaLon = '-87.18';

const information = document.querySelector('#forecast');
const todayTemp = document.querySelector('#temp-today');
const tomorrowTemp = document.querySelector('#temp-tomorrow');
const afterTomorrowTemp = document.querySelector('#temp-after-tomorrow');

const weatherForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${tegucigalpaLat}&lon=${tegucigalpaLon}&appid=${keyWeather}&units=imperial`;


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //  console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let daysToShow = data.list.filter(day => day.dt_txt.includes("12:00:00"));
    todayTemp.innerHTML = ` ${daysToShow[0].main.temp}&deg;F`;
    tomorrowTemp.innerHTML = ` ${daysToShow[1].main.temp}&deg;F`;
    afterTomorrowTemp.innerHTML = ` ${daysToShow[2].main.temp}&deg;F`;
}


apiFetch(weatherForecast);