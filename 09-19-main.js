// check prime
function isPrimeV1(n) {
  if (n >= 1000 || n < 0) return undefined;
  if (n < 2) return false;
  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrimeV2(n) {
  if (n >= 1000 || n < 0) return undefined;
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeV1(4));
console.log(isPrimeV2(4));
