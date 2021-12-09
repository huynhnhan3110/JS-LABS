// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    sum = 0;
    for (let j = 0; j < numberList[i]; j++) {
      if (numberList[i] % j === 0) sum += j;
    }
    if (sum !== numberList[i]) return false;
  }

  return true;
}
// console.log(isAllPerfectNumbersV1([]));
// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  const count = numberList.reduce((total, number) => {
    let sum = 0;
    console.log(total);
    for (let i = 0; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    if (sum === number) {
      total += 1;
    }
    return total;
  }, 0);
  if (count === numberList.length) return true;
  else return false;
}
// console.log(isAllPerfectNumbersV2([6]));
// every
function isAllPerfectNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.every((num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  });
}
// console.log(isAllPerfectNumbersV3([6, 28]));
