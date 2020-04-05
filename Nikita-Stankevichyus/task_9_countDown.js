const countDown = function countingTillZeroWithDelay(number) {
  
  // function is immutable
  let workNumber = number;

  // if number is larger than 0, procceed as usual.
  if(workNumber > 0) {

    console.log(workNumber);

    // one less to count
    workNumber--;

    // 1000 ms === 1 s
    setTimeout(countDown, 1000, workNumber);

    // If number equals 0, then it is the last count, no need in delay
  } else if(workNumber === 0) {

    console.log(workNumber);
    return;

    // Number less than 0 means invalid argument, this is expressed by returned 'null' value.
  } else {

    return null;

  }
}