exports.run = function(input) {
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE
  var myFunction = (number, value) => {
    var res = ""
    console.log("sier", number.length)
    for(var i = 0; i < number.length; i++){
      res = res + ("The value of " + value[i] + " is " + number[i])
      if(i = number.length - 1){
        res = res + "."
      }else{
        res = res + ", "
      }
    }
    console.log(" res = ", res)
    return res
  }
  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(myFunction, [1, 2, 3], ["One", "Two", "Three"]);
  /** */
};
