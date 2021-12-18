// export function statisticsWords(str) {
//   if (str.length === 0) return {};

//   const statistics = {};
//   str
//     .split(' ')
//     .filter((item) => item !== '')
//     .forEach((word) => {
//       if (statistics[word]) {
//         statistics[word] += 1;
//       } else {
//         statistics[word] = 1;
//       }
//     });

//   return statistics;
// }
// export function statisticsWords(str) {
//   if (str.length === 0) return {};

//   return str
//     .split(' ')
//     .filter((item) => item !== '')
//     .reduce((statistics, word) => {
//       statistics[word] = statistics[word] !== undefined ? statistics[word] + 1 : 1;
//       return statistics;
//     }, {});
// }
export function statisticsWords(str) {
  if (str.length === 0) return {};

  return str
    .split(' ')
    .filter((item) => item !== '')
    .reduce((statistics, word) => {
      statistics[word] ? (statistics[word] += 1) : (statistics[word] = 1);
      return statistics;
    }, {});
}
