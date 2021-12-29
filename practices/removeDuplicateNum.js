export function uniqueLetters(str) {
  if (str.length === 0) return '';
  let statictisLetter = {};
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    statictisLetter[letter] =
      statictisLetter[letter] === undefined ? 1 : statictisLetter[letter] + 1;
  }

  for (const key in statictisLetter) {
    if (statictisLetter[key] === 1) result.push(key);
  }
  return result.join('');
}
