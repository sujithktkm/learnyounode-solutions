var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

function print() {
  for(var i=0;i<3;i++) {
    console.log(result[i]);
  }
}

function httpget(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(bl(function(error, data) {
      if (error) {
        throw err;
      }
      result[index] = data.toString();
      count++;

      if(count === 3) {
        print();
      }
    }));
  });
}

for(var i=0;i<3;i++) {
  httpget(i);
}
