var http = require('http');
var info = [];
http.get(process.argv[2], function(response) {
  response.on("error", function(err) {
    console.log(err.message);
  }).on("data", function(data) {
    info.push(data);
    console.log(data.toString());
  }).on("end", function(end) {
    var lines = Buffer.concat(info).toString();
    // lines.forEach(function(line) {
    //   console.log(line);
    // })
  });
}).on("error", function(error) {
  console.log(error.message);
});

// Short hand solution
// var http = require('http');
//
// http.get(process.argv[2], function(response) {
//   response.setEncoding('utf8');
//   response.on("data", console.log);
//   response.on("error", console.error);
// });
