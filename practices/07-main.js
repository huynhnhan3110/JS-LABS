// using includes
// export function countUniqueNumber(numberList) {
//     if(!Array.isArray(numberList) || numberList.length === 0) return 0;

//     let numbersUnique = [];
//     for(let i = 0; i<numberList.length; i++) {
//         if(!numbersUnique.includes(numberList[i])) {
//             numbersUnique.push(numberList[i]);
//         }
//     }

//     return numbersUnique.length;
// }
// using object key
// export function countUniqueNumber(numberList) {
//     if(!Array.isArray(numberList) || numberList.length === 0) return 0;

//     let numbersUnique = {};
//     for(let i = 0; i<numberList.length; i++) {
//         numbersUnique[numberList[i]] = true;
//     }
//     return Object.keys(numbersUnique).length;
// }
// using reduce
// export function countUniqueNumber(numberList) {
//     if(!Array.isArray(numberList) || numberList.length === 0) return 0;

//     return numberList.reduce((count, num) => {
//         if(!count.includes(num)) count.push(num);
//         return count;
//     },[]).length;
// }
// using reduce
export function countUniqueNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return Object.keys(
    numberList.reduce((count, num) => {
      count[num] = true;
      return count;
    }, {})
  ).length;
}
