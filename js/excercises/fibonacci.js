const fibonacci = function(number) {
    let fibNm = 1;
    if (number == 1) {
        return fibNm;
    }
    if (number == 0) {
        return 0;
    }
    if (number < 0) {
        return "OOPS"
    }
    let prev = 0;
    let first = 1;
    for (let i = 2;i<=number;i++){
        fibNm = prev + first;
        prev = first;
        first = fibNm;
    }
    return fibNm;
};

// Do not edit below this line
module.exports = fibonacci;

