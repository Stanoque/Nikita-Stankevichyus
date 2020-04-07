
// this function converts arguments array-like object into actual array
var argsIntoArray = function convertArgumentsIntoArray(args) {

  var argsArray = [];

  for(var i = 0; i < args.length; i++) {
    argsArray.push(args[i]);
  }

  return argsArray;
}


var largest = function maxNumberAmongArgs() {

  // if there are no arguments, the function will return "null"
  if (arguments.length !== 0) {

    // converting arguments object into array, so "reduce" method can be applied to it
    var argsArray = argsIntoArray(arguments);

    // via reduce finding maximum element outta array
    var maximum = argsArray.reduce(function(element_1, element_2){
      return element_1 > element_2 ? element_1 : element_2;
    })

    return maximum;

  } else {
    return null;
  }
}

var smallest = function minNumberAmongArgs() {

  // if there are no arguments, the function will return "null"
  if (arguments.length !== 0) {

    // converting arguments object into array, so "reduce" method can be applied to it
    var argsArray = argsIntoArray(arguments);

    // via reduce finding minimum element outta array
    var minimum = argsArray.reduce(function(element_1, element_2){
      return element_1 < element_2 ? element_1 : element_2;
    })

    return minimum;

  } else {
    return null;
  }

}

/*
 * NOTE: This is old conventional solution
 * It's fairly simple but functional
*
var largest = function maxNumberAmongArgs() {

  // if there are no arguments, the function will return "null"
  if (arguments.length !== 0) {

    // take the first argument as temporary maximum
    var maximum = arguments[0];

    // consistently comparing temporary maximum to find true maximum
    for(var i = 1; i < arguments.length; i++) {
      if(maximum < arguments[i]) {
        maximum = arguments[i];
      }
    } 

    return maximum;

  } else {
    return null;
  }
}

var smallest = function minNumberAmongArgs() {

  // if there are no arguments, the function will return "null"
  if (arguments.length !== 0) {

    // take the first argument as temporary maximum
    var minimum = arguments[0];

    // consistently comparing temporary maximum to find true maximum
    for(var i = 1; i < arguments.length; i++) {
      if(minimum > arguments[i]) {
        minimum = arguments[i];
      }
    } 

    return minimum;

  } else {
    return null;
  }
}
*
*/