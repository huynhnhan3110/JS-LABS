function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let count = 0;
  const result = numberList.reduce((sum, number) => {
    if (number % 2 == 0) {
      sum += number;
      count++;
    }
    return sum;
  }, 0);
  if (count === 0) return 0;
  return Math.round(result / count);
}
console.log(calcAvgOfAllEvenNumbers(1));
console.log(calcAvgOfAllEvenNumbers([]));
console.log(calcAvgOfAllEvenNumbers([1]));
console.log(calcAvgOfAllEvenNumbers([1, 2]));
console.log(calcAvgOfAllEvenNumbers([1, 2, 4]));
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]));
