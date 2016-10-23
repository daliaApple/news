var express = require('express');
var app = express();

app.use('/statics', express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/src'));

app.get('/test', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('News app listening on port 3000!');
});
