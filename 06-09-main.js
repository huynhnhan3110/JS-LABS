// Kiem tra chan le
function isEven(n) {
  return n % 2 === 0;
}
function isOdd(n) {
  return n % 2 === 1;
}
// Kiem tra chia het cho 5
function isDivisibleBy5(n) {
  return n % 5 === 0;
}

// kiemt ra so chinh phuong
// n = a  * a
function isPerfectSquare(n) {
  if (n < 0) return false;

  const sqrtNum = Math.sqrt(n);
  const sqrtInt = Math.trunc(sqrtNum);
  return sqrtInt * sqrtInt === n;
}
console.log(isPerfectSquare(3));
console.log(isPerfectSquare(6));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(25));
