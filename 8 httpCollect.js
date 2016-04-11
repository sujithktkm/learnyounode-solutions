//Regular style
// var http = require('http');
// var info = [];
// http.get(process.argv[2], function(response) {
//   response.on("error", function(err) {
//     console.log(err.message);
//   }).on("data", function(data) {
//     info.push(data);
//   }).on("end", function(end) {
//     var lines = Buffer.concat(info).toString();
//     console.log(lines.length);
//     console.log(lines);
//   });
// }).on("error", function(error) {
//   console.log(error.message);
// });


//Using pipe
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
  response.pipe(bl(function(err, data) {
    if (err) {
      throw err;
    }
    console.log(data.toString().length);
    console.log(data.toString());
  }));
})
