function isSymmetricNumber(n) {
  let len = n.toString().length;

  if (len === 1) return true;
  if (len === 2) {
    return Math.trunc(n / 10) === n % 10;
  }
  if (len === 3) {
    return Math.trunc(n / 100) === n % 10;
  }
}
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(32));
console.log(isSymmetricNumber(313));
console.log(isSymmetricNumber(213));
console.log(isSymmetricNumber(545));
