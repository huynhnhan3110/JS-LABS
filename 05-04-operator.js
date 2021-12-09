// Nếu là số dương thì ...
function checkPositive(n) {
  if (n > 0) {
  }
}
// Nếu là số dương chẳn thì ...
function checkEvenPositive(n) {
  if (n > 0 && n % 2 === 0) {
  }
}
// Nếu là số dương chẵn và lớn hơn 10 thì ...
function checkEvenPositiveHiger10(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
}
// Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì ...
function checkEvenPositive(n) {
  if (n > 0 && n % 2 === 0 && n % 5 === 0 && n > 10) {
  }
}
// Nếu là số dương chẳn hoặc số âm lẻ thì
function checkPositiveNegative(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || isOddNegative) {
  }
}
