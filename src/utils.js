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

  let averTemp = sumTemp / (arr.length - 1);

  return averTemp;
}

function getAverFeelsLike(arr) {
  let sumFeels = arr.reduce((sum, item) => sum + item.main.feels_like, 0);

  let averFeels = sumFeels / (arr.length - 1);

  return averFeels;
}

function getAverageWind(arr) {
  let sumWind = arr.reduce((sum, item) => sum + item.wind.speed, 0);

  let averWind = sumWind / (arr.length - 1);
  return averWind;
}

function getAverageHumidity(arr) {
  let sumHumid = arr.reduce((sum, item) => sum + item.main.humidity, 0);

  let averHumid = sumHumid / (arr.length - 1);
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
}