function getMap(lng, lat) {
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
  mapboxgl.accessToken = 'pk.eyJ1IjoidmVyb24wNjA4IiwiYSI6ImNrcnVodjlqbTBvYTkydnF1MzEzMG54OGkifQ.DbBVWpZRvzZN-NZ8z3rkGw';
  var map = new mapboxgl.Map({
    container: 'citymap_box',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: 9
  });
  // document.querySelector(".input-search__btn").addEventListener("click", (event) => {
  //   map.flyTo({
  //     center: [
  //       inputLongitude, inputLatitude
  //     ],
  //     essential: true // this animation is considered essential with respect to prefers-reduced-motion
  //   })
  // })
  return map;
}





export {
  getMap,
}