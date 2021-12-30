// export function mostFrequent(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
//   let statisticNumber = {};
//   let maxFrequentNum;
//   let numRS;
//   for (let i = 0; i < numberList.length; i++) {
//     const num = numberList[i];
//     statisticNumber[num] = statisticNumber[num] === undefined ? 1 : statisticNumber[num] + 1;
//     if (statisticNumber[num] > maxFrequentNum || maxFrequentNum === undefined) {
//       maxFrequentNum = statisticNumber[num];
//       numRS = num;
//     }
//   }
//   return numRS;
// }

function mostFrequent(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const statistic = numberList.reduce((statisticNumber, num) => {
    statisticNumber[num] = statisticNumber[num] === undefined ? 1 : statisticNumber[num] + 1;
    return statisticNumber;
  }, {});
  let maxFrequen;
  let numRS;
  for (const key in statistic) {
    if (maxFrequen === undefined || maxFrequen < statistic[key]) {
      maxFrequen = statistic[key];
      numRS = key;
    }
  }
  return numRS;
}
console.log(mostFrequent([4, 4, 4, 4, 2, 3, 2, 9, 9, 2, 3, 3, 4, 5, 9, 9, 9, 9]));
