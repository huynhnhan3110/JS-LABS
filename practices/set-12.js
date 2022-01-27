function removeDuplicateNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const uniqueNumberSet = new Set(numberList);
  return [...uniqueNumberSet];
  //   return Array.from(uniqueNumberSet);
}
console.log(removeDuplicateNumber([1, 1, 2, 2]));

function removeDuplicateLetter(str) {
  if (str.length === 0) return '';
  const uniqueLetterSet = new Set(str);
  const uniqueLetterArr = Array.from(uniqueLetterSet);
  return uniqueLetterArr.join('');
}
console.log(removeDuplicateLetter('acabbcc'));

function intersectionSet(set1, set2) {
  const intersectionSet = new Set();
  for (const item of set1) {
    if (set2.has(item)) intersectionSet.add(item);
  }
  return intersectionSet;
}
console.log(intersectionSet(new Set([1, 2, 34, 44]), new Set([3, 4, 5, 6])));
