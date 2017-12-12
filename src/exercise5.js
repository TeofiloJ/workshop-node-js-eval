exports.run = function(input) {
  console.log("Exercise #5");

var fs = require('fs')

var fileBuffer = fs.readFileSync(input);
var fileString = fileBuffer.toString();

var res = 0
for(var i = 0; i < fileString.length; i++){
  res += Number(fileString[i])
}
return res

};
