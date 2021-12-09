// filters
function filter(arr, callbackFn) {
    if(!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;
    const newArr = [];

    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(callbackFn(num, i)) {
            newArr.push(num);
        }
    }
    return newArr;
}
console.log(filter([1,2,3,7,9,0], (x) => x > 3));
console.log(filter([1,3,3,7,9,5], (x,id) => id % 2 === 1 && x % 2 === 0));