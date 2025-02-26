const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0;i <= (str.length/2);i++) {
        console.log(str[i],str[str.length-i-1]);

        if (str[i] !== str[str.length-i-1] & ]) {
            console.log("Error = " + str[i] + " " +str[str.length-i-1]);
            return false
        }
    }
    return true
};
palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
