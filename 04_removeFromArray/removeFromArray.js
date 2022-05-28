const removeFromArray = function(arr, ...toRemove) {
    let result = arr;
    for (let ele of toRemove) {
        result = result.filter(stuff => stuff !== ele);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
