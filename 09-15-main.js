function printNumbers() {
    for(let i = 1; i<=10; i++) {
        console.log(i);
    }
}
printNumbers();

// [2,4,6,8,10]
function printEvenNumbers() {
    for(let i = 2; i <= 10; i++) {
        if(i % 2 === 0) console.log(i);
    }
}

printEvenNumbers();
// [2,4,6,8,10]
function printEvenNumbers() {
    for(let i = 2; i <= 10; i+=2) {
        console.log(i);
    }
}

printEvenNumbers();

function printEvenNumbersN(n) {
    for(let i = 2; i < n ; i+=2) {
        console.log(i);
    }
}
printEvenNumbersN(099);