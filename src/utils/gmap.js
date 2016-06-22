// function getData(){
//
// }
//
// function getGmapsData(address) {
//
//   var url      = 'https://maps.googleapis.com/maps/api/geocode/json?',
//     location = address.replace(' ', '+'),
//     api_key  = 'AIzaSyBBssCWGkwPkCHNjgZE-8CVp0RLOsOE-4g';
//
//
//   $.ajax(url + 'address=' + location + '&key=' + api_key)
//     .then(function (data) {
//       return data.results.map(function(address) {
//         return {
//           formatted_address: address.formatted_address,
//           lat: address.geometry.location.lat,
//           lng: address.geometry.location.lng
//         }
//       });
//     })
//     .then(getData)
//     .then(function(data) {
//       console.log("Here it is", data);
//
//     })
// }


// getGmapsData("2260 NE Davis St. Portland OR 97232");
