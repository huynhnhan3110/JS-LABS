const result = [1,2,3,4].reduce((sum, number) => sum + number, 0);
console.log(result)

function reduce(arr, callbackFn, initialValue) {
    if(!Array.isArray(arr) || typeof callbackFn !== 'function') {
        throw new Error('Invalid parameters');
    }

    if(arr.length === 0) {
        if(initialValue === undefined) {
            throw new Error('Must has initialValue when arr is empty');
        }
        return initialValue;
    }
    const hasInitalValue = initialValue !== undefined;
    const startIndex = hasInitalValue ? 1 : 0;

    let previousValue = hasInitalValue ? initialValue : arr[startIndex];

    for(let i = startIndex; i < arr.length; i++) {
        previousValue = callbackFn(previousValue, arr[i], i);
    }

    return previousValue;
}
function calcSum(sum, number) {
    return sum + number;
}
console.log(reduce([1,2,3,4],calcSum,10));

console.log(reduce([1,2,3,4],(substract, number) => substract - number,10));