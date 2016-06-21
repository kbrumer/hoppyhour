var express = require('express'),
  pg = require('pg')
  port = process.env.PORT || 4000,
  app = express(),
  connurl = process.env.DATABASE_URL || 'postgres://hoppy:hops4ever@localhost:5432/hoppy_hour_db';

var sql = 'SELECT * '+
          '  FROM t_bar ' +
          ' WHERE ST_DWithin( ' +
          '         Geography(ST_MakePoint(longitude, latitude)), ' +
          '         Geography(ST_MakePoint(-122.678204, 45.522536)), ' +
          '         318 ' +
          '       );';


app.get('/db', function (request, response) {
  pg.connect(connurl, function(err, client, done) {
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
