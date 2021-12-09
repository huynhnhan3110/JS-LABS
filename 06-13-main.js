function getMaxDigit(n) {
  if (n < 0 || n >= 1000) return -1;
  let max = n;
  if (n.toString().length === 2) {
    const ones = n % 10;
    const tens = Math.trunc(n / 10);
    max = ones;
    if (tens > max) max = tens;
    return max;
  }
  if (n.toString().length === 3) {
    const ones = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    const hundreds = Math.trunc(n / 100);
    max = ones;
    if (tens > max) max = tens;
    if (hundreds > max) max = hundreds;
    return max;
  }

  return max;
}
console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(912));
console.log(getMaxDigit(1912));
