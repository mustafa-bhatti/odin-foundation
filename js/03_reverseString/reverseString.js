const reverseString = function(string1) {
    let reverseString = "";
    for (let i = string1.length-1;i >=0;i--) {
        reverseString += string1[i];
    }
    return reverseString;
};
// Do not edit below this line
module.exports = reverseString;
