// find longest word
function findLongestWordI(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let longestWord = numberList[0];

  for (let i = 1; i < numberList.length; i++) {
    const currentWord = numberList[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}
function findLongestWordEach(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let longestWord = numberList[0];
  numberList.forEach((currentWord) => {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  });
  return longestWord;
}

function findLongestWordReduce(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.reduce((longestWord, currentWord) =>
    longestWord.length < currentWord.length ? currentWord : longestWord
  );
}
console.log(findLongestWordI(['nhan', 'huunhan']));
console.log(findLongestWordEach(['nhan', 'huunhan']));
console.log(findLongestWordReduce(['nhan', 'huunhan']));
