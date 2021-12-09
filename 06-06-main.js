// [0, 1) to [0, 10]
function generateRandomNumber(n) {
  if (n < 0 || n > 10) return -1;

  const randomNum = Math.random() * n;
  return Math.round(randomNum);
}
console.log(generateRandomNumber(3));
console.log(generateRandomNumber(3));
console.log(generateRandomNumber(3));
console.log(generateRandomNumber(3));
console.log(generateRandomNumber(3));
console.log(generateRandomNumber(3));
console.log(generateRandomNumber(3));
console.log(generateRandomNumber(3));

// random a number in range [a, b] a < b
function randomNumber(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a) + a;

  return Math.round(random);
}
console.log(randomNumber(3, 10));
console.log(randomNumber(0, 3));
console.log(randomNumber(3, 2));
console.log(randomNumber(33, 40));
// m - n
// 10 - 100
// 90
// 0 - 90 + 10
function randomBetween(n, m) {
  if (n >= m) return -1;

  const random = Math.random() * (m - n);
  return Math.round(random) + n;
}
console.log(randomBetween(10, 99));
console.log(randomBetween(10, 99));
console.log(randomBetween(100, 999));
console.log(randomBetween(1000, 9999));
console.log(randomBetween(10000, 99999));
