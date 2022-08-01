const repeatString = function(string, num) {
    let storedString = string;
    let outputString = '';
    if (num < 0){
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            outputString += storedString;
        }
        return outputString;
    }
};

// Do not edit below this line
module.exports = repeatString;
