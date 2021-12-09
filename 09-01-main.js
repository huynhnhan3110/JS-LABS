const numberList = [1, 3, 4, 5, 6, 7];

// array destructuring
const [first, second, third, ...rest] = numberList;

console.log(first);
console.log(second);
console.log(third);
console.log(...rest);
