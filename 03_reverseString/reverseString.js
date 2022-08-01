const reverseString = function(inputString) {
    inputString = inputString.toString();
    //grab string length and store in a variable
    let stringLength = inputString.length;
    let reversedString = '';
    //loop to add last character of string to new variable
    for (i = 0; i <= stringLength; i++) {
        reversedString += inputString.charAt(stringLength - i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
