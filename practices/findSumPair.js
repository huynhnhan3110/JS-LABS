export function findSumPair(numberList, targetSum) {
  if (
    !Array.isArray(numberList) ||
    targetSum === undefined ||
    numberList.length === 0 ||
    targetSum <= 0
  )
    return [];
  let sumPair = [];
  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      const element = numberList[j];
      if (numberList[i] + numberList[j] === targetSum) {
        sumPair.push(numberList[i], numberList[j]);
      }
    }
  }
  return sumPair.sort((a, b) => a - b);
}
// console.log(findSumPair([1, 2, 3, 4], 7));
