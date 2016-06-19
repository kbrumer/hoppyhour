var express = require('express'),
  port = process.env.PORT || 4000,
  app = express();

app.use(express.static('./dist'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
