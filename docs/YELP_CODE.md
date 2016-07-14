/**
 * Created by Cesar on 6/16/16.
 */
(function(module) {


  var scripter = {
    getGmapsData: getGmapsData
  };


  function getGmapsData(address) {

    var url      = 'https://maps.googleapis.com/maps/api/geocode/json?',
        location = address.replace(' ', '+'),
        api_key  = 'AIzaSyBBssCWGkwPkCHNjgZE-8CVp0RLOsOE-4g';
    
    
    $.ajax(url + 'address=' + location + '&key=' + api_key).then(handleSuccess, handleFailure);

  }

  getGmapsData("2260 NE Davis St");

  function getYelpData() {
    var url                     = 'https://api.yelp.com/v2/search/?term=bars&location=portland,OR&limit=20&actionlinks=true&category_filter=beerbar,beergardens,pubs,breweries,divebars',
        oauth_consumer_key      = 'yF-0vK_oLA5AZwAU7x9l6Q',
        oauth_token             = '5i__KacPaFYpX8oD37GpNBA5mq5MzjtE',
        oauth_signature_method  = 'hmac-sha1',
        oauth_signature         = '0hlVPnMSKYnUAUfrC7BwZW_Ozn4',
        oauth_timestamp         =  generateUnixTimestamp(),
        oauth_version           =  '1.0',
        oauth_nonce             =  nonceGenerator();

    //https://api.yelp.com/v2/search/?term=bars&location=portland,OR&limit=20&actionlinks=true&category_filter=beerbar,beergardens,pubs,breweries,divebars

      // &oauth_consumer_key=yF-0vK_oLA5AZwAU7x9l6Q&
      // &oauth_token=5i__KacPaFYpX8oD37GpNBA5mq5MzjtE
      // &oauth_signature_method=HMAC-SHA1
      // &oauth_timestamp=1466133461
      // &oauth_nonce=zBvUmB
      // &oauth_version=1.0
      // &oauth_signature=59GjUBq0Oj56gT9JYqJ8OyrvhnM=

    // $.ajax(url + '&oauth_consumer_key=' + oauth_consumer_key + '&oauth_token=' + oauth_token + '&oauth_signature_method=' + oauth_signature_method + '&oauth_timestamp=' + oauth_timestamp + '&oauth_nonce=' + oauth_nonce + '&oauth_version=' + oauth_version + 'oauth_signature=' + oauth_signature)
    //   .then(handleSuccess, handleFailure);

    // $.ajax('https://api.yelp.com/v2/search/?term=bars&location=portland,%20OR&limit=20&actionlinks=true&category_filter=beerbar,beergardens,pubs,breweries,divebars&oauth_consumer_key=yF-0vK_oLA5AZwAU7x9l6Q&oauth_token=5i__KacPaFYpX8oD37GpNBA5mq5MzjtE&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1466269779&oauth_nonce=TH77Tk&oauth_version=1.0&oauth_signature=1oanzuL2W6ppbRNIl5TufG8Xiv8=').then(handleSuccess, handleFailure);

    $.ajax('yelpData.json').then(function(response) {

      var allPlaces = parseData(response);

      console.log(allPlaces);

    }, handleFailure);

  }

  function generateUnixTimestamp() {
    return new Date().getTime()
  }


  function nonceGenerator() {
    var text     = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i = 0; i < 6; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }


  /*
  * Helper functions
  * */

  function handleSuccess(response) {
    console.log("Yay! ", response);
    document.getElementById('results').innerHTML = 'Success!';
    return response;
  }


  function handleFailure(error) {
    document.getElementById('results').innerHTML = 'Failed';
    console.log("It failed because of ", error);
  }


  function parseData(response) {
    return response.businesses.map(function(business) {
       var data = {};

      data.name = business.name;
      data.address = business.location.display_address;
      data.coordinate = business.location.coordinate;

      return data;
    });
  }

  getYelpData();

  getGmapsData("2260 NE Davis St");

  module.scripter = scripter;
})(window);

