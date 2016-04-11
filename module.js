var fs = require('fs');
var path = require('path');
module.exports = function (dirName, fileExtension, callback) {
  fs.readdir(dirName, function(err, files) {
    if (err) {
      return callback(err);
    }
    fileExtension = "." + fileExtension;
    files = files.filter(function(file) {
      return path.extname(file) === fileExtension;
    });
    return callback(null, files);
  });
};
