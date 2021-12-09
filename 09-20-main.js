// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(getDivisorListV1(10));

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  const arrRange = Array.from({ length: n }, (k, v) => v + 1);
  const result = arrRange.filter((number, index) => n % number === 0);
  return result;
}
console.log(getDivisorListV2(10));
// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  const arrRange = Array.from({ length: n }, (k, v) => v + 1);
  let result = [];
  arrRange.forEach((num) => {
    if (num <= Math.sqrt(n)) {
      if (n % num === 0) {
        result.push(num);
      }
    }
  });
  return result;
}
console.log(getDivisorListV3(10));
