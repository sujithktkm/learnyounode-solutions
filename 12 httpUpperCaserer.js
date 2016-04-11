var through2Map = require('through2-map');
var http = require('http');
var server = http.createServer(function (request, response) {
  var body = "";
  if (request.method == 'POST') {
    request.pipe(through2Map(function (data) {
      return data.toString().toUpperCase();
    })).pipe(response);
  }
});
server.listen(process.argv[2]);
