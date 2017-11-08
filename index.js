var _ = require('lodash');

var fs = require('fs');

var rawdata = fs.readFileSync('data.json');  
var data = JSON.parse(rawdata);  
console.log(data);

