// var fs = require('fs');

// var fileName = process.argv[2];

// file = fs.readFile(fileName, function(err, data) {
// 	console.log(data.toString().split('\n').length-1);
// });


// model answer
var fs = require('fs');
    var file = process.argv[2];

    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1;
      console.log(lines);
   });