const removeFromArray = function(array) {
    let newArray = [];
    let indices = [...arguments].slice(1);
    for (let i = 0;i < array.length;i++) {
        if (indices.includes(array[i]) == false) {
            newArray.push(array[i]);
        }
        }
    return newArray;
};

removeFromArray([1,2,3,4],3)
    // Do not edit below this line
module.exports = removeFromArray;
