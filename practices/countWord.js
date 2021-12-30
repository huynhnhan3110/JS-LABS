export function countWords(str) {
  if (str.length === 0) return 0;
  let numberOfWord = 0;

  const arrWords = str.split(' ');
  arrWords.forEach((word) => {
    if (word.length > 0) numberOfWord++;
  });
  return numberOfWord;
}
