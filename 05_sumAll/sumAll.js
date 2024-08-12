const sumAll = function (start, end) {
    if (start <= -1 || end <= -1) {
        return `ERROR`
    }

    if (Number.isInteger(start) && Number.isInteger(end)) { 

        result = 0
        if (start > end) {
            for (let i = start; i >= end; i--) {
                result += i;
            }
            return result;
        }
        else {
            for (let i = 1; i <= end; i++) {
                result += i
            }
            return result;
        }
    }
    return `ERROR`
};

// Do not edit below this line
module.exports = sumAll;
