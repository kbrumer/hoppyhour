'use strict';

import { GOOGLE_API_URL, GOOGLE_API_KEY } from '../config';

export function resolveLocation(address) {
  const location = address.replace(' ', '+');
  const url = `${GOOGLE_API_URL}address=${location}&key=${GOOGLE_API_KEY}`;
  return $.ajax(url);
    // .then(function (data) {
    //   return data.results.map(function(address) {
    //     [ address.geometry.location.lat, address.geometry.location.lng ];
    //   });
    // });
}




export function createMap(location) {

  // Example of Data
  // var locations = [
  //   ['Bondi Beach', -33.890542, 151.274856, 4],
  //   ['Coogee Beach', -33.923036, 151.259052, 5],
  //   ['Cronulla Beach', -34.028249, 151.157507, 3],
  //   ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  //   ['Maroubra Beach', -33.950198, 151.259302, 1]
  // ];

  var locations = location;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(45.5231, -122.6765),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}


function parseData(data) {
  var locations = data.results.map(function(bar) {
    return [bar.name, bar.latitude, bar.longitude];
  });

  createMap(locations);
}
