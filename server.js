var express = require('express'),
  pg = require('pg')
  port = process.env.PORT || 4000,
  app = express(),
  connurl = process.env.DATABASE_URL || 'postgres://hoppy:hops4ever@localhost:5432/hoppy_hour_db';

// radius is in meters
function sqlDist(lon, lat, radius){
  return 'SELECT * '+
        '  FROM t_bar_yelp ' +
        ' WHERE ST_DWithin( ' +
        '         Geography(ST_MakePoint(longitude, latitude)), ' +
        '         Geography(ST_MakePoint(' + lon + ', ' + lat + ')), ' +
        '          ' + radius +
        '       );';

}

app.get('/db/:lon/:lat/:radius', function (request, response) {
  pg.connect(connurl, function(err, client, done) {
    var sql = sqlDist(request.params.lon, request.params.lat, request.params.radius);
    console.log('running query with sql', sql);
    client.query(sql, function(err, result) {
      done();
      if (err) {
        response.send("Error " + err);
      }
      else {
        response.send({ results: result.rows });
      }
    });
  });
});


app.use(express.static('./dist'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
