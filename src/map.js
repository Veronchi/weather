function getMap(lng, lat) {
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
  mapboxgl.accessToken = 'pk.eyJ1IjoidmVyb24wNjA4IiwiYSI6ImNrcnVodjlqbTBvYTkydnF1MzEzMG54OGkifQ.DbBVWpZRvzZN-NZ8z3rkGw';
  var map = new mapboxgl.Map({
  container: 'citymap_box',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: 9
  });

  // var marker1 = new mapboxgl.Marker()
  //   .setLngLat([lng, lat])
  //   .addTo(map);
}


// document.querySelector(".input-search__btn").addEventListener("click", (event) => {
//     map.flyTo({
//         center: [
//             -74.5 + (Math.random() - 0.5) * 10,
//             40 + (Math.random() - 0.5) * 10
//         ],
//         essential: true // this animation is considered essential with respect to prefers-reduced-motion
//     })
// })

export {
  getMap
}