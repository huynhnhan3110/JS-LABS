// convert hour to seconds
function convertHourToSec(hours) {
  if (hours <= 0) return 0;

  const SECONDS_PER_HOUR = 3600;
  return hours * SECONDS_PER_HOUR;
}
console.log(convertHourToSec(5));

// Given 3 number find max
function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

console.log(findMax(1, 44, 3));

// given 3 number find max even
function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;

  return max;
}
console.log(findMaxEven(2, 2, 9));
