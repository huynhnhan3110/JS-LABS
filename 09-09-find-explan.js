// find
// v1 linh canh
function findFirstEven(numberList) {
    let evenNumber;

    for(let i = 0; i< numberList.length; i++) {
        const number = numberList[i];
        if(number % 2 === 0) {
            evenNumber = number;
            break;
        }
    }
    
    return evenNumber;
}
console.log(findFirstEven([1,2,3,4]));