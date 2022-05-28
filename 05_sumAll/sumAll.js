const sumAll = function(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    let between = Math.abs(num1 - num2);
    let result = (between + 1) * Math.min(num1, num2);
    for (let i = 1; i <= between; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
