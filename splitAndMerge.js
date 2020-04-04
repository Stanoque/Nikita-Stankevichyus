const splitAndMerge = function splitStringBySeparator(str, sp) {
    let workString = str; //function is immutable

    workString = workString.split(' '); //splitting the string into words

    for(let i = 0; i < workString.length; i++){
        workString[i] = workString[i].split('').join(sp); //splitting each word into chars and then merging them with specified separator
    } 

    workString = workString.join(' '); //merging resulting string

    return workString;
} 