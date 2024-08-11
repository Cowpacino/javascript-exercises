const reverseString = function(string) {
    let right = string.length - 1;
    let result = ""
    while(right >= 0) {
        result += string[right];
        right -= 1;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
