export function findFirstDuplicate(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  const statisticNumber = {};
  for (let i = 0; i < numberList.length; i++) {
    const num = numberList[i];
    statisticNumber[num] = statisticNumber[num] === undefined ? 1 : statisticNumber[num] + 1;

    if (statisticNumber[num] === 2) {
      return num;
    }
  }
  return -1;
}
