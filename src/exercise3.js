exports.run = function(input) {
  console.log("Exercise #3");
  var res = 0
  input.forEach(function(element) {
    if(element.operator === 'add'){
      res += element.value
    }
    if(element.operator === 'substract'){
      res -= element.value
    }

  });
  
  return res
};
