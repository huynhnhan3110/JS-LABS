// extract the ones of a number having 3 digits
function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1;
  // 123 -> 3
  return n % 10;
}
// extract the tens of a number having 3 digits
function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;
  // 123 -> 2
  // 123 -> 23
  // 23 / 10 -> 2.3 -> 2
  return Math.trunc((n % 100) / 10);
}
console.log(extractTheTens(354));

// extract the hundreds of a number having 3 digits
function extractTheHundreds(n) {
  if (n.toString().length !== 3) return -1;
  // 123 -> 1
  // 123 / 100 -> 1,23 -> 1
  return Math.trunc(n / 100);
}
console.log(extractTheHundreds(521));

// sum all digits of a number having 3 digits
function sumDigits(n) {
  if (n.toString().length !== 3) return -1;

  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);

  return ones + tens + hundreds;
}
console.log(sumDigits(797));
