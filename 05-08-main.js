// Check positive even number
// v1 flag
function checkPositiveEvenNumber(n) {
  let isValid;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}
console.log(checkPositiveEvenNumber(5));

// v2
function checkPositiveEvenNumber(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}
console.log(checkPositiveEvenNumber(8));
// v3
function checkPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}
console.log(checkPositiveEvenNumber(7));
// v4
function checkPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
}
console.log(checkPositiveEvenNumber(4));
