
const largest = function maxNumberAmongArgs() {

  // if there are no arguments, the function will return "null"
  if (arguments.length !== 0) {

    // take the first argument as temporary maximum
    let maximum = arguments[0];

    // consistently comparing temporary maximum to find true maximum
    for(let i = 1; i < arguments.length; i++) {
      if(maximum < arguments[i]) {
        maximum = arguments[i];
      }
    } 

    return maximum;

  } else {
    return null;
  }
}

const smallest = function minNumberAmongArgs() {

  // if there are no arguments, the function will return "null"
  if (arguments.length !== 0) {

    // take the first argument as temporary maximum
    let minimum = arguments[0];

    // consistently comparing temporary maximum to find true maximum
    for(let i = 1; i < arguments.length; i++) {
      if(minimum > arguments[i]) {
        minimum = arguments[i];
      }
    } 

    return minimum;

  } else {
    return null;
  }

}