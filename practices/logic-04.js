export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let statisticNumber = {};
  let maxKey = undefined;
  for (let i = 0; i < numberList.length; i++) {
    const num = numberList[i];
    statisticNumber[num] = statisticNumber[num] === undefined ? 1 : statisticNumber[num] + 1;

    if (maxKey === undefined || statisticNumber[num] > statisticNumber[maxKey]) maxKey = num;
  }
  return Number(maxKey);
}
