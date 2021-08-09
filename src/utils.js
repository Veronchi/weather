function getToDay(weatherObj, currentDate) {
  for (let prop in weatherObj) {
    let firstProp = weatherObj[prop][0];
    let arrDate = new Date(firstProp.dt_txt);
    let curUTCdate = currentDate.getDate();
    let arrUTCdate = arrDate.getDate();
    if (curUTCdate === arrUTCdate) {
      return prop;
    }
  }
}

function getAverageTemp(arr) {
  let sumTemp = arr.reduce((sum, item) => sum + item.main.temp, 0);
  let d = arr.length === 1 ? 1 : arr.length - 1;
  let averTemp = sumTemp / d;
  return averTemp;
}

function getAverFeelsLike(arr) {
  let sumFeels = arr.reduce((sum, item) => sum + item.main.feels_like, 0);
  let d = arr.length === 1 ? 1 : arr.length - 1;
  let averFeels = sumFeels / d;

  return averFeels;
}

function getAverageWind(arr) {
  let sumWind = arr.reduce((sum, item) => sum + item.wind.speed, 0);
  let d = arr.length === 1 ? 1 : arr.length - 1;
  let averWind = sumWind / d;
  return averWind;
}

function getAverageHumidity(arr) {
  let sumHumid = arr.reduce((sum, item) => sum + item.main.humidity, 0);
  let d = arr.length === 1 ? 1 : arr.length - 1;
  let averHumid = sumHumid / d;
  return averHumid;
}

function getCurDayOfWeek(dayNum) {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return days[dayNum];
}

function getMonth(monNum) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  return months[monNum];
}

function getCorrectDayOfWeek(curDay) {
  if(curDay < 7) return curDay;
  else return curDay - 7;
}

function getFollowingDayOfWeek(dayNum) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[dayNum];
}

function getLatitude(obj) {
  return obj.coords.latitude;
}

function getLongitude(obj) {
  return obj.coords.longitude;
}

function getCountry(obj) {
  let country = obj.results[0].components.country;

  return country;
}

function getCity(obj) {
  let city = obj.results[0].components.city;

  return city;
}

function getLatCurd(obj) {
  let latCurd = obj.results[0].annotations.DMS.lat;

  return latCurd;
}

function getLonCurd(obj) {
  let lonCurd = obj.results[0].annotations.DMS.lng;
  
  return lonCurd;
}

function getInputLat(obj) {
  let inputLat = obj.city.coord.lat;

  return inputLat;
}

function getInputLon(obj) {
  let inputLon = obj.city.coord.lon;

  return inputLon;
}

function getInputDate(offset) {
  let time = new Date().getTime() + (offset * 1000);
  let inputDate = new Date(time);

  let month = getMonth(inputDate.getUTCMonth());
  let dayOfWeek = getCurDayOfWeek(inputDate.getUTCDay());
  let dayNum = inputDate.getUTCDate();
  let hours = inputDate.getUTCHours();
  let minutes = inputDate.getUTCMinutes();
  let curMinutes = null;

  if(minutes < 10) {
    curMinutes = `0${minutes}`
  } else {
    curMinutes = minutes;
  }

  let inputTime = `${dayOfWeek} ${dayNum} ${month} ${hours}:${curMinutes}`;

  // console.log(time);
  // console.log(inputDate);
  // console.log(inputDate.getUTCDay());
  // console.log(new Date(inputDate.toUTCString() - objTimestamp.offset_sec));
  // console.log(inputTime)
  return inputTime;
}


// new york
export {
  getToDay,
  getAverageTemp,
  getAverFeelsLike,
  getAverageWind,
  getAverageHumidity,
  getCurDayOfWeek,
  getMonth,
  getCorrectDayOfWeek,
  getFollowingDayOfWeek,
  getLatitude,
  getLongitude,
  getCountry,
  getCity,
  getLatCurd,
  getLonCurd,
  getInputLat,
  getInputLon,
  getInputDate,
}