// test sort v1
function compareFn(a, b) {
    if(a > b) return -1;
    if(a === b) return 0;
    return 1;
}
const numberList = [12,4,6,3,2,22];
numberList.sort(compareFn);
console.log(numberList);
// v2
function compareFn(a, b) {
    return a - b;
}
const numberList = [12,4,6,3,2,22];
numberList.sort(compareFn);
console.log(numberList);

// v3
const numberList = [12,4,6,3,2,22];
numberList.sort((a,b) => a - b);
console.log(numberList);