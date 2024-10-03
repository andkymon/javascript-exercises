const sumAll = function(start, end) {
    let finalSum = 0;
    switch (true) {
        case (start < 0 
            || end < 0 
            || start != Math.floor(start)
            || end != Math.floor(end)
            || typeof start != "number"
            || typeof end != "number"):
            return "ERROR";
            break;
        case (start > end):
            for (i = start; i >= end; i--) {
                finalSum += i;
            }
            return finalSum;
            break;
        case (start < end):
            for (i = start; i <= end; i++) {
                finalSum += i;
            }
            return finalSum;
            break;
    }
};

// Do not edit below this line
module.exports = sumAll;
