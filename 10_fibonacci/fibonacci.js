const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    const array = [0, 1];
    while (array.length <= num) {
        let newnum = array[array.length - 1] + array[array.length - 2];
        array.push(newnum);
    }
    return array[num];
};

// Do not edit below this line
module.exports = fibonacci;
