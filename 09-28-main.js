// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  // your code here
}

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  // your code here
}

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  const arr = Array.from({ length: n + 1 }, (v, k) => k++);
  console.log(arr);
  arr.forEach((num, index) => {
    arr.sort((number1, number2) => {
      return number1 - number2;
    });
  });
}
console.log(getDivisorListV3(3));
