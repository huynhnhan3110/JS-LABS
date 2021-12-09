// for -i
// foreach
// reduce

function findMaxFor(arr) {
    if(!Array.isArray(arr) || arr.length === 0) return undefined;

    let max = arr[0];
    for(let i = 1; i<arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMaxFor([2,9,4,5,11]));

// foreach
function findMaxEach(arr) {
    if(!Array.isArray(arr) || arr.length === 0) return undefined;

    let max = arr[0];
    arr.forEach((number) => {
        if(max < number) {
            max = number;
        }
    });
    return max;
    
}
console.log(findMaxEach([2,9,4,5,11]));

// reduce
function findMaxEach(arr) {
    if(!Array.isArray(arr) || arr.length === 0) return undefined;

    // return arr.reduce((max, number) => {
    //     if(number > max) return number;
    //     return max;
    // });

    // return arr.reduce((max, number) => {
    //     return (number > max) ? number : max;
    // })
    return arr.reduce((max, number) => (number > max) ? number : max );
    
}
console.log(findMaxEach([2,9,4,5,11]));

