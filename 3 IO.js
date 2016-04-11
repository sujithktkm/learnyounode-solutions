var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]).toString();
var numLines = buf.split("\n");
console.log(numLines.length - 1);
