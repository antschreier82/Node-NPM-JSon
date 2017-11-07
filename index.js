var _ = require('lodash');

var readJson = require('read-json-file');

readJSON(data.json, function(error, data){
   if (error) {
       throw error;
   }
   console.log(data);
});