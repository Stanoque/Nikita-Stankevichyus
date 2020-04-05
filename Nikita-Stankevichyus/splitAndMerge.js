const splitAndMerge = function splitStringBySeparator(str, sp) {

  // function is immutable  
  let workString = str;

  // splitting the string into words
  workString = workString.split(' ');

  for(let i = 0; i < workString.length; i++){

    // splitting each word into chars and then merging them with specified separator
    workString[i] = workString[i].split('').join(sp);

  } 

  // merging resulting string
  workString = workString.join(' ');

  return workString;
  
} 