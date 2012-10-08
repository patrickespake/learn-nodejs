var fs = require('fs'),
    util = require('util'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();

parser.on('end', function(result) {
  console.log(util.inspect(result, false, null));
});

fs.readFile(__dirname + '/simple.xml', function(err, data) {
  parser.parseString(data);
});