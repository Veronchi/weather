import _, { cond, get, random } from 'lodash';
import './fonts.css';
import './style.css';
import * as UTILS from './utils';

let body = document.body;
let inputValue = document.querySelector('.input-search').value;
let weatherObj = null;
let currentDate = null;
let currentDatePropName = null;


let selectorsObj = {
  mainTempNum: document.querySelector('.temperature-number'),
  weatherType: document.querySelector('.weather-type'),
  feelsLike: document.querySelector('.feels-like'),
  wind: document.querySelector('.wind'),
  humidity: document.querySelector('.humidity'),
  secondDayTemp: document.querySelector('.second-day__temperature'),
  thirdDayTemp: document.querySelector('.third-day__temperature'),
  fourthdDayTemp: document.querySelector('.fourth-day__temperature'),
  secDaytitle: document.querySelector('.temperature__item-title-second'),
  thirdDaytitle: document.querySelector('.temperature__item-title-third'),
  fourDaytitle: document.querySelector('.temperature__item-title-fourth'),
  mainWeatherImg: document.querySelector('.main-weather-img'),
}
let model = {};

console.log(selectorsObj.mainWeatherImg)

body.addEventListener('click', clicker);

function clicker(event) {
  let id = event.target.dataset.id;
  if (!id) return;
  switch (id) {
    case "update":
      toggleBackground(id);
      break;

    case "search":
      toggleBackground(id);
      break;

    default:
      break;
  }
}

async function toggleBackground(arg) {
  let url = 'https://api.unsplash.com/photos/random';
  if (arg !== "update") {
    url = `https://api.unsplash.com/photos/random?query=${inputValue}`;
  };
  let responce = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Client-ID Jcf2ZUAFlrURxEhOl7gKOltoDnU1U732BnMmRbvY4-4'
    }
  });
  let data = await responce.json();
  let bgUrl = data.urls.regular;
  body.style.backgroundImage = `url(${bgUrl})`;
}


async function showWeather() {
  let weatherResponce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Minsk&lang=ru&units=metric&appid=30dcb6e81087042015db2109267eb343`);
  let weatherData = await weatherResponce.json();

  weatherObj = oWeatherToMyCustomObject(weatherData.list);
  currentDatePropName = UTILS.getToDay(weatherObj, currentDate);
  
  model.curDayTemp = UTILS.getAverageTemp(weatherObj[currentDatePropName]);
  let secDay = UTILS.getCorrectDayOfWeek(+currentDatePropName + 1);
  let thirdDay = UTILS.getCorrectDayOfWeek(+currentDatePropName + 2);
  let fourDay = UTILS.getCorrectDayOfWeek(+currentDatePropName + 3);

  model.secDayT = UTILS.getAverageTemp(weatherObj[secDay]);
  model.thirdDayT = UTILS.getAverageTemp(weatherObj[thirdDay]);
  model.fourDayT = UTILS.getAverageTemp(weatherObj[fourDay]);
  model.curDayFeelsLike = UTILS.getAverFeelsLike(weatherObj[currentDatePropName]);
  model.curDayWind = UTILS.getAverageWind(weatherObj[currentDatePropName]);
  model.curDayHumidity = UTILS.getAverageHumidity(weatherObj[currentDatePropName]);

  console.log(UTILS.getFollowingDayOfWeek(secDay))

  selectorsObj.mainTempNum.innerHTML = `${Math.round(model.curDayTemp)}`;
  selectorsObj.weatherType.innerHTML = `${weatherObj[currentDatePropName][0].weather[0].main}`;
  selectorsObj.feelsLike.innerHTML = `Feels like: ${Math.round(model.curDayFeelsLike)}°`;
  selectorsObj.secondDayTemp.innerHTML = `${Math.round(model.secDayT)}°`;
  selectorsObj.thirdDayTemp.innerHTML = `${Math.round(model.thirdDayT)}°`;
  selectorsObj.fourthdDayTemp.innerHTML = `${Math.round(model.fourDayT)}°`;
  selectorsObj.wind.innerHTML = `Wind: ${Math.round(model.curDayWind)} m/s`;
  selectorsObj.humidity.innerHTML = `Humidity: ${Math.round(model.curDayHumidity)}%`;
  selectorsObj.secDaytitle.innerHTML = UTILS.getFollowingDayOfWeek(secDay);
  selectorsObj.thirdDaytitle.innerHTML = UTILS.getFollowingDayOfWeek(thirdDay);
  selectorsObj.fourDaytitle.innerHTML = UTILS.getFollowingDayOfWeek(fourDay);
  selectorsObj.mainWeatherImg.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png')
}

showWeather();

function oWeatherToMyCustomObject(arr) {
  let obj = {};

  arr.forEach(element => {
    let oDate = new Date(element.dt_txt);
    let dayOfWeek = oDate.getDay();

    if (!obj[dayOfWeek]) {
      obj[dayOfWeek] = [element];
    } else {
      obj[dayOfWeek].push(element);
    }
  });

  return obj;
}


function changeCurTime() {
  let date = new Date();
  let cityInfoCurDate = document.querySelector('.city-info__cur-date');

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let dayOfWeek = UTILS.getCurDayOfWeek(date.getDay());
  let dayOfMonth = date.getDate();
  let month = UTILS.getMonth(date.getMonth());
  let curTime = null;

  if (minutes < 10) {
    curTime = `${hours}:0${minutes}`;
  } else {
    curTime = `${hours}:${minutes}`;
  }
  cityInfoCurDate.innerHTML = `${dayOfWeek} ${dayOfMonth} ${month} ${curTime}`;

  return date;
}



(function () {
  currentDate = changeCurTime();
  setInterval(changeCurTime, 1000);
})()