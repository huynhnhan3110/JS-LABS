// for i
// export function subArrayEvenNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return [];

//   let subArrayList = [];
//   let subArray = [];

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     if (number % 2 === 0) subArray.push(number);

//     const isResetSubArray = number % 2 === 1 || i === numberList.length - 1;
//     if (subArray.length > 0 && isResetSubArray) {
//       subArrayList.push(subArray);
//       subArray = [];
//     }
//   }
//   return subArrayList;
// }

// export function subArrayEvenNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return [];

//   return numberList.reduce((subArrayList, number) => {
//     let subArray = [];
//     if (number % 2 === 0) subArray.push(number);
//     if (
//       subArray.length > 0 &&
//       (number % 2 === 1 || === numberList.length - 1)
//     ) {
//       subArrayList.push(subArray);
//       subArray = [];
//     }
//     return subArrayList;
//   }, []);
// }
