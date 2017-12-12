exports.run = function(input) {
  console.log("Exercise #2");
  var res = ""
  var temp = input.toString().split("")
  
  for(var i = 0; i < temp.length; i++){
    if(Number(temp[i]) < 6){
      res = res + temp[i]
    }
  }
  return res;
};
