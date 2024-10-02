const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } else if (num === 0) {
        return "";
    } else {
        let newstring = string;
        while (num > 1) {
            newstring += string;
            num--;
        }
    return newstring;
    }
};

// Do not edit below this line
module.exports = repeatString;
