/*eslint no-unused-vars: "warn"*/
/*global google*/

'use strict';

import { GOOGLE_API_URL, GOOGLE_API_KEY } from '../config';

// const flagIcon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
const redIcon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
// const greenIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
const blueIcon = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';

export function resolveLocation(address) {
  const url = `${GOOGLE_API_URL}address=${address.replace(' ', '+')}&key=${GOOGLE_API_KEY}`;
  return $.ajax(url);
}

export function createMap(geom, json) {
  let bounds = new google.maps.LatLngBounds();
  const map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(geom[0].lat, geom[0].lon),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 12
  });

  const infowindow = new google.maps.InfoWindow();

  addToMap(map, infowindow, bounds, geom[0].lat, geom[0].lon, 'Starting address', blueIcon);

  json.results.map(function(bar){
    const info = `${bar.name}<br>${bar.address}<br>${bar.city}, ${bar.state}<br>Phone: ${bar.phone}<br>Rating: ${bar.rating}`;
    addToMap(map, infowindow, bounds, bar.latitude, bar.longitude, info, redIcon);
  });

  map.fitBounds(bounds);
}

function addToMap(map, infowindow, bounds, lat, lon, name, icon){
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map: map,
    icon: icon
  });

  bounds.extend(marker.getPosition());

  google.maps.event.addListener(marker, 'click', (function(marker) {
    return function() {
      infowindow.setContent(name);
      infowindow.open(map, marker);
    };
  })(marker));
}
